import React from "react";

export default function EventCalendar() {
  const upcomingEvents = [
    {
      date: "2026.05.14",
      title: "온·오프라인 MD 상담회",
      location: "서울 코엑스",
      type: "상담회",
    },
    {
      date: "2026.06.22",
      title: "아마존 글로벌 셀링 입점 설명회",
      location: "온라인 (Zoom)",
      type: "설명회",
    },
    {
      date: "2026.08.10",
      title: "하반기 백화점 팝업스토어 기획전",
      location: "현대백화점 판교점",
      type: "기획전",
    },
    {
      date: "2026.09.05",
      title: "여성기업 네트워킹 데이",
      location: "부산 벡스코",
      type: "네트워킹",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-3xl font-extrabold">추후 행사 일정</h1>
        <p className="mt-3 text-blue-200">
          앞으로 예정된 다양한 행사와 일정을 확인하세요.
        </p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          {/* 달력 상단 헤더 */}
          <div className="bg-blue-50 px-6 py-4 flex justify-between items-center border-b border-gray-200">
            <button className="text-gray-500 hover:text-blue-600 font-bold px-2 py-1">
              &lt; 이전달
            </button>
            <h2 className="text-xl font-extrabold text-blue-900">2026년 5월</h2>
            <button className="text-gray-500 hover:text-blue-600 font-bold px-2 py-1">
              다음달 &gt;
            </button>
          </div>

          {/* 달력 UI (간단한 형태) */}
          <div className="p-6 hidden md:block">
            <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden border border-gray-200">
              {["일", "월", "화", "수", "목", "금", "토"].map((day) => (
                <div
                  key={day}
                  className="bg-gray-50 text-center py-2 font-bold text-gray-700 text-sm"
                >
                  {day}
                </div>
              ))}
              {/* 날짜 그리드 (임의 생성) */}
              {Array.from({ length: 31 }).map((_, i) => {
                const day = i + 1;
                const isEventDay = day === 14; // 14일 행사 하이라이트
                return (
                  <div
                    key={i}
                    className={`bg-white h-24 p-2 relative ${isEventDay ? "bg-blue-50" : ""}`}
                  >
                    <span
                      className={`text-sm ${isEventDay ? "font-bold text-blue-600" : "text-gray-500"}`}
                    >
                      {day}
                    </span>
                    {isEventDay && (
                      <div className="mt-1 bg-blue-600 text-white text-xs px-1 py-1 rounded truncate">
                        MD 상담회
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* 일정 리스트 (모바일 및 상세 내역) */}
          <div className="p-6 md:border-t border-gray-200">
            <h3 className="font-bold text-lg mb-4 text-gray-900">
              📅 예정된 전체 일정 리스트
            </h3>
            <div className="space-y-4">
              {upcomingEvents.map((event, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center p-4 bg-gray-50 rounded-lg border border-gray-100 hover:border-blue-300 transition-colors"
                >
                  <div className="w-full sm:w-32 flex-shrink-0 mb-2 sm:mb-0">
                    <span className="bg-blue-100 text-blue-700 font-bold px-3 py-1 rounded-full text-sm">
                      {event.date}
                    </span>
                  </div>
                  <div className="flex-grow pr-4">
                    <h4 className="font-bold text-lg text-gray-900">
                      {event.title}
                    </h4>
                    <p className="text-gray-500 text-sm flex items-center mt-1">
                      📍 {event.location}
                    </p>
                  </div>
                  <div className="mt-3 sm:mt-0">
                    <span className="text-xs font-bold text-gray-400 border border-gray-300 px-2 py-1 rounded">
                      {event.type}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
