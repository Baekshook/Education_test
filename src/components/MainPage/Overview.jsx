export default function Overview() {
  const overviewData = [
    {
      label: "사업명",
      value: "2026년 소상공인 유통플랫폼 MD상담회",
    },
    { label: "지원대상", value: "소상공인" },
    {
      label: "지원규모",
      value: "소상공인 2000개사",
    },
    { label: "지원내용", value: "소상공인과 유통사 MD간 1:1 매칭 상담지원" },
    { label: "주관", value: "중소벤처기업부" },
    { label: "주최", value: "한국중소벤처기업유통원" },
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
