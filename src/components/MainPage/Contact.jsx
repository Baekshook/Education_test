export default function Contact() {
  return (
    <section className="py-20 bg-gray-50" id="contact">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">
            Contact
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">행사 문의</h2>
          <p className="text-gray-500 mt-3">
            운영사무국에서 친절하고 신속하게 안내드리겠습니다
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* 이메일 카드 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
              ✉️
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Email</h3>
            <p className="text-blue-600 font-medium mb-6">biz@bizmate.ai.kr </p>
            <a
              href="mailto:biz@bizmate.ai.kr"
              className="inline-block border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              메일 보내기 →
            </a>
          </div>

          {/* 전화 카드 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
            <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-5 text-2xl">
              📞
            </div>
            <h3 className="text-xl font-bold mb-2 text-gray-900">Phone</h3>
            <p className="text-blue-600 font-medium mb-2">02-765-9072~4</p>
            <p className="text-gray-500 text-sm mb-5">
              상담 가능 시간: 10:00 – 16:00
              <br />
              (점심시간 12:00 – 13:00)
            </p>
            <a
              href="tel:027659072"
              className="inline-block border border-gray-300 text-gray-700 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors text-sm"
            >
              전화 연결 →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
