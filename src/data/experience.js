// 경력/학력/교육 데이터
// work: 경력, education: 학력, training: 교육

export const experience = [
  {
    id: 1,
    type: "education",
    title: "정보통신과",
    organization: "수원과학대학교",
    period: "2020.03 ~ 2022.02",
    description: "학사 졸업",
    details: [
      "파이썬 프로그래밍과 펌웨어 기반 임베디드 시스템 제어",
      "초고속 통신망 운용 및 네트워크 회로 설계 분석",
      "정보통신 기기 설계 및 캡스톤 디자인 과제 수행"
    ]
  },
  {
    id: 2,
    type: "education",
    title: "소프트웨어학과",
    organization: "안양대학교",
    period: "2022.03 ~ 2024.02",
    description: "학사 졸업",
    details: [
      "JAVA 및 오라클 프로그래밍 기반의 데이터베이스 설계 및 관리",
      "딥러닝과 빅데이터 분석을 활용한 영상 미디어 처리 및 데이터 알고리즘 구현",
      "웹 및 앱 응용 기술을 반영한 캡스톤 디자인 프로젝트 수행 및 최우수상 수상"
    ]
  },
  {
    id: 3,
    type: "training",
    title: "AI 융합 및 로우코드 솔루션 개발 과정",
    organization: "글로벌 아카데미",
    period: "2025.04 ~ 2025.12",
    description: "우수훈련생 표창 수료",
    details: [
      "Java와 Python 기반 데이터 분석 및 AI 예측 자동화 시스템 개발",
      "OutSystems 및 RPA 활용 로우코드 기반 스마트 관리 솔루션 구축",
      "AI 기술 융합 비즈니스 프로세스 자동화 시스템 설계 및 구현"
    ]
  }
];
