export default function EventSchedule() {
  const amSessions = [
    { no: '1회차', time: '9:30 ~ 9:55' }, { no: '2회차', time: '10:05 ~ 10:30' },
    { no: '3회차', time: '10:40 ~ 11:05' }, { no: '4회차', time: '11:15 ~ 11:40' }
  ];
  const pmSessions = [
    { no: '5회차', time: '13:10 ~ 13:35' }, { no: '6회차', time: '13:45 ~ 14:10' },
    { no: '7회차', time: '14:20 ~ 14:45' }, { no: '8회차', time: '14:55 ~ 15:20' },
    { no: '9회차', time: '15:30 ~ 15:55' }, { no: '10회차', time: '16:05 ~ 16:30' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">Schedule</p>
          <h2 className="text-3xl font-extrabold text-gray-900">행사 일정</h2>
          <p className="text-gray-500 mt-2 text-sm">* 25분 상담, 10분 쉬는시간 *</p>
        </div>

        <div className="space-y-8">
          {/* 오전 세션 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-blue-50 px-6 py-4 border-b border-blue-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-blue-900">☀️ 오전 세션</h3>
              <span className="text-blue-600 font-medium text-sm">9:30 ~ 11:40</span>
            </div>
            <div className="p-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {amSessions.map((session, idx) => (
                <div key={idx} className="text-center p-3 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="font-bold text-gray-800 mb-1">{session.no}</div>
                  <div className="text-sm text-gray-500">{session.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* 점심 시간 */}
          <div className="bg-gray-200 text-center py-4 rounded-xl font-medium text-gray-700">
            🍽️ 점심시간 11:40 ~ 13:10 (1시간 30분)
          </div>

          {/* 오후 세션 */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-orange-50 px-6 py-4 border-b border-orange-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-orange-900">🌙 오후 세션</h3>
              <span className="text-orange-600 font-medium text-sm">13:10 ~ 16:30</span>
            </div>
            <div className="p-6 grid grid-cols-2 sm:grid-cols-3 gap-4">
              {pmSessions.map((session, idx) => (
                <div key={idx} className="text-center p-3 border border-gray-100 rounded-lg bg-gray-50">
                  <div className="font-bold text-gray-800 mb-1">{session.no}</div>
                  <div className="text-sm text-gray-500">{session.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}