import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-blue-900 cursor-pointer">
          2026 MD 상담회
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600 items-center">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            홈
          </Link>
          <Link
            to="/education"
            className="hover:text-blue-600 transition-colors"
          >
            교육
          </Link>

          <div className="relative group py-5">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">
              행사
            </span>
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-40 bg-white border border-gray-100 shadow-xl rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 overflow-hidden flex flex-col">
              <Link
                to="/event"
                className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                행사 안내
              </Link>
              <Link
                to="/event/gallery"
                className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                이전 행사 게시판
              </Link>
              <Link
                to="/event/calendar"
                className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                추후 행사 일정
              </Link>
              <a
                href="/#contact"
                className="px-4 py-3 hover:bg-blue-50 hover:text-blue-600 transition-colors border-t border-gray-50"
              >
                행사 문의
              </a>
            </div>
          </div>

          <a href="/#check" className="hover:text-blue-600 transition-colors">
            신청·매칭확인
          </a>
          <a href="/#notice" className="hover:text-blue-600 transition-colors">
            공지사항
          </a>
        </nav>

        {/* ✨ 회원가입 및 신청하기 버튼 영역 */}
        <div className="flex items-center space-x-4">
          <Link
            to="/signup"
            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors hidden sm:block"
          >
            로그인 / 회원가입
          </Link>
          <Link
            to="/apply"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors"
          >
            상담신청하기
          </Link>
        </div>
      </div>
    </header>
  );
}
