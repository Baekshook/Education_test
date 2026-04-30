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
              한국중소벤처기업유통원{" "}
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
              2026 소상공인 유통플랫폼 MD상담회{" "}
            </p>
            <p>로컬의 가치를 잇다, 지역의 성장을 열다</p>
            <p>
              Email : biz@bizmate.ai.kr | Phone : 02-765-9072~4 (평일 10:00 -
              16:00)
            </p>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-gray-500">
              © 2026 한국중소벤처기업유통원. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
