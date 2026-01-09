// 프로젝트 목록 데이터

export const projects = [
  {
    id: 1,
    title: "E-Commerce 플랫폼",
    shortDescription: "React와 Node.js를 활용한 풀스택 이커머스 웹 애플리케이션",
    thumbnail: "/images/projects/ecommerce-thumb.png",
    date: "2025.01 - 2025.03",
    category: "웹 애플리케이션",
    techStack: ["React", "Node.js", "MongoDB", "Express", "Redux"],
    githubUrl: "https://github.com/username/ecommerce",
    liveUrl: "https://ecommerce-demo.netlify.app",
    details: {
      background: "현대적인 이커머스 플랫폼의 핵심 기능을 직접 구현해보고자 시작한 프로젝트입니다. 사용자 인증, 장바구니, 결제 시스템 등 실제 서비스에서 필요한 기능들을 구현했습니다.",
      features: [
        "JWT 기반 사용자 인증 및 권한 관리",
        "상품 검색, 필터링, 페이지네이션",
        "장바구니 및 위시리스트 기능",
        "Stripe를 활용한 결제 시스템 연동",
        "관리자 대시보드 및 상품 관리"
      ],
      challenges: "대량의 상품 데이터를 효율적으로 처리하기 위해 MongoDB 인덱싱과 페이지네이션 최적화를 적용했습니다.",
      images: [
        "/images/projects/ecommerce-1.png",
        "/images/projects/ecommerce-2.png",
        "/images/projects/ecommerce-3.png"
      ]
    }
  },
  {
    id: 2,
    title: "실시간 채팅 앱",
    shortDescription: "Socket.io를 활용한 실시간 메시징 애플리케이션",
    thumbnail: "/images/projects/chat-thumb.png",
    date: "2024.10 - 2024.12",
    category: "웹 애플리케이션",
    techStack: ["React", "Socket.io", "Node.js", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/username/chat-app",
    liveUrl: null,
    details: {
      background: "WebSocket을 활용한 실시간 통신 기술을 학습하기 위해 개발한 채팅 애플리케이션입니다.",
      features: [
        "1:1 및 그룹 채팅 지원",
        "실시간 메시지 전송 및 읽음 확인",
        "파일 및 이미지 공유",
        "사용자 온라인 상태 표시",
        "메시지 검색 및 북마크"
      ],
      challenges: "Redis를 활용한 세션 관리와 메시지 캐싱으로 서버 부하를 줄이고 응답 속도를 개선했습니다.",
      images: [
        "/images/projects/chat-1.png",
        "/images/projects/chat-2.png"
      ]
    }
  },
  {
    id: 3,
    title: "할일 관리 앱",
    shortDescription: "드래그 앤 드롭을 지원하는 칸반 스타일 할일 관리 앱",
    thumbnail: "/images/projects/todo-thumb.png",
    date: "2024.08 - 2024.09",
    category: "웹 애플리케이션",
    techStack: ["Vue.js", "Vuex", "Firebase", "TailwindCSS"],
    githubUrl: "https://github.com/username/todo-app",
    liveUrl: "https://todo-demo.netlify.app",
    details: {
      background: "칸반 보드 스타일의 직관적인 할일 관리 도구를 만들어 생산성을 높이고자 개발했습니다.",
      features: [
        "드래그 앤 드롭으로 태스크 이동",
        "보드, 리스트, 태스크 CRUD",
        "실시간 데이터 동기화",
        "다크 모드 지원",
        "태스크 마감일 및 알림"
      ],
      challenges: "Firebase Realtime Database를 활용하여 여러 기기 간 실시간 동기화를 구현했습니다.",
      images: [
        "/images/projects/todo-1.png",
        "/images/projects/todo-2.png"
      ]
    }
  },
  {
    id: 4,
    title: "AI 이미지 생성기",
    shortDescription: "OpenAI DALL-E API를 활용한 이미지 생성 웹 서비스",
    thumbnail: "/images/projects/ai-image-thumb.png",
    date: "2024.06 - 2024.07",
    category: "AI/ML",
    techStack: ["Next.js", "OpenAI API", "Prisma", "PostgreSQL"],
    githubUrl: "https://github.com/username/ai-image",
    liveUrl: null,
    details: {
      background: "AI 이미지 생성 기술에 관심을 가지고 OpenAI API를 활용한 서비스를 직접 구현해보았습니다.",
      features: [
        "텍스트 프롬프트로 이미지 생성",
        "생성 이력 저장 및 갤러리",
        "이미지 다운로드 및 공유",
        "프롬프트 템플릿 제공"
      ],
      challenges: "API 호출 비용을 최적화하기 위해 캐싱과 요청 제한을 구현했습니다.",
      images: [
        "/images/projects/ai-image-1.png"
      ]
    }
  },
  {
    id: 5,
    title: "블로그 플랫폼",
    shortDescription: "마크다운 기반의 개인 블로그 플랫폼",
    thumbnail: "/images/projects/blog-thumb.png",
    date: "2024.04 - 2024.05",
    category: "웹 애플리케이션",
    techStack: ["Next.js", "MDX", "TailwindCSS", "Vercel"],
    githubUrl: "https://github.com/username/blog",
    liveUrl: "https://my-blog.vercel.app",
    details: {
      background: "개인 기술 블로그를 직접 만들어보고자 시작한 프로젝트입니다.",
      features: [
        "마크다운/MDX 포스트 작성",
        "코드 하이라이팅",
        "카테고리 및 태그 분류",
        "SEO 최적화",
        "RSS 피드 생성"
      ],
      challenges: "SSG를 활용하여 빠른 페이지 로딩과 SEO 최적화를 동시에 달성했습니다.",
      images: [
        "/images/projects/blog-1.png",
        "/images/projects/blog-2.png"
      ]
    }
  },
  {
    id: 6,
    title: "날씨 대시보드",
    shortDescription: "OpenWeather API를 활용한 날씨 정보 대시보드",
    thumbnail: "/images/projects/weather-thumb.png",
    date: "2024.03 - 2024.03",
    category: "웹 애플리케이션",
    techStack: ["React", "Chart.js", "OpenWeather API", "CSS Modules"],
    githubUrl: "https://github.com/username/weather",
    liveUrl: "https://weather-demo.netlify.app",
    details: {
      background: "외부 API 연동과 데이터 시각화를 학습하기 위해 개발한 날씨 앱입니다.",
      features: [
        "현재 날씨 및 5일 예보",
        "도시 검색 및 즐겨찾기",
        "차트로 온도 변화 시각화",
        "반응형 디자인"
      ],
      challenges: "Chart.js를 활용한 데이터 시각화와 Geolocation API를 통한 위치 기반 날씨 조회를 구현했습니다.",
      images: [
        "/images/projects/weather-1.png"
      ]
    }
  },
  {
    id: 7,
    title: "포트폴리오 웹사이트",
    shortDescription: "React와 Vite를 활용한 개인 포트폴리오 웹사이트",
    thumbnail: "/images/projects/portfolio-thumb.png",
    date: "2024.02 - 2024.02",
    category: "웹 애플리케이션",
    techStack: ["React", "Vite", "CSS", "Netlify"],
    githubUrl: "https://github.com/username/portfolio",
    liveUrl: "https://portfolio.netlify.app",
    details: {
      background: "나만의 개성 있는 포트폴리오 웹사이트를 만들기 위해 개발했습니다.",
      features: [
        "반응형 디자인",
        "다크/라이트 모드 전환",
        "프로젝트 모달 상세보기",
        "스크롤 애니메이션"
      ],
      challenges: "JSON 데이터 기반으로 콘텐츠를 관리하여 유지보수성을 높였습니다.",
      images: [
        "/images/projects/portfolio-1.png"
      ]
    }
  },
  {
    id: 8,
    title: "음악 스트리밍 UI",
    shortDescription: "Spotify 스타일의 음악 스트리밍 UI 클론",
    thumbnail: "/images/projects/music-thumb.png",
    date: "2024.01 - 2024.01",
    category: "UI/UX",
    techStack: ["React", "Styled Components", "Spotify API"],
    githubUrl: "https://github.com/username/music-player",
    liveUrl: null,
    details: {
      background: "Spotify의 UI/UX를 분석하고 클론 코딩하며 디자인 원칙을 학습했습니다.",
      features: [
        "플레이리스트 탐색",
        "음악 재생 컨트롤러",
        "검색 기능",
        "사용자 라이브러리"
      ],
      challenges: "Spotify API 연동과 OAuth 인증 흐름을 구현했습니다.",
      images: [
        "/images/projects/music-1.png"
      ]
    }
  },
  {
    id: 9,
    title: "가계부 앱",
    shortDescription: "수입/지출을 관리하는 개인 가계부 애플리케이션",
    thumbnail: "/images/projects/expense-thumb.png",
    date: "2023.11 - 2023.12",
    category: "웹 애플리케이션",
    techStack: ["React", "Node.js", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/username/expense-tracker",
    liveUrl: null,
    details: {
      background: "개인 재정 관리를 위한 간단하고 직관적인 가계부 앱을 개발했습니다.",
      features: [
        "수입/지출 기록",
        "카테고리별 분류",
        "월별 리포트 및 차트",
        "예산 설정 및 알림"
      ],
      challenges: "대량의 거래 내역을 효율적으로 조회하기 위한 쿼리 최적화를 적용했습니다.",
      images: [
        "/images/projects/expense-1.png"
      ]
    }
  },
  {
    id: 10,
    title: "레시피 공유 플랫폼",
    shortDescription: "사용자들이 레시피를 공유하고 탐색하는 커뮤니티 플랫폼",
    thumbnail: "/images/projects/recipe-thumb.png",
    date: "2023.09 - 2023.10",
    category: "웹 애플리케이션",
    techStack: ["Vue.js", "Firebase", "Vuetify"],
    githubUrl: "https://github.com/username/recipe-share",
    liveUrl: null,
    details: {
      background: "요리에 관심 있는 사용자들이 레시피를 공유할 수 있는 커뮤니티를 만들었습니다.",
      features: [
        "레시피 등록 및 수정",
        "재료별 검색",
        "좋아요 및 댓글",
        "팔로우 기능"
      ],
      challenges: "Firebase를 활용한 실시간 데이터 동기화와 이미지 업로드를 구현했습니다.",
      images: [
        "/images/projects/recipe-1.png"
      ]
    }
  },
  {
    id: 11,
    title: "퀴즈 게임 앱",
    shortDescription: "다양한 분야의 퀴즈를 풀 수 있는 인터랙티브 게임",
    thumbnail: "/images/projects/quiz-thumb.png",
    date: "2023.07 - 2023.08",
    category: "게임",
    techStack: ["React", "TypeScript", "Open Trivia API"],
    githubUrl: "https://github.com/username/quiz-game",
    liveUrl: "https://quiz-game.netlify.app",
    details: {
      background: "재미있게 지식을 테스트할 수 있는 퀴즈 게임을 개발했습니다.",
      features: [
        "다양한 카테고리 선택",
        "난이도 설정",
        "점수 및 순위표",
        "타이머 기능"
      ],
      challenges: "Open Trivia API를 활용하여 다양한 퀴즈 데이터를 제공합니다.",
      images: [
        "/images/projects/quiz-1.png"
      ]
    }
  },
  {
    id: 12,
    title: "코드 스니펫 관리자",
    shortDescription: "개발자를 위한 코드 스니펫 저장 및 관리 도구",
    thumbnail: "/images/projects/snippet-thumb.png",
    date: "2023.05 - 2023.06",
    category: "개발 도구",
    techStack: ["Electron", "React", "SQLite", "CodeMirror"],
    githubUrl: "https://github.com/username/code-snippets",
    liveUrl: null,
    details: {
      background: "자주 사용하는 코드 조각을 효율적으로 관리하기 위한 데스크톱 앱입니다.",
      features: [
        "코드 스니펫 저장 및 분류",
        "구문 하이라이팅",
        "태그 기반 검색",
        "클립보드 복사"
      ],
      challenges: "Electron을 처음 사용하며 크로스 플랫폼 앱 개발 경험을 쌓았습니다.",
      images: [
        "/images/projects/snippet-1.png"
      ]
    }
  }
];
