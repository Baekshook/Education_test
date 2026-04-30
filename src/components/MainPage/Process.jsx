export default function Process() {
  const processData = [
    {
      step: "01",
      title: "사업신청",
      desc: "판로역량강화지원사업 전용 사이트에서 온라인 신청",
    },
    {
      step: "02",
      title: "사전조사",
      desc: "상담회 진행에 필요한 사전조사 (별도 메일 발송)",
    },
    { step: "03", title: "서류평가", desc: "요건확인 및 서류평가 진행" },
    { step: "04", title: "선정안내", desc: "선정 결과 개별 안내" },
    { step: "05", title: "상담회안내", desc: "매칭 유통사 및 상담 일정 안내" },
    { step: "06", title: "상담회진행", desc: "오프라인 1:1 MD 상담회 진행" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">
            Process
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            사업신청 방법
          </h2>
          <p className="text-gray-500 mt-3">6단계 절차를 통해 진행됩니다</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {processData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 relative overflow-hidden group hover:shadow-md transition-shadow"
            >
              <div className="text-6xl font-extrabold text-gray-50 absolute top-4 right-4 z-0 group-hover:text-blue-50 transition-colors">
                {item.step}
              </div>
              <div className="relative z-10 text-blue-600 font-bold text-lg mb-1">
                {idx + 1}
              </div>
              <h3 className="text-xl font-bold mb-3 relative z-10 text-gray-900">
                {item.title}
              </h3>
              <p className="text-gray-600 relative z-10 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
