import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-blue-900 cursor-pointer">
          2026 MD 상담회
        </Link>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <Link to="/" className="hover:text-blue-600 transition-colors">
            홈
          </Link>
          <Link
            to="/event"
            className="hover:text-blue-600 font-bold transition-colors"
          >
            행사안내
          </Link>
          {/* 나머지 메뉴들은 추후 페이지가 생기면 Link로 변경 */}
          <a href="#check" className="hover:text-blue-600 transition-colors">
            신청·매칭확인
          </a>
          <a href="#contact" className="hover:text-blue-600 transition-colors">
            행사문의
          </a>
          <a href="#notice" className="hover:text-blue-600 transition-colors">
            공지사항
          </a>
        </nav>
        <div>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors">
            상담신청하기
          </button>
        </div>
      </div>
    </header>
  );
}
