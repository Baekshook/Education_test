import React from "react";

export default function Education() {
  const vodList = [
    {
      title: "성공적인 MD 미팅을 위한 피칭 전략",
      time: "1:20:34",
      date: "2026.04.10",
    },
    {
      title: "유통 채널별 입점 프로세스 이해하기",
      time: "0:45:12",
      date: "2026.04.05",
    },
    {
      title: "온라인 세일즈 마케팅 핵심 가이드",
      time: "1:10:05",
      date: "2026.03.28",
    },
    {
      title: "여성기업 지원사업 활용법 100% 마스터",
      time: "0:55:40",
      date: "2026.03.15",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-3xl font-extrabold">교육 프로그램</h1>
        <p className="mt-3 text-blue-200">
          여성기업의 역량 강화를 위한 다양한 교육을 만나보세요.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        {/* 🔴 라이브 섹션 */}
        <div className="mb-16">
          <div className="flex items-center space-x-2 mb-4">
            <span className="relative flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
            </span>
            <h2 className="text-2xl font-bold text-gray-900">
              실시간 라이브 교육
            </h2>
          </div>
          <div className="bg-black rounded-2xl aspect-video w-full relative flex items-center justify-center overflow-hidden shadow-lg group cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80"
              alt="라이브"
              className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
            />
            <div className="relative z-10 text-center">
              <span className="bg-red-600 text-white px-3 py-1 text-sm font-bold rounded mb-3 inline-block">
                LIVE
              </span>
              <h3 className="text-3xl font-bold text-white mb-2">
                2026 트렌드 분석 및 상품 기획 노하우
              </h3>
              <p className="text-gray-300">현재 1,204명 시청 중</p>
              <button className="mt-6 bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors">
                방송 입장하기
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* 📼 VOD 섹션 */}
          <div className="lg:col-span-2">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              📺 지난 교육 VOD
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {vodList.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden cursor-pointer hover:shadow-md transition-shadow"
                >
                  <div className="aspect-video bg-gray-200 relative">
                    <div className="absolute bottom-2 right-2 bg-black bg-opacity-70 text-white text-xs px-2 py-1 rounded">
                      {item.time}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-bold text-gray-800 mb-1 line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-500">{item.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 📅 예정된 교육 섹션 */}
          <div>
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              🗓️ 앞으로 열릴 교육
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 space-y-4">
              {[
                {
                  date: "05.20 (수)",
                  title: "해외 수출입 통관 실무",
                  time: "14:00 - 16:00",
                },
                {
                  date: "06.10 (수)",
                  title: "브랜딩 강화를 위한 패키지 디자인",
                  time: "10:00 - 12:00",
                },
                {
                  date: "07.05 (월)",
                  title: "SNS 퍼포먼스 마케팅 실전",
                  time: "14:00 - 17:00",
                },
              ].map((item, idx) => (
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
                    <p className="text-xs text-gray-500">{item.time}</p>
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
