export default function EventInfo() {
  const infoData = [
    {
      label: "행사명",
      value: "2026년 판로역량강화 지원사업 온·오프라인 MD 상담회",
    },
    { label: "일시", value: "2026년 5월 14일\n목요일 9시 30분 ~" },
    {
      label: "장소",
      value:
        "삼성 COEX | 서울 강남구 영동대로 513, 3층 컨퍼런스룸(남) 327호\n※ 주차지원이 불가하오니, 가급적 대중교통을 이용해주시기 바랍니다.",
    },
    { label: "대상", value: "여성기업이면 누구나" },
    { label: "규모", value: "여성기업 100개사 대상" },
    { label: "주최·주관", value: "중소벤처기업부 · 한국여성경제인협회" },
    { label: "운영사무국", value: "한국마케팅진흥원" },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10 text-center md:text-left">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">
            Information
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">기본 정보</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {infoData.map((item, idx) => (
            <div
              key={idx}
              className={`bg-gray-50 p-6 rounded-xl border border-gray-100 ${idx === 2 ? "md:col-span-2" : ""}`}
            >
              <h3 className="text-blue-700 font-bold mb-2">{item.label}</h3>
              <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                {item.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
