export default function NoticeBanner() {
  return (
    <div className="bg-gray-100 py-3 border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center text-sm">
        <div className="flex items-center space-x-3 overflow-hidden">
          <span className="bg-blue-600 text-white px-2 py-1 rounded text-xs font-bold whitespace-nowrap">
            공지
          </span>
          <span className="text-gray-700 truncate hover:underline cursor-pointer">
            2026년 판로역량강화 지원사업 MD 상담회 1차 신청 마감 안내드립니다.
          </span>
        </div>
        <a
          href="#notice"
          className="text-gray-500 hover:text-black font-medium shrink-0 whitespace-nowrap ml-4"
        >
          전체보기 &gt;
        </a>
      </div>
    </div>
  );
}
