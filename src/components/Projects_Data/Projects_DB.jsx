import { useState, useEffect, memo } from 'react';
import Project_Card from '../Project_Card';

export default function Projects_DB() {
    const [projectData, setProjectData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await fetch('/.netlify/functions/ConnectDB', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        // 요청 재시도 횟수 제한
                        'X-Retry-Count': '3'
                    },
                    // 타임아웃 설정
                    timeout: 5000,
                    body: JSON.stringify({
                        query: `/*+ MAX_EXECUTION_TIME(5000) */
                            SELECT /* Projects_DB.jsx */
                                id, name, 
                                TO_CHAR(project_date, 'YYYY"년" MM"월" DD"일"') as date,
                                skills, explain, detail_explain, url
                            FROM Project_Data
                            WHERE ROWNUM <= 100
                            ORDER BY project_date DESC NULLS LAST`
                    })
                });

                if (!response.ok) {
                    const errorText = await response.text();
                    throw new Error(`API 오류 (${response.status}): ${errorText}`);
                }

                const data = await response.json();
                
                if (data.error) {
                    throw new Error(data.error);
                }

                if (!Array.isArray(data)) {
                    throw new Error('잘못된 데이터 형식입니다');
                }

                if (data.length === 0) {
                    throw new Error('프로젝트 데이터가 없습니다');
                }

                // skills 문자열을 배열로 변환하고 빈 값 처리
                const formattedData = data.map(project => ({
                    ...project,
                    skills: project.skills ? project.skills.split(',').map(skill => skill.trim()) : [],
                    detail_explain: project.detail_explain || project.explain || '상세 설명이 없습니다'
                }));

                setProjectData(formattedData);
            } catch (err) {
                // 구체적인 에러 처리
                if (err.name === 'AbortError') {
                    setError('요청 시간이 초과되었습니다');
                } else if (!navigator.onLine) {
                    setError('인터넷 연결을 확인해주세요');
                } else {
                    setError(`데이터 로딩 오류: ${err.message}`);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();

        // 컴포넌트 언마운트시 cleanup
        return () => {
            setProjectData([]);
            setError(null);
        };
    }, []);

    if (loading) {
        return (
            <div className="loading-container" style={{ 
                textAlign: 'center', 
                padding: '20px',
                backgroundColor: '#333333',
                borderRadius: '8px',
                margin: '10px 0'
            }}>
                <div className="loading-spinner" style={{
                    width: '50px',
                    height: '50px',
                    margin: '0 auto',
                    border: '3px solid #f3f3f3',
                    borderTop: '3px solid #4a9eff',
                    borderRadius: '50%',
                    animation: 'spin 1s linear infinite'
                }}>
                    <style>
                        {`
                            @keyframes spin {
                                0% { transform: rotate(0deg); }
                                100% { transform: rotate(360deg); }
                            }
                        `}
                    </style>
                </div>
                <p>데이터를 불러오는 중...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container" style={{ 
                textAlign: 'center', 
                padding: '20px', 
                color: '#ff6b6b',
                backgroundColor: '#333333',
                borderRadius: '8px',
                margin: '10px 0'
            }}>
                <p>데이터를 불러올 수 없습니다</p>
                <p>{error}</p>
                <button 
                    onClick={() => window.location.reload()}
                    style={{
                        padding: '8px 16px',
                        backgroundColor: '#4a9eff',
                        border: 'none',
                        borderRadius: '4px',
                        color: 'white',
                        cursor: 'pointer',
                        marginTop: '10px'
                    }}
                >
                    새로고침
                </button>
            </div>
        );
    }

    // Projects_DB.jsx에 메모이제이션 적용
    const MemoizedProjectCard = memo(Project_Card);
    return <MemoizedProjectCard Card_data={projectData} />;
}