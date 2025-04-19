import { useState } from 'react';
import './Projects_Data/Projects_DB';

export default function Project_Card({ Card_data }) {
    const [selectedProject, setSelectedProject] = useState(null);

    // 스타일 정의
    const nameStyle = { fontSize: '20px', fontWeight: 'bold' };
    const dateStyle = {
        fontSize: '12px',
        fontWeight: 'bold',
        color: '#989898',
    };
    const skillsStyle = { fontSize: '12px', backgroundColor: '#7b415d' };
    const explainStyle = { fontSize: '13px' };

    const modalStyle = {
        display: selectedProject ? 'flex' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(5px)',
    };

    const modalContentStyle = {
        backgroundColor: '#2a2a2a',
        padding: '40px',
        borderRadius: '15px',
        width: '90%',
        maxWidth: '800px',
        maxHeight: '90vh',
        overflow: 'auto',
        boxShadow: '0 0 20px rgba(0, 0, 0, 0.3)',
        border: '1px solid #444',
        animation: 'modalFade 0.3s ease-in-out',
        color: '#fff',
    };

    const handleClick = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const createMarkup = (htmlContent) => {
        return { __html: htmlContent || '' };
    };

    if (!Card_data || Card_data.length === 0) {
        return <div>프로젝트 데이터가 없습니다.</div>;
    }

    return (
        <>
            <div className="explanation_Card">
                {Card_data.map((project, index) => (
                    <div
                        key={index}
                        className="explanation"
                        onClick={() => handleClick(project)}
                    >
                        <text style={nameStyle}>{project.name || '-내용없음-'}</text>
                        <br />
                        <text style={dateStyle}>{project.date || '-내용없음-'}</text>
                        <br />
                        {Array.isArray(project.skills) && project.skills.length > 0 ? (
                            <div style={{
                                display: 'flex',
                                gap: '5px',
                                marginBottom: '5px',
                                flexWrap: 'wrap'
                            }}>
                                {project.skills.map((skill, skillIndex) => (
                                    <span
                                        key={skillIndex}
                                        style={{
                                            ...skillsStyle,
                                            padding: '2px 5px',
                                            borderRadius: '4px',
                                            color: 'white',
                                            whiteSpace: 'nowrap'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        ) : null}
                        <text style={{
                            ...explainStyle,
                            display: 'block',
                            marginTop: '5px'
                        }}>
                            {project.explain || '-내용없음-'}
                        </text>
                        <a
                            href={project.url || '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{
                                fontSize: '11px',
                                color: '#4a9eff',
                                marginTop: '5px',
                                display: 'block'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {project.url || '-내용없음-'}
                        </a>
                    </div>
                ))}
            </div>

            {selectedProject && (
                <div style={modalStyle} onClick={closeModal}>
                    <div style={modalContentStyle} onClick={(e) => e.stopPropagation()}>
                        <h2>{selectedProject.name}</h2>
                        <p style={{ color: '#989898' }}>{selectedProject.date}</p>
                        {selectedProject.skills && (
                            <div style={{ margin: '10px 0' }}>
                                {selectedProject.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        style={{
                                            ...skillsStyle,
                                            padding: '2px 5px',
                                            borderRadius: '4px',
                                            color: 'white',
                                            marginRight: '5px',
                                            display: 'inline-block',
                                            marginBottom: '5px'
                                        }}
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        )}
                        <div
                            dangerouslySetInnerHTML={createMarkup(
                                selectedProject.detail_explain || selectedProject.explain
                            )}
                            style={{ margin: '20px 0' }}
                        />
                        <a
                            href={selectedProject.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ color: '#4a9eff' }}
                        >
                            GitHub 저장소 방문
                        </a>
                    </div>
                </div>
            )}
        </>
    );
}
