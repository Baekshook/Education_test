export default function Overview() {
  const overviewData = [
    {
      label: "행사명",
      value: "2026년 판로역량강화 지원사업 온·오프라인 MD 상담회",
    },
    { label: "일시", value: "2026. 5. 14. (목) 9시 30분~" },
    {
      label: "장소",
      value:
        "삼성 COEX | 서울 강남구 영동대로 513, 3층 컨퍼런스룸(남) 327호 \n ※ 주차지원이 불가하오니, 가급적 대중교통을 이용해주시기 바랍니다.",
    },
    { label: "대상", value: "여성기업 100개사" },
    {
      label: "모집일정",
      value:
        "4월 13일(월) ~ 4월 27일(월) 24:00 \n ※ 선착순 접수로 조기 마감될 수 있습니다.",
    },
    { label: "주최·주관", value: "중소벤처기업부 · 한국여성경제인협회" },
    { label: "운영사무국", value: "한국마케팅진흥원" },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">
            Overview
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">행사 개요</h2>
        </div>
        <div className="border-t-2 border-gray-900">
          {overviewData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row border-b border-gray-200 py-5"
            >
              <div className="md:w-1/4 font-bold text-gray-800 mb-2 md:mb-0 pl-2">
                {item.label}
              </div>
              <div className="md:w-3/4 text-gray-600 pr-2 whitespace-pre-line">
                {item.value}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
