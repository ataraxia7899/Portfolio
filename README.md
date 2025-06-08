# 📄 포트폴리오 프로젝트

## ☁️ netlify를 통한 호스팅된 주소 [![Netlify Status](https://api.netlify.com/api/v1/badges/d7d0acfd-2fd6-4d44-a64c-f3bb4b2196ae/deploy-status)](https://app.netlify.com/sites/bjh-portfolio/deploys)

https://bjh-portfolio.netlify.app/

## 🖥️ 프로젝트 소개

이 프로젝트는 React를 사용하여 개발된 **포트폴리오 웹사이트**입니다.  
노션에 작성되있는 내 포트폴리오를 보면서 작성한 포트폴리오
<br>
보면서 작성된 것이라 비슷한 디자인으로 작업되었습니다.

## :clipboard: 브랜치 설명

- Netlify 함수를 사용해 서버 없이 오라클 DB의 데이터를 불러오는 코드를 작성하다 포기하고 다시 작성하게 되어 이전 작성된 코드는 백업을 위해 tryOracleDB라는 이름으로 저장하였습니다.

- master 브랜치에서 node.js와 mariaDB를 사용해 DB값을 불러와 데이터를 출력하는 코드로 작성하게되면서 24시간 호스팅이라는 장점을 버리긴 아까워 buildNetlify 브랜치를 만들어 해당 브랜치의 코드에서 JSON을 통해 고정텍스트값으로 지속적으로 호스팅하도록 세팅했습니다.

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
- 프로젝트 로딩시 FadeIn 애니메이션 효과 구현

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

```
📦 Portfolio
├── 📂 public/                # 정적 파일 디렉토리
│   ├── browser.png          # 파비콘 (16x16)
│   ├── taskbar.png          # 윈도우 작업 표시줄용 아이콘 (32x32)
│   ├── Desktop.png          # 데스크톱 바로가기용 아이콘 (96x96)
│   ├── Apple.png           # iOS/Safari 홈스크린 아이콘 (180x180)
│   └── preview.jpeg        # SNS 공유용 미리보기 이미지
│
├── 📂 src/                  # 소스 코드 디렉토리
│   ├── 📂 components/       # 리액트 컴포넌트
│   │   ├── 📂 ScrollCard/   # 스크롤 애니메이션 컴포넌트
│   │   │   ├── ScrollCard.jsx
│   │   │   └── ScrollCard.css
│   │   ├── AboutMe.jsx     # 자기소개 섹션
│   │   ├── Awards.jsx      # 수상 이력 섹션
│   │   ├── Cover.jsx       # 상단 커버 이미지
│   │   ├── Educations.jsx  # 학력 정보 섹션
│   │   ├── Projects.jsx    # 프로젝트 목록 섹션
│   │   ├── Skills_And_Tools.jsx  # 기술 스택 섹션
│   │   └── Title.jsx       # 페이지 타이틀 섹션
│   │
│   ├── 📂 assets/          # 이미지 등 리소스 파일
│   │   └── 📂 image/
│   │       ├── cake.png    # 생일 아이콘
│   │       ├── email.png   # 이메일 아이콘
│   │       └── ...
│   │
│   ├── App.jsx             # 메인 애플리케이션 컴포넌트
│   ├── App.css             # 전역 스타일
│   ├── index.css           # 기본 스타일
│   └── main.jsx            # 진입점
│
├── 📂 Back/                 # 백엔드 서버
│   ├── index.js            # Express 서버 & DB 연동
│   └── package.json        # 백엔드 의존성
│
├── index.html              # 메인 HTML
├── vite.config.js          # Vite 설정
├── eslint.config.js        # ESLint 설정
├── package.json            # 프론트엔드 의존성
└── README.md              # 프로젝트 문서
```

### 📁 주요 디렉토리 및 파일 설명

#### 프론트엔드

- `src/components/`: 각 섹션별 React 컴포넌트
  - `ScrollCard/`: 스크롤 애니메이션 효과를 위한 공통 컴포넌트
  - 각 컴포넌트는 독립적인 섹션을 담당 (AboutMe, Awards 등)
- `src/assets/`: 이미지 등 정적 리소스 파일
- `App.jsx`: 전체 레이아웃 구성 및 컴포넌트 통합
- `index.html`: 메타 태그 및 파비콘 설정

#### 백엔드

- `Back/index.js`: Express 서버 및 MariaDB 연동 로직
  - REST API 엔드포인트 구현
  - DB 쿼리 및 데이터 처리

#### 설정 파일

- `vite.config.js`: Vite 빌드 도구 설정
- `eslint.config.js`: 코드 품질 관리를 위한 ESLint 규칙
- `package.json`: 프로젝트 의존성 관리

---

## 🖧 백엔드 설명

- **Node.js(Express)**와 **MariaDB**를 사용하여 RESTful API 서버를 구현했습니다.
- 주요 엔드포인트:
  - `/aboutme` : 자기소개 데이터 반환
  - `/award` : 수상 내역 반환
  - `/educations` : 학력 정보 반환
  - `/project` : 프로젝트 정보 반환
  - `/skills` : 스킬 및 도구 정보 반환
- 모든 엔드포인트는 JSON 형식으로 데이터를 제공합니다.

## 🏃‍♂️ 로컬 개발 및 실행 방법

### 1. 백엔드(Node.js)

```bash
cd Back
npm install
node index.js
```

- MariaDB가 로컬에서 실행 중이어야 하며, `Back/index.js`의 DB 접속 정보를 환경에 맞게 수정하세요.

### 2. 프론트엔드(React)

```bash
npm install
npm run dev
```

- 기본적으로 [Vite](https://vitejs.dev/) 개발 서버가 5173번 포트에서 실행됩니다.

## 🗄️ DB 테이블 구조

![Image](https://github.com/user-attachments/assets/67cc81cf-f3d4-4ad5-a571-fa79af12d37e)

## 🤝 기여 방법

- 이슈 등록 및 PR(Pull Request) 환영합니다.

## 📜 라이선스 및 연락처

- 본 프로젝트는 개인 포트폴리오 용도로 작성되었습니다.
- 문의: ataraxia7899@gmail.com

<hr>

사용한 아이콘 출처 : [Icons8](Icons8.com)
