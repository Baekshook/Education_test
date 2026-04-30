export default function Process() {
  const processData = [
    {
      step: "01",
      title: "참여신청",
    },
    {
      step: "02",
      title: "자격요건확인",
    },
    { step: "03", title: "참여기업확정" },
    { step: "04", title: "상담회 일정 안내 및 사전조사 진행" },
    { step: "05", title: "상담/교육 지원" },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">
            Process
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">진행절차</h2>
          <p className="text-gray-500 mt-3">5단계 절차를 통해 진행됩니다</p>
        </div>
        <div className="space-y-4">
          {processData.map((item, idx) => (
            <div
              key={idx}
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-6 group hover:shadow-md transition-shadow"
            >
              <div className="text-xl font-extrabold text-blue-600 w-16 flex-shrink-0">
                {item.step}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
