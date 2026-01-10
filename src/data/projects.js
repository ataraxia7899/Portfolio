// 프로젝트 목록 데이터

export const projects = [
  {
    id: 1,
    title: "포트폴리오 웹사이트",
    shortDescription: "React와 Vite를 활용한 개인 포트폴리오 웹사이트",
    thumbnail: "/portfolio/portfolio-thumb.gif",
    date: "2026.01",
    category: "웹 애플리케이션",
    techStack: ["React", "Netlify"],
    githubUrl: "https://github.com/ataraxia7899/Portfolio",
    liveUrl: "https://ataraxiaportfolio.netlify.app",
    details: {
      background: "나만의 개성 있는 포트폴리오 웹사이트를 직접 개발하여 프로젝트와 기술 스택을 효과적으로 소개하고자 시작한 프로젝트입니다.",
      features: [
        "반응형 디자인 (모바일, 태블릿, 데스크톱)",
        "다크/라이트 모드 테마 전환",
        "타이핑 애니메이션 효과",
        "스크롤 기반 페이드인 애니메이션",
        "프로젝트 모달 상세보기 및 페이지네이션"
      ],
      challenges: "컴포넌트 기반 CSS 구조와 데이터 파일 분리를 통해 유지보수성을 높이고, useMemo를 활용한 성능 최적화를 적용했습니다.",
      images: [
        { src: "/portfolio/portfolio1.gif", caption: "화면 구성" },
        { src: "/portfolio/portfolio2.gif", caption: "프로젝트 세부보기" },
        { src: "/portfolio/portfolio3.gif", caption: "다크모드 전환" }
      ]
    }
  },
  {
    id: 2,
    title: "R.E.P.O 게임 모드",
    shortDescription: "Unity 게임 R.E.P.O.를 위한 확률 기반 업그레이드 공유 시스템 모드",
    thumbnail: "/LuckyUpgrades/LuckyUpgrades-thumb.png",
    date: "2025.12 - 2025.01",
    category: "게임 모드 / 유틸리티",
    techStack: ["C#", ".NET", "BepInEx", "Harmony"],
    githubUrl: "https://github.com/ataraxia7899/REPO_LuckyUpgrades",
    liveUrl: "https://thunderstore.io/c/repo/p/ataraxia7899/LuckyUpgrades/",
    details: {
      background: "협동 게임인 R.E.P.O.에서 플레이어가 획득한 업그레이드를 팀원들과 확률적으로 공유하여 게임의 재미와 협동 요소를 강화하기 위해 개발한 모드입니다.",
      features: [
      "확률 기반 업그레이드 공유 시스템 (Config 설정 가능)",
      "체력, 스태미나 등 총 13종의 업그레이드 항목 개별 지원",
      "Harmony 라이브러리를 이용한 게임 런타임 메서드 패칭",
      "클라이언트 사이드 로컬 적용 방식을 통한 동기화 최적화",
      "Thunderstore Mod Manager를 통한 간편한 배포 및 설치"
    ],
    challenges: "Harmony의 Prefix/Postfix 패치를 활용해 PunManager의 업그레이드 로직을 정확히 후킹하고, 모든 클라이언트에서 일관된 확률 계산이 이루어지도록 설계하는 데 집중했습니다.",
    images: []
  }
},
  {
    id: 3,
    title: "디스코드 TTS 봇",
    shortDescription: "Python과 gTTS를 활용한 실시간 텍스트 음성 변환(TTS) 디스코드 봇",
    thumbnail: "/DiscordTTSBot/DiscordTTSBot-thumb.png",
    date: "2025.11 - 2026.01",
    category: "디스코드 봇 / 애플리케이션",
    techStack: ["Python", "discord.py", "gTTS", "FFmpeg", "Koyeb"],
    githubUrl: "https://github.com/ataraxia7899/discord_tts_bot",
    liveUrl: null,
    details: {
      background: "디스코드 보이스 채널에서 마이크 사용이 어려운 환경의 사용자들이 텍스트 입력만으로 원활하게 소통할 수 있도록 지원하기 위해 개발한 프로젝트입니다.",
      features: [
      "실시간 텍스트 음성 변환(TTS) 및 음성 채널 출력",
      "사용자 입퇴장 감지 및 자동 채널 참여/퇴장 기능",
      "FFmpeg를 활용한 안정적인 오디오 스트리밍",
      "비동기 프로그래밍(asyncio)을 통한 다중 메시지 처리",
      "Koyeb 및 UptimeRobot을 활용한 24/7 무중단 서비스 운영"
    ],
    challenges: "음성 재생 중 발생하는 병목 현상을 해결하기 위해 비동기 큐 관리 로직을 도입하였으며, 클라우드 환경에서 FFmpeg 바이너리 실행 권한 및 경로 설정 문제를 해결하여 배포 안정성을 확보했습니다.",
    images: [
      { "src": "/DiscordTTSBot/DiscordTTSBot1.png", "caption": "봇 실행 및 명령어 인터페이스" },
    ]
  }
},
  {
    id: 4,
    title: "디스코드 음악 봇",
    shortDescription: "Python과 yt-dlp를 활용한 고성능 디스코드 음악 스트리밍 봇",
    thumbnail: "/DiscordMusicBot/DiscordMusicBot-thumb.png",
    date: "2025.01 - 2025.12",
    category: "디스코드 봇 / 애플리케이션",
    techStack: ["Python", "discord.py", "yt-dlp", "FFmpeg", "PyNaCl"],
    githubUrl: "https://github.com/ataraxia7899/discord_music_bot",
    liveUrl: null,
    details: {
      background: "디스코드 보이스 채널에서 유튜브 링크나 검색어를 통해 고음질 음악을 실시간으로 감상하기 위해 개발한 프로젝트입니다.",
      features: [
        "유튜브 검색 및 URL 기반 음악 재생",
        "재생 대기열(Queue) 관리 및 실시간 업데이트",
        "일시정지, 건너뛰기, 볼륨 조절 등 제어 기능",
        "yt-dlp를 활용한 최신 오디오 추출 및 스트리밍",
        "FFmpeg 오디오 필터를 통한 스트리밍 최적화"
      ],
      challenges: "고용량 오디오 데이터 스트리밍 시 발생하는 버퍼링 및 끊김 현상을 해결하기 위해 FFmpeg의 오디오 옵션을 최적화하고, 비동기 처리를 통해 봇의 반응 속도를 개선했습니다.",
      images: []
    }
},
  {
    id: 5,
    title: "비디오 볼륨 컨트롤러",
    shortDescription: "웹 브라우저 내 모든 비디오의 음량을 세밀하게 조절하고 증폭하는 크롬 확장 프로그램",
    thumbnail: "/VideoVolumeController/VideoVolumeController-thumb.png",
    date: "2025.11 - 2025.12",
    category: "브라우저 확장 프로그램",
    techStack: ["JavaScript", "Chrome Extension API"],
    githubUrl: "https://github.com/ataraxia7899/Video-Volume-Controller",
    liveUrl: "https://chromewebstore.google.com/detail/video-volume-controller/nhoeokdaalacbpdaoggnfdpofaafgjba",
    details: {
      background: "웹사이트마다 제각각인 비디오 컨트롤러의 불편함을 해소하고, 브라우저 기본 볼륨 한계를 넘어 더 세밀한 음량 조절 기능을 제공하기 위해 개발한 프로젝트입니다.",
      features: [
        "슬라이더를 이용한 0%에서 최대 600%까지의 볼륨 증폭 기능",
        "유튜브, 트위치 등 다양한 미디어 사이트와의 범용적 호환",
        "단축키를 활용한 실시간 음량 조절 및 뮤트 기능",
        "직관적인 팝업 UI를 통한 현재 활성화된 탭의 볼륨 상태 표시",
        "설정값 자동 저장 및 탭 전환 시 상태 유지 기능"
      ],
      challenges: "다양한 웹사이트의 DOM 구조에서 비디오 요소를 안정적으로 탐색하기 위해 MutationObserver를 활용하였으며, 오디오 컨텍스트(AudioContext) API를 사용하여 브라우저 소프트웨어 레벨에서의 볼륨 증폭 로직을 구현했습니다.",
      images: []
  }
},
  {
    id: 6,
    title: "비디오 속도 조절",
    shortDescription: "웹 브라우저 내 모든 비디오의 재생 속도를 세밀하게 조절하는 크롬 확장 프로그램",
    thumbnail: "/VideoSpeedUp/VideoSpeedUp-thumb.png",
    date: "2025.03 - 2025.12",
    category: "브라우저 확장 프로그램",
    techStack: ["JavaScript", "Chrome Extension API"],
    githubUrl: "https://github.com/ataraxia7899/Video-Speed-Up-Chrome-Extension",
    liveUrl: "https://chromewebstore.google.com/detail/%EB%B9%84%EB%94%94%EC%98%A4-%EC%86%8D%EB%8F%84-%EC%BB%A8%ED%8A%B8%EB%A1%A4%EB%9F%AC/begolcfbgiopgodhfijbppokmnddchei?authuser=6&hl=ko",
    details: {
      background: "학습이나 영상 시청 시 기본 플레이어에서 지원하지 않는 배속 기능을 제공하여 콘텐츠 소비 효율을 높이기 위해 개발했습니다.",
      features: [
        "0.1 단위의 정밀한 재생 속도 조절 (최대 16배속)",
        "자주 사용하는 속도 프리셋 기능",
        "단축키를 이용한 실시간 속도 증감 및 초기화",
        "웹사이트별 설정값 기억 및 자동 적용",
        "현재 재생 속도를 영상 위에 표시하는 오버레이 기능"
      ],
      challenges: "유튜브와 같이 페이지 전환 없이 콘텐츠가 교체되는 SPA 구조에서 비디오 요소를 지속적으로 추적하기 위해 인터벌 타이머와 이벤트 리스너 최적화를 진행했습니다.",
      images: []
  }
},
  {
    id: 7,
    title: "구버전 포트폴리오 웹사이트",
    shortDescription: "React를 처음 학습하며 제작한 첫 번째 개인 포트폴리오 웹사이트",
    thumbnail: "/PortfolioOld/PortfolioOld-thumb.gif",
    date: "2025.02 - 2025.08",
    category: "웹 애플리케이션",
    techStack: ["React", "JavaScript"],
    githubUrl: "https://github.com/ataraxia7899/Portfolio_old",
    liveUrl: null,
    details: {
      background: "웹 개발자로서의 첫걸음을 떼며, 학습한 기술들과 프로젝트들을 한눈에 보여주기 위해 기초부터 직접 설계하고 구현한 웹사이트입니다.",
      features: [
        "기본적인 프로필 및 자기소개 섹션",
        "프로젝트 리스트 카드 UI 구현",
        "CSS Media Query를 활용한 기초 반응형 디자인",
        "연락처 폼 및 외부 링크 연결",
        "컴포넌트 기반의 UI 구조 설계 학습"
      ],
      challenges: "React의 상태 관리와 컴포넌트 생명주기를 처음 적용해보며 데이터 흐름을 이해하는 데 집중했으며, 라이브러리 최소화와 순수 CSS 스타일링을 통해 웹 레이아웃의 기본 원리를 익혔습니다.",
      images: [
        { src: "/PortfolioOld/PortfolioOld1.gif", caption: "화면구성" },
        { src: "/PortfolioOld/PortfolioOld2.gif", caption: "프로젝트 세부보기" },
      ]
  }
},
  {
    id: 8,
    title: "Django 데이터 대시보드",
    shortDescription: "Python Django 프레임워크를 활용한 데이터 시각화 및 관리 시스템",
    thumbnail: "/DashboardDjango/DashboardDjango1.png",
    date: "2025.07 - 2025.08",
    category: "웹 애플리케이션",
    techStack: ["Python", "Django", "JavaScript"],
    githubUrl: "https://github.com/ataraxia7899/Dashboard_in_django",
    liveUrl: null,
    VideoURL: "https://www.youtube.com/watch?v=4pHxq73OK7s",
    details: {
      background: "Python 기반의 웹 프레임워크인 Django의 MVT 패턴을 학습하고, 구조화된 데이터를 효율적으로 시각화하여 관리하기 위해 제작한 프로젝트입니다.",
      features: [
        "Django Admin 및 Custom View를 활용한 데이터 관리",
        "사용자 인증(Authentication) 및 권한 설정 기능",
        "데이터베이스 연동을 통한 실시간 데이터 차트 시각화",
        "MVT(Model-View-Template) 패턴 기반의 웹 아키텍처 설계",
        "Bootstrap을 활용한 대시보드 레이아웃 구현"
      ],
      challenges: "Django ORM을 활용한 데이터베이스 쿼리 최적화와 백엔드 데이터를 프론트엔드 차트 라이브러리에 동적으로 바인딩하는 과정에서의 데이터 가공 로직을 집중적으로 학습했습니다.",
      images: [
        { src: "/DashboardDjango/DashboardDjango1.png", caption: "대시보드 메인 인터페이스" },
        { src: "/DashboardDjango/DashboardDjango2.png", caption: "대시보드 메인 인터페이스" },
        { src: "/DashboardDjango/DashboardDjango3.png", caption: "대시보드 메인 인터페이스" },
        { src: "/DashboardDjango/DashboardDjango4.png", caption: "대시보드 메인 인터페이스" }
      ]
  }
},
  {
    id: 9,
    title: "매출 데이터 정제 시스템",
    shortDescription: "대용량 매출 데이터의 정제 및 분석을 위한 데이터 전처리 자동화 시스템",
    thumbnail: "/SJAS/SJAS2.png",
    date: "2025.08",
    category: "데이터 엔지니어링",
    techStack: ["Python", "Pandas", "NumPy"],
    githubUrl: "https://github.com/ataraxia7899/SJAS",
    liveUrl: null,
    VideoURL: "https://www.youtube.com/watch?si=12hAZlnjLG6sW15F&v=xUh4tZxaZHY&feature=youtu.be",
    details: {
      background: "Kaggle의 'Online Retail II' 데이터셋을 활용하여, 대용량 판매 기록을 효율적으로 처리하고 분석 가능한 형태로 정제하기 위해 개발된 3인 팀 프로젝트입니다.",
      features: [
        "Pandas의 chunksize 옵션을 활용한 대용량 데이터 메모리 최적화 처리",
        "결측치 처리 및 수량/단가 이상치 제거 등 데이터 클렌징 자동화",
        "TotalPrice 계산 및 결제 수단 임의 생성을 통한 피처 엔지니어링",
        "시계열 분석을 위한 연, 월, 일, 요일 단위 데이터 추출 및 가공",
        "데이터 일관성 확보를 위한 타입 변환 및 피벗 테이블용 데이터 준비"
      ],
      challenges: "저사양 환경에서도 대규모 데이터를 안정적으로 처리하기 위해 메모리 점유율을 최소화하는 로직 구현에 집중했으며, 분석 목적에 부합하는 데이터 스키마를 설계하는 경험을 쌓았습니다.",
      images: [
        { src: "/SJAS/SJAS1.png", caption: "거래내역 원본 데이터" },
        { src: "/SJAS/SJAS2.png", caption: "거래내역을 기반으로 생성된 대시보드" },
        { src: "/SJAS/SJAS3.png", caption: "정제된 거래내역 데이터" }
      ]
  }
},
  {
    id: 10,
    title: "모바일 기기 전문 쇼핑몰",
    shortDescription: "React를 활용하여 구현한 모바일 기기 및 액세서리 온라인 스토어",
    thumbnail: "/PhoneShop/PhoneShop2.png",
    date: "2025.05 - 2025.06",
    category: "웹 애플리케이션",
    techStack: ["React", "JavaScript"],
    githubUrl: "https://github.com/ataraxia7899/PhoneShop",
    liveUrl: null,
    VideoURL: "https://www.youtube.com/watch?v=QI05J3-H4-w",
    details: {
      background: "전자상거래 웹사이트의 핵심 기능인 제품 리스팅, 필터링, 장바구니 시스템을 직접 구현하며 실무적인 웹 개발 프로세스를 학습하기 위해 진행한 프로젝트입니다.",
      features: [
        "다양한 모바일 기기 제품 목록 및 상세 정보 보기",
        "React State를 활용한 실시간 장바구니 추가 및 삭제 기능",
        "카테고리별/브랜드별 제품 필터링 기능",
        "CSS Media Query를 적용한 모바일 최적화 반응형 레이아웃",
        "사용자 친화적인 구매 프로세스 UI 구성"
      ],
      challenges: "다양한 제품 데이터를 효율적으로 렌더링하고, 장바구니와 같은 전역적인 상태를 일관성 있게 관리하는 로직을 최적화하는 데 집중했습니다.",
      images: [
        { src: "/PhoneShop/PhoneShopDB.png", caption: "DB 구조" },
        { src: "/PhoneShop/PhoneShop1.png", caption: "시스템 아키텍처" },
        { src: "/PhoneShop/PhoneShop2.png", caption: "상품 목록" },
        { src: "/PhoneShop/PhoneShop3.png", caption: "장바구니" },
        { src: "/PhoneShop/PhoneShop4.png", caption: "토스페이먼츠 API 연동으로 구현한 결제기능" },
        { src: "/PhoneShop/PhoneShop5.png", caption: "스마트초이스 API 연동으로 구현한 요금제 추천 기능 - 입력" },
        { src: "/PhoneShop/PhoneShop6.png", caption: "스마트초이스 API 연동으로 구현한 요금제 추천 기능 - 결과" }
      ]
  }
},
  {
    id: 11,
    title: "당근마켓 클론 코딩",
    shortDescription: "중고 거래 서비스 당근마켓의 UI와 핵심 기능을 직접 구현한 웹 프로젝트",
    thumbnail: "/DaangnClone/DaangnClone-thumb.png",
    date: "2025.05",
    category: "웹 애플리케이션",
    techStack: ["HTML&CSS", "JavaScript",],
    githubUrl: "https://github.com/ataraxia7899/daangn_clone",
    liveUrl: "https://ataraxia7899.github.io/daangn_clone/Introduction1.html",
    details: {
      background: "국내 최대 중고 거래 플랫폼인 당근마켓의 인터페이스와 핵심 로직을 직접 분석하고 구현해보며, 서비스의 UI 구조와 사용자 경험(UX)을 학습하기 위해 진행했습니다.",
      features: [
        "실제 화면과 똑같이 클론코딩을 진행"
      ],
      challenges: "실제 서비스의 복잡한 레이아웃을 컴포넌트 단위로 분해하여 재사용성을 극대화하는 데 주력했습니다.",
      images: [
        { src: "/DaangnClone/DaangnClone1.gif", caption: "클론코딩한 화면 - (중간에 무한슬라이더이미지가 실제 페이지에서 삭제된 사진으로 인해 보이지 않음)" }
      ]
  }
},
  {
  id: 12,
  title: "RPA 기반 ChatGPT 이미지 처리 자동화",
  shortDescription: "RPA와 ChatGPT API를 연동하여 이미지 분석 및 생성을 자동화하는 시스템",
  thumbnail: "/MiniProject1/MiniProject1-thumb.gif",
  date: "2025.10.31 - 2025.11.04",
  category: "RPA & AI",
  techStack: ["RPA", "ChatGPT API", "Excel", "Gmail"],
  githubUrl: null,
  liveUrl: null,
  VideoURL: "https://www.youtube.com/watch?v=d_ZF_1rdfjk&list=PLioRj_cLi11rUHiTLzB5fyqW_XkxtiZJj&index=4",
  details: {
    background: "사용자의 요청이 담긴 엑셀 파일을 분석하여 ChatGPT API를 통해 이미지 분석 및 생성 작업을 수행하고, 결과물을 이메일로 자동 회신하는 업무 자동화 프로젝트입니다.",
    features: [
      "엑셀 워크시트 기반 이미지 분석/생성 작업 자동 분류 및 수집",
      "ChatGPT API를 활용한 이미지 상세 분석 및 결과 요약 데이터 생성",
      "사용자 요구사항 기반 AI 이미지 생성 및 로컬 경로 자동 저장",
      "Gmail SMTP 연동을 통한 결과 엑셀 및 이미지 파일 자동 발송",
      "작업 프로세스에 따른 폴더 구조 관리 및 데이터 정리 로직"
    ],
    challenges: "ChatGPT API 호출 불안정 상황에 대응하기 위해 재시도 로직(1회)과 예외 처리를 구현하여 전체 자동화 프로세스의 안정성을 확보했습니다.",
    images: [
      { src: "/MiniProject1/MiniProject1_1.png", caption: "자동화 프로세스 설계 순서도" }
    ]
  }
},
  {
    id: 13,
    title: "제조사별 자동차 판매 실적 분석 자동화",
    shortDescription: "다나와자동차의 판매 실적 데이터를 수집하여 시각화된 엑셀 보고서를 자동 생성하는 시스템",
    thumbnail: "/MiniProject2/MiniProject2-thumb.gif",
    date: "2025.11.14 - 2025.11.27",
    category: "RPA",
    techStack: ["Brity RPA", "Chrome", "Excel"],
    githubUrl: null,
    liveUrl: null,
    VideoURL: "https://www.youtube.com/watch?v=KCxJ-nCB2Ws&list=PLioRj_cLi11rUHiTLzB5fyqW_XkxtiZJj&index=3",
    details: {
      background: "다나와자동차 웹사이트의 방대한 판매 데이터를 제조사별로 수집하고, 실적 그래프를 포함한 엑셀 보고서를 수기 작업 없이 자동으로 생성하기 위해 개발되었습니다.",
      features: [
        "사용자 입력 제조사명 및 조회 기간 기반의 맞춤형 데이터 검색",
        "개발자 도구 캡처 기능을 활용한 판매량 그래프 및 누적 판매 표 이미지 자동 저장",
        "제조사별 자동차 순위, 판매량, 점유율 및 내연기관별 합계 데이터 수집",
        "엑셀 템플릿 기반 보고서 자동 작성 및 전월/전년 대비 상승·하락 폰트 색상 자동 설정",
        "사용자 입력값 유효성 검사 및 검색 결과 유무에 따른 예외 처리 로직"
      ],
      challenges: "입력 받은 제조사가 없거나 날짜 형식이 맞지 않는 경우를 대비해 기본값 설정 및 데이터 정제 로직을 강화하였고, 웹 요소 로드 실패 시 이벤트를 재실행하는 안정화 작업을 진행했습니다.",
      images: [
        { src: "/MiniProject2/MiniProject2_1.png", caption: "자동차 판매 실적 수집 프로세스" },
        { src: "/MiniProject2/MiniProject2_2.png", caption: "엑셀 정제 결과" }
      ]
  }
},
  {
    id: 14,
    title: "실험실 안전 진단 관리 시스템",
    shortDescription: "웹 기반 안전 점검 수행 및 RPA를 활용한 점검 보고서 자동화 솔루션",
    thumbnail: "/MainProject/MainProject-thumb.gif",
    date: "2025.11.04 - 2025.12.12",
    category: "웹 & RPA",
    techStack: ["Brity RPA", "ChatGPT API", "OutSystems"],
    githubUrl: null,
    liveUrl: null,
    VideoURL: "https://www.youtube.com/watch?v=QZkaonJ3tZU&list=PLioRj_cLi11rUHiTLzB5fyqW_XkxtiZJj&index=2",
    details: {
      background: "실험실 안전사고 예방을 위해 점검 절차를 디지털화하고, 수집된 데이터를 바탕으로 보고서 작성 및 조치 권고사항 생성을 자동화한 통합 관리 프로젝트입니다.",
      features: [
        "OutSystems를 활용한 실시간 실험실 안전 점검 및 데이터 관리 시스템 구축",
        "Brity RPA를 이용한 주간 점검 결과 데이터 수집 및 시각화된 엑셀 보고서 자동 생성",
        "ChatGPT API 연동을 통한 점검 데이터 분석 및 맞춤형 안전 조치 권고사항 자동 생성",
        "점검 결과에 따른 안전 등급(최우수~미흡) 자동 분류 및 관리자 대상 이메일 자동 발송",
        "실험실별 점검 이력 추적 및 분석 데이터를 활용한 안전 관리 사각지대 해소"
      ],
      challenges: "웹 시스템과 RPA 간의 데이터 정합성을 유지하는 데 주력하였으며, ChatGPT API 호출 실패 시 'GPT 오류' 메시지 처리 및 재시도 로직을 통해 자동화 프로세스의 완성도를 높였습니다.",
      images: [
        { src: "/MainProject/MainProject1.png", caption: "개선 전후 비교" },
        { src: "/MainProject/MainProject2.png", caption: "요구사항정의서 - COMMON, ADMIN" },
        { src: "/MainProject/MainProject3.png", caption: "요구사항정의서 - MANAGER, MEMBER" },
        { src: "/MainProject/MainProject4.png", caption: "테이블정의서 - Employee, Team, Role" },
        { src: "/MainProject/MainProject5.png", caption: "테이블정의서 - Inspection, InspectionReason, InspectionStatus, ApprovalStatus" },
        { src: "/MainProject/MainProject6.png", caption: "테이블정의서 - LabSection, AnswerType, InspectionAnswer, AnswerAttachment" },
        { src: "/MainProject/MainProject7.png", caption: "WBS" },
        { src: "/MainProject/MainProject8.png", caption: "팀원 역할" },
        { src: "/MainProject/MainProject9.png", caption: "주간 점검 결과 보고서 송신 내용" }
      ]
    }
  }
];
