import React, { useState } from "react";

export default function Event() {
  const [currentPage, setCurrentPage] = useState(1);
  const currentDate = new Date(2026, 4, 1); // 2026년 5월

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 지난 행사 갤러리 데이터
  const pastEvents = {
    1: [
      {
        id: 1,
        title: "2025년 판로역량강화 하반기 상담회 현장",
        date: "2025.11.20",
        views: 342,
      },
      {
        id: 2,
        title: "우수 여성기업 시상식 및 네트워킹 데이",
        date: "2025.09.15",
        views: 512,
      },
      {
        id: 3,
        title: "2025년 상반기 MD 통합 상담회 (코엑스)",
        date: "2025.05.12",
        views: 890,
      },
      {
        id: 4,
        title: "유통망 입점 설명회 스케치",
        date: "2025.03.08",
        views: 231,
      },
      {
        id: 5,
        title: "2024년 연말 성과 공유회",
        date: "2024.12.22",
        views: 455,
      },
      {
        id: 6,
        title: "지역별 찾아가는 1:1 멘토링 현장",
        date: "2024.08.30",
        views: 189,
      },
    ],
    2: [
      {
        id: 7,
        title: "2024년 상반기 MD 상담회 (부산)",
        date: "2024.05.18",
        views: 623,
      },
      {
        id: 8,
        title: "여성기업 판로확대 세미나",
        date: "2024.04.05",
        views: 312,
      },
      {
        id: 9,
        title: "온라인 상담회 특강 현장",
        date: "2024.03.22",
        views: 445,
      },
      {
        id: 10,
        title: "2024 신년 Kick-off 워크숍",
        date: "2024.01.15",
        views: 567,
      },
      {
        id: 11,
        title: "여성기업 성과발표회",
        date: "2023.12.10",
        views: 289,
      },
      {
        id: 12,
        title: "MD 상담사 양성과정 수료식",
        date: "2023.11.28",
        views: 178,
      },
    ],
  };

  // 앞으로 열 행사 데이터
  const upcomingEvents = [
    {
      date: "05.14 (목)",
      title: "온·오프라인 MD 상담회",
      location: "서울 코엑스",
      type: "상담회",
    },
    {
      date: "05.20 (화)",
      title: "유통망 입점 설명회",
      location: "서울 강남",
      type: "설명회",
    },
    {
      date: "06.22 (일)",
      title: "아마존 글로벌 셀링 입점 설명회",
      location: "온라인 (Zoom)",
      type: "설명회",
    },
    {
      date: "08.10 (일)",
      title: "하반기 백화점 팝업스토어 기획전",
      location: "현대백화점 판교점",
      type: "기획전",
    },
    {
      date: "09.05 (금)",
      title: "여성기업 네트워킹 데이",
      location: "부산 벡스코",
      type: "네트워킹",
    },
  ];

  // 행사 일정 데이터
  const allEvents = [
    { day: 14, title: "MD 상담회" },
    { day: 20, title: "입점 설명회" },
  ];

  const eventDays = new Set(allEvents.map((e) => e.day));

  // 달력 생성
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const calendarDays = [];
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push(i);
  }

  const monthNames = [
    "1월",
    "2월",
    "3월",
    "4월",
    "5월",
    "6월",
    "7월",
    "8월",
    "9월",
    "10월",
    "11월",
    "12월",
  ];
  const weekDays = ["일", "월", "화", "수", "목", "금", "토"];

  const posts = pastEvents[currentPage] || [];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-3xl font-extrabold">행사 안내</h1>
        <p className="mt-3 text-blue-200">
          소상공인과 유통사(MD)를 연결하는 다양한 행사들을 만나보세요
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* 🔴 주요 행사 섹션 - 가장 곧 열릴 행사 */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
            <h2 className="text-2xl font-bold text-gray-900">주요 행사</h2>
          </div>
          <div className="bg-black rounded-2xl aspect-video w-full relative flex items-center justify-center overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=80"
              alt="행사"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 text-center">
              <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded mb-3 inline-block">
                upcoming
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">
                소상공인 유통플랫폼 온·오프라인 MD 상담회
              </h3>
              <p className="text-gray-300">2026.05.14 (목) | 서울 코엑스</p>
              <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                사전 신청하기
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 📸 지난 행사 갤러리 */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📸 지난 행사 갤러리
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {posts.map((post) => (
                <div
                  key={post.id}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="aspect-[4/3] bg-gray-200 relative">
                    <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                      📸
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 페이지네이션 */}
            <div className="flex justify-center mt-8 gap-2">
              {[1, 2].map((page) => (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                    currentPage === page
                      ? "bg-blue-600 text-white"
                      : "bg-white text-gray-600 border border-gray-200 hover:bg-gray-50"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
          </div>

          {/* 📅 앞으로 열 행사 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🗓️ 앞으로 열 행사
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
              {upcomingEvents.map((item, idx) => (
                <div
                  key={idx}
                  className="flex border-b border-gray-100 pb-4 last:border-0 last:pb-0"
                >
                  <div className="w-16 flex-shrink-0 text-center">
                    <div className="text-blue-600 font-bold text-sm">
                      {item.date.split(" ")[0]}
                    </div>
                    <div className="text-gray-400 text-xs">
                      {item.date.split(" ")[1]}
                    </div>
                  </div>
                  <div className="pl-4 border-l border-gray-200">
                    <h4 className="font-bold text-gray-800 text-sm mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-gray-500">{item.location}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 소형 달력 */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 mt-4">
              <div className="text-center mb-3">
                <span className="font-bold text-gray-900">
                  {year}년 {monthNames[month]}
                </span>
              </div>
              <div className="grid grid-cols-7 gap-1 text-center text-xs">
                {weekDays.map((day, idx) => (
                  <div
                    key={idx}
                    className={`py-1 ${idx === 0 ? "text-red-500" : idx === 6 ? "text-blue-500" : "text-gray-500"}`}
                  >
                    {day}
                  </div>
                ))}
                {/* 빈 공간 */}
                {Array.from({ length: firstDay }).map((_, idx) => (
                  <div key={`empty-${idx}`} className="py-1"></div>
                ))}
                {/* 날짜 */}
                {calendarDays.map((day) => (
                  <div
                    key={day}
                    className={`py-1 rounded-full cursor-pointer ${
                      eventDays.has(day)
                        ? "bg-blue-600 text-white font-bold"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
