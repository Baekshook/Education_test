export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-12 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 border-b border-gray-700 pb-8 gap-4">
          <div className="flex items-center space-x-4">
            <span className="font-bold text-white bg-gray-800 px-3 py-1 rounded">
              중소벤처기업부
            </span>
            <span className="font-bold text-white bg-gray-800 px-3 py-1 rounded">
              한국여성경제인협회
            </span>
          </div>
          <div className="flex space-x-6 text-gray-300">
            <a href="#notice" className="hover:text-white transition-colors">
              공지사항
            </a>
            <a
              href="#privacy"
              className="hover:text-white font-bold transition-colors"
            >
              개인정보처리방침
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
          <div className="space-y-2">
            <p className="text-gray-300 font-semibold text-base mb-4">
              2026 여성기업 판로역량강화지원 사업 온·오프라인 MD 상담회
            </p>
            <p>
              주최·주관: 중소벤처기업부 · 한국여성경제인협회 | 운영사무국:
              한국마케팅진흥원
            </p>
            <p>
              Email : kr_marketing@naver.com | Phone : 02-743-7398 (평일 10:00 -
              16:00)
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500">
              © 2026 한국여성경제인협회. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
