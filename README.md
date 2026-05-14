# 🚀 2026 교육 플랫폼 및 행사 운영 웹사이트 (Frontend)

> **사용자 경험(UX) 강화를 위해 컴포넌트 기반 UI 설계와 SPA(Single Page Application) 아키텍처를 도입하여 구축한 교육/행사 정보 통합 플랫폼 프론트엔드 프로젝트입니다.**

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)

## 📌 프로젝트 개요

본 프로젝트는 분산된 교육 및 행사 정보를 단일 플랫폼에서 직관적으로 제공하기 위해 구축되었습니다. 기존의 복잡한 정보 구조를 탈피하여, React Router를 활용해 새로고침 없는 부드러운 페이지 전환을 구현했습니다. 

주요 기능으로 **라이브/VOD 교육 스트리밍 UI, 사진 중심의 갤러리 게시판, 캘린더 기반의 일정 관리, 그리고 통합 로그인 인터페이스**를 포함하고 있으며, Tailwind CSS를 활용해 모바일 환경까지 고려한 완벽한 반응형 웹(Responsive Web)으로 디자인되었습니다.

<br/>

## ✨ 주요 구현 기능

### 1. 홈 & 서비스 소개 (`/`)
- Hero 배너 
- 서비스 이용 절차(Process) 
- FAQ 아코디언 및 직관적인 사업 문의 컴포넌트

### 2. 교육 통합 관리 플랫폼 (`/education`)
- **LIVE 교육:** 실시간 라이브 방송을 강조하는 스트리밍 UI 구성
- **VOD & 예정 목록:** 지난 교육 다시보기 리스트와 추후 예정된 교육 리스트업 화면 구현

### 3. 행사 안내 및 아카이브
- **행사 안내 (`/event`):** 기본 정보 및 타임라인 형태의 세션 스케줄 제공
- **이전 행사 게시판 (`/event/gallery`):** 썸네일 이미지 중심의 카드형 그리드 게시판 레이아웃
- **추후 행사 일정 (`/event/calendar`):** 캘린더 뷰와 리스트 뷰를 결합하여 예정된 일정을 직관적으로 확인 가능

### 4. 사용자 편의 및 시스템 UI
- **통합 로그인 (`/signup`):** 커머스 형태의 탭 형식(회원/비회원) 로그인 및 소셜 간편 로그인(카카오, 네이버, 애플) UI
- **공지사항 (`/notice`):** 주요 공지 상단 고정(Pinned) 기능 및 리스트형 게시판 형태 구현
- **네비게이션 바:** Hover 액션을 활용한 부드러운 드롭다운 메뉴(GNB) 구현

<br/>

## 📁 디렉토리 구조 (Folder Structure)

```text
src/
├── components/           # 재사용 가능한 UI 블록
│   ├── Header.jsx        # 상단 네비게이션 바 (드롭다운 포함)
│   ├── Footer.jsx        # 하단 정보 영역
│   ├── Hero.jsx          # 메인 배너
│   ├── FAQ.jsx           # 자주 묻는 질문 아코디언
│   └── ... (Overview, Process, Contact 등)
├── pages/                # 라우터에 연결된 각 페이지 화면
│   ├── Home.jsx          # 메인 홈 페이지
│   ├── Education.jsx     # 교육 플랫폼 페이지
│   ├── Event.jsx         # 행사 안내 페이지
│   ├── EventGallery.jsx  # 이전 행사 갤러리
│   ├── EventCalendar.jsx # 추후 행사 캘린더
│   ├── Notice.jsx        # 공지사항 게시판
│   └── SignUp.jsx        # 통합 로그인 및 회원가입
├── App.jsx               # React Router Dom 라우팅 설정
└── main.jsx              # React 진입점