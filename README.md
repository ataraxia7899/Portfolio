# 📄 포트폴리오 프로젝트

## ☁️ netlify를 통한 호스팅된 주소 [![Netlify Status](https://api.netlify.com/api/v1/badges/d7d0acfd-2fd6-4d44-a64c-f3bb4b2196ae/deploy-status)](https://app.netlify.com/sites/bjh-portfolio/deploys)

https://bjh-portfolio.netlify.app/

## 🖥️ 프로젝트 소개

이 프로젝트는 React를 사용하여 개발된 **포트폴리오 웹사이트**입니다.  
노션에 작성되있는 내 포트폴리오를 보면서 작성한 포트폴리오
<br>
보면서 작성된 것이라 비슷한 디자인으로 작업되었습니다.

## 📢 구현한 기능

### 1. 반응형 디자인

- 데스크톱과 모바일 환경에 맞춘 레이아웃 자동 조정
- 화면 크기에 따른 그리드 레이아웃 변경
- 모바일 환경에서의 최적화된 UI/UX

### 2. 프로젝트 섹션

- 프로젝트 카드 호버 효과 (그림자, 위치 이동)
- 프로젝트 클릭 시 모달 팝업으로 상세 정보 표시
- 다중 스킬 태그 시스템 구현
- HTML 마크업을 지원하는 상세 설명 렌더링

### 3. 스킬 및 도구 섹션

- 숙련도별 스킬 분류 시스템
- 카테고리별 (Language, Frontend, RDBMS, DevOps) 스킬 정리
- 테이블 형식의 가독성 높은 레이아웃

### 4. 포트폴리오 메타데이터

- SNS 공유를 위한 Open Graph 메타 태그 구현
- 다양한 기기에 대응하는 파비콘 시스템
- 검색 엔진 최적화(SEO) 메타 데이터

### 5. UI/UX 개선

- 블러 효과가 적용된 모달 배경
- 부드러운 트랜지션 효과
- 사용자 친화적인 링크 처리 (새 탭에서 열기)
- 깔끔한 아이콘 통합
- 커스텀 스크롤 인디케이터
  - 기본 스크롤바 제거로 깔끔한 UI
  - 하단 프로그레스 바로 스크롤 진행률 표시
  - 부드러운 애니메이션 효과

### 6. 배포 및 호스팅

- Netlify를 통한 지속적 배포(CD) 구현
- 자동화된 빌드 프로세스
- SSL 인증서 적용

## 🛠️ 기술 스택

- **React**: 웹사이트의 주요 로직 구현.
- **CSS**: 스타일링 및 레이아웃 관리.
- **JavaScript**: 동적 기능 구현.

## 📂 디렉토리 구조

📦 프로젝트 루트<br>
├── public/
│ └── preview.jpeg // 이미지 파일
├── src<br>
│ ├── components<br>
│ │ ├── AboutMe.jsx<br>
│ │ ├── Awards.jsx<br>
│ │ ├── Basic_explanation.jsx<br>
│ │ ├── Cover.jsx<br>
│ │ ├── Skills_And_Tools.jsx<br>
│ │ ├── Title.jsx<br>
│ │ ├── Projects.jsx<br>
│ │ ├── Projects_Data<br>
│ │ │ └── Projects_Data.jsx<br>
│ │ ├── Project_Card.jsx<br>
│ │ └── Educations.jsx<br>
│ ├── assets<br>
│ │ └── image<br>
│ │ ├── cake.png<br>
│ │ ├── email.png<br>
│ │ ├── handup_human.png<br>
│ │ ├── human.png<br>
│ │ ├── pick.png<br>
│ │ └── trophy.png<br>
│ ├── App.jsx<br>
│ ├── App.css<br>
│ ├── index.css<br>
│ └── main.jsx<br>
├── index.html // 메타 태그가 있는 파일
└── README.md

## 📝 다음에 할 작업:

<br>
<hr>

사용한 아이콘 출처 : [Icons8](Icons8.com)
