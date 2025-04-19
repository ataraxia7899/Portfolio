const oracledb = require('oracledb');
oracledb.initOracleClient({ libDir: process.env.ORACLE_CLIENT_PATH });

// Oracle 클라이언트 초기화
try {
    oracledb.initOracleClient({ libDir: process.env.LD_LIBRARY_PATH });
} catch (err) {
    console.error('Oracle Client 초기화 오류:', err);
}

// 커넥션 풀 설정
let pool;
async function initPool() {
    try {
        pool = await oracledb.createPool({
            user: process.env.ORACLE_USER,
            password: process.env.ORACLE_PASSWORD,
            connectString: process.env.ORACLE_CONNECTION_STRING,
            poolMin: 1,
            poolMax: 5,
            poolIncrement: 1,
            poolTimeout: 60
        });
        console.log("Connection pool created");
    } catch (err) {
        console.error('Pool 생성 오류:', err);
        throw err;
    }
}

// 데이터베이스 쿼리 실행 함수
async function executeQuery(query) {
    let connection;
    try {
        if (!pool) {
            await initPool();
        }
        
        connection = await pool.getConnection();
        const result = await connection.execute(query, [], {
            outFormat: oracledb.OUT_FORMAT_OBJECT,
            autoCommit: true,
            fetchArraySize: 100
        });
        
        return result.rows;
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('Connection 종료 오류:', err);
            }
        }
    }
}

// Netlify Function 핸들러
exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false;

    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    if (event.httpMethod === 'OPTIONS') {
        return { statusCode: 200, headers, body: '' };
    }

    try {
        const { query } = JSON.parse(event.body);
        const data = await executeQuery(query);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(data)
        };
    } catch (error) {
        console.error('Database error:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: '데이터베이스 작업 중 오류가 발생했습니다.',
                details: error.message
            })
        };
    }
};

const fetchProjects = async () => {
    try {
        const response = await fetch('/.netlify/functions/ConnectDB', {
            // ...existing code...
        });

        const data = await response.json();
        if (!data) {
            throw new Error('데이터 형식이 올바르지 않습니다.');
        }

        // error 필드 확인 추가
        if (data.error) {
            throw new Error(data.error);
        }

        // 데이터가 배열인지 확인
        if (!Array.isArray(data)) {
            throw new Error('데이터 형식이 올바르지 않습니다.');
        }

        // ...existing code...
    } catch (err) {
        console.error('프로젝트 데이터 조회 오류:', err);
        setError(err.message);
        setLoading(false);
    }
};