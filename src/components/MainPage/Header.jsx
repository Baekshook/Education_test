export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="font-bold text-xl text-blue-900 cursor-pointer">
          2026 MD 상담회
        </div>
        <nav className="hidden md:flex space-x-8 text-sm font-medium text-gray-600">
          <a href="#home" className="hover:text-blue-600 transition-colors">
            홈
          </a>
          <a href="#event" className="hover:text-blue-600 transition-colors">
            행사안내
          </a>
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
