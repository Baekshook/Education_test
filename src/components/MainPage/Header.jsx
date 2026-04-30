import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="font-bold text-xl text-blue-900 cursor-pointer">
          소상공인 유통플랫폼 MD상담회
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
          <Link to="/event" className="hover:text-blue-600 transition-colors">
            행사
          </Link>
          <Link to="/notice" className="hover:text-blue-600 transition-colors">
            공지사항
          </Link>
        </nav>

        {/* ✨ 회원가입 및 신청하기 버튼 영역 */}
        <div className="flex items-center space-x-4">
          <Link
            to="/signup"
            className="text-gray-600 hover:text-blue-600 font-medium text-sm transition-colors hidden sm:block"
          >
            로그인 / 회원가입
          </Link>
          <a
            href="https://fanfandaero.kr/portal/v2/introV2.do"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-md font-semibold text-sm transition-colors"
          >
            신청하러가기
          </a>
        </div>
      </div>
    </header>
  );
}
