export default function ApplyCTA() {
  return (
    <section className="py-16 bg-blue-600 text-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <p className="font-semibold text-blue-200 mb-2 uppercase tracking-wider text-sm">
          Apply Now
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-5">
          지금 바로 상담을 신청하세요
        </h2>
        <p className="mb-10 text-blue-100 text-lg">
          소상공인과 유통사(MD)를 연결하는 1:1 상담회에 참여할 기회를
          놓치지마세요.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-3 sm:space-y-0 sm:space-x-4">
          {/* ✨ button 태그를 a 태그로 변경하고 외부 링크 속성 적용 */}
          <a
            href="https://fanfandaero.kr/portal/v2/introV2.do"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-blue-700 px-8 py-4 rounded-md font-bold hover:bg-gray-100 transition-colors shadow-lg inline-block text-center"
          >
            신청하기
          </a>
        </div>
      </div>
    </section>
  );
}
