export default function Hero() {
  return (
    <section className="relative bg-blue-900 text-white flex items-center justify-center min-h-[500px]">
      <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
      <div className="relative z-10 text-center px-4">
        <p className="text-blue-300 font-semibold mb-3 tracking-wider text-sm md:text-base">
          2026 여성기업 판로역량강화지원 사업
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          온·오프라인 MD 상담회
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          여성기업과 유통사(MD)를 연결하는 1:1 상담회
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-500 transition-colors">
            상담 신청하기
          </button>
          <button className="bg-white text-blue-900 border border-white px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors">
            행사 안내 보기
          </button>
        </div>
      </div>
    </section>
  );
}
