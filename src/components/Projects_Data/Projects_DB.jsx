import { useState, useEffect } from 'react';
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
                    },
                    body: JSON.stringify({
                        query: `
                            SELECT 
                                name,
                                TO_CHAR(project_date, 'YYYY"년" MM"월" DD"일"') as date,
                                skills,
                                explain,
                                detail_explain,
                                url
                            FROM Project_Data
                            ORDER BY project_date DESC
                        `
                    })
                });

                if (!response.ok) {
                    throw new Error(`서버 응답 오류: ${response.status}`);
                }

                const data = await response.json();
                
                // 데이터가 비어있는지 확인
                if (!data || data.length === 0) {
                    throw new Error('프로젝트 데이터가 없습니다.');
                }

                // skills 문자열을 배열로 변환하고 빈 값 처리
                const formattedData = data.map(project => ({
                    ...project,
                    skills: project.skills ? project.skills.split(',').map(skill => skill.trim()) : []
                }));

                setProjectData(formattedData);
                setLoading(false);
            } catch (err) {
                console.error('프로젝트 데이터 조회 오류:', err);
                setError(err.message);
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    if (loading) {
        return (
            <div style={{ textAlign: 'center', padding: '20px' }}>
                <p>프로젝트 데이터를 불러오는 중입니다...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{ textAlign: 'center', padding: '20px', color: 'red' }}>
                <p>데이터 로딩 중 오류가 발생했습니다</p>
                <p>{error}</p>
            </div>
        );
    }

    return <Project_Card Card_data={projectData} />;
}