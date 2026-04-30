import React, { useState } from "react";

export default function EventCalendar() {
  const [currentDate, setCurrentDate] = useState(new Date(2026, 4, 1)); // 2026년 5월

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 전체 일정 데이터
  const allEvents = [
    {
      date: "2026-05-14",
      title: "온·오프라인 MD 상담회",
      location: "서울 코엑스",
      type: "상담회",
    },
    {
      date: "2026-06-22",
      title: "아마존 글로벌 셀링 입점 설명회",
      location: "온라인 (Zoom)",
      type: "설명회",
    },
    {
      date: "2026-08-10",
      title: "하반기 백화점 팝업스토어 기획전",
      location: "현대백화점 판교점",
      type: "기획전",
    },
    {
      date: "2026-09-05",
      title: "여성기업 네트워킹 데이",
      location: "부산 벡스코",
      type: "네트워킹",
    },
    {
      date: "2026-05-20",
      title: "유통망 입점 설명회",
      location: "서울 강남",
      type: "설명회",
    },
    {
      date: "2026-07-15",
      title: "2026년 하반기 Kick-off",
      location: "서울 종로",
      type: "회의",
    },
  ];

  // 해당 월의 일정만 필터링
  const monthEvents = allEvents.filter((event) => {
    const [eYear, eMonth] = event.date.split("-").map(Number);
    return eYear === year && eMonth === month + 1;
  });

  // 해당 월에 일정 있는 날짜 Set
  const eventDays = new Set(
    monthEvents.map((e) => parseInt(e.date.split("-")[2])),
  );

  // 이전달 이동
  const goToPrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  // 다음달 이동
  const goToNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  // 연도/월 선택 변경
  const handleYearChange = (e) => {
    setCurrentDate(new Date(parseInt(e.target.value), month, 1));
  };

  const handleMonthChange = (e) => {
    setCurrentDate(new Date(year, parseInt(e.target.value) - 1, 1));
  };

  // 달력 날짜 생성
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrevMonth = new Date(year, month, 0).getDate();

  const calendarDays = [];

  // 이전 달 마지막 주
  for (let i = firstDay - 1; i >= 0; i--) {
    calendarDays.push({ day: daysInPrevMonth - i, isCurrentMonth: false });
  }

  // 현재 달
  for (let i = 1; i <= daysInMonth; i++) {
    calendarDays.push({
      day: i,
      isCurrentMonth: true,
      hasEvent: eventDays.has(i),
    });
  }

  // 다음 달 첫 주
  const remaining = 42 - calendarDays.length;
  for (let i = 1; i <= remaining; i++) {
    calendarDays.push({ day: i, isCurrentMonth: false });
  }

  // 해당 날짜의 일정 가져오기
  const getEventsForDay = (day) => {
    return monthEvents.filter((e) => parseInt(e.date.split("-")[2]) === day);
  };

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
            <button
              onClick={goToPrevMonth}
              className="text-gray-500 hover:text-blue-600 font-bold px-2 py-1"
            >
              &lt; 이전달
            </button>

            {/* 연도/월 선택 */}
            <div className="flex items-center gap-2">
              <select
                value={year}
                onChange={handleYearChange}
                className="border border-gray-300 rounded px-2 py-1 text-gray-700 font-bold"
              >
                {[2024, 2025, 2026, 2027, 2028].map((y) => (
                  <option key={y} value={y}>
                    {y}년
                  </option>
                ))}
              </select>
              <select
                value={month + 1}
                onChange={handleMonthChange}
                className="border border-gray-300 rounded px-2 py-1 text-gray-700 font-bold"
              >
                {monthNames.map((m, idx) => (
                  <option key={idx} value={idx + 1}>
                    {m}
                  </option>
                ))}
              </select>
            </div>

            <button
              onClick={goToNextMonth}
              className="text-gray-500 hover:text-blue-600 font-bold px-2 py-1"
            >
              다음달 &gt;
            </button>
          </div>

          {/* 달력 UI */}
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
              {calendarDays.map((item, i) => {
                const dayEvents = item.isCurrentMonth
                  ? getEventsForDay(item.day)
                  : [];
                const hasEvent = item.hasEvent;

                return (
                  <div
                    key={i}
                    className={`bg-white h-24 p-2 relative ${!item.isCurrentMonth ? "bg-gray-100" : ""} ${hasEvent ? "bg-blue-50" : ""}`}
                  >
                    <span
                      className={`text-sm ${!item.isCurrentMonth ? "text-gray-300" : hasEvent ? "font-bold text-blue-600" : "text-gray-500"}`}
                    >
                      {item.day}
                    </span>
                    {hasEvent && dayEvents.length > 0 && (
                      <div className="mt-1 bg-blue-600 text-white text-xs px-1 py-1 rounded truncate">
                        {dayEvents[0].title}
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
              📅 {year}년 {month + 1}월 일정 리스트
            </h3>
            <div className="space-y-4">
              {monthEvents.length > 0 ? (
                monthEvents.map((event, idx) => (
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
                ))
              ) : (
                <p className="text-gray-500 text-center py-8">
                  이번 달 예정된 일정이 없습니다.
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
