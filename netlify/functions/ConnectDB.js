const oracledb = require('oracledb');

// 전역 pool 변수 선언
let pool = null;

// DB 연결 풀 초기화 함수
async function initPool() {
    if (!pool) {
        try {
            pool = await oracledb.createPool({
                user: process.env.ORACLE_USER,
                password: process.env.ORACLE_PASSWORD,
                connectString: process.env.ORACLE_CONNECTION_STRING,
                poolMin: 0,           // 최소 연결 수 감소
                poolMax: 1,           // 최대 연결 수 유지
                poolIncrement: 1,     // 증가 단위
                poolTimeout: 10,      // 타임아웃 설정
                queueTimeout: 5000,   // 큐 대기 시간
                connectTimeout: 5000, // 연결 타임아웃
                poolPingInterval: 60  // 연결 유지를 위한 ping 간격
            });
            
            console.log("DB 연결 풀이 생성되었습니다");
        } catch (err) {
            console.error('DB 연결 풀 생성 실패:', err);
            throw err;
        }
    }
    return pool;
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

    let connection;
    try {
        const { query } = JSON.parse(event.body);
        
        // 풀 초기화 및 연결 획득 (타임아웃 설정)
        const pool = await Promise.race([
            initPool(),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('DB 풀 초기화 시간 초과')), 10000)
            )
        ]);

        connection = await Promise.race([
            pool.getConnection(),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('DB 연결 시간 초과')), 5000)
            )
        ]);
        
        // 쿼리 실행 (타임아웃 설정)
        const result = await Promise.race([
            connection.execute(query, [], {
                outFormat: oracledb.OUT_FORMAT_OBJECT,
                autoCommit: true,
                fetchArraySize: 100,    // 성능 최적화
                prefetchRows: 100       // 성능 최적화
            }),
            new Promise((_, reject) => 
                setTimeout(() => reject(new Error('쿼리 실행 시간 초과')), 10000)
            )
        ]);

        return {
            statusCode: 200,
            headers,
            body: JSON.stringify(result.rows)
        };

    } catch (error) {
        console.error('데이터베이스 오류:', error);
        return {
            statusCode: 500,
            headers,
            body: JSON.stringify({
                error: '데이터베이스 작업 중 오류가 발생했습니다',
                details: error.message
            })
        };
    } finally {
        if (connection) {
            try {
                await connection.close();
            } catch (err) {
                console.error('연결 종료 오류:', err);
            }
        }
    }
};