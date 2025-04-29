const oracledb = require('oracledb');

// Oracle 클라이언트 초기화
let libPath;
if (process.platform === 'win32') {
    libPath = 'C:\\oracle\\instantclient_23_7';
} else {
    libPath = process.env.LD_LIBRARY_PATH;
}

try {
    oracledb.initOracleClient({ libDir: libPath });
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
            poolMax: 3,
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
            autoCommit: true
        });
        
        return result.rows;
    } catch (err) {
        console.error('쿼리 실행 오류:', err);
        throw err;
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
    const headers = {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
    };

    // OPTIONS 요청 처리
    if (event.httpMethod === 'OPTIONS') {
        return {
            statusCode: 200,
            headers,
            body: ''
        };
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