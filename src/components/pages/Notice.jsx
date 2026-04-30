import React from 'react';

export default function Notice() {
  // 게시판에 보여줄 가상의 공지사항 데이터입니다.
  const notices = [
    { id: 5, isPinned: true, title: '2026년 소상공인 유통플랫폼 MD상담회 1차 모집 안내 드립니다.', date: '2026.04.28', views: 1205 },
    { id: 4, isPinned: false, title: '행사 당일 주차 안내 및 오시는 길 (대중교통 이용 권장)', date: '2026.04.25', views: 856 },
    { id: 3, isPinned: false, title: '참여 기업 사전 준비사항 및 필수 제출 서류 안내', date: '2026.04.18', views: 920 },
    { id: 2, isPinned: false, title: 'MD 상담회 매칭 결과 발표 일정 안내', date: '2026.04.15', views: 1104 },
    { id: 1, isPinned: false, title: '2026 소상공인 유통플랫폼 MD상담회 온라인 사이트 오픈', date: '2026.04.01', views: 540 },
  ];

  return (
    <div className="bg-white min-h-screen pb-20">
      {/* 상단 타이틀 영역 */}
      <div className="bg-blue-900 text-white py-12 text-center">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-2">Notice</p>
        <h1 className="text-3xl font-extrabold">공지사항</h1>
        <p className="mt-3 text-blue-200">최신 소식을 확인하세요</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        {/* 게시물 건수 및 검색 (선택사항) */}
        <div className="flex justify-between items-end mb-4">
          <p className="text-gray-700 font-medium">
            총 <span className="text-blue-600 font-bold">{notices.length}</span>건
          </p>
        </div>

        {/* 게시판 리스트 영역 */}
        <div className="border-t-2 border-gray-900">
          {/* PC용 테이블 헤더 (모바일에서는 숨김) */}
          <div className="hidden md:grid grid-cols-12 gap-4 py-4 border-b border-gray-300 bg-gray-50 text-center font-bold text-gray-700">
            <div className="col-span-1">번호</div>
            <div className="col-span-7">제목</div>
            <div className="col-span-2">작성일</div>
            <div className="col-span-2">조회</div>
          </div>

          {/* 공지사항 목록 반복 */}
          {notices.map((notice) => (
            <div 
              key={notice.id} 
              className="flex flex-col md:grid md:grid-cols-12 gap-2 md:gap-4 py-5 border-b border-gray-200 hover:bg-gray-50 transition-colors cursor-pointer items-center"
            >
              {/* 번호 또는 중요[공지] 뱃지 */}
              <div className="col-span-1 text-center hidden md:block">
                {notice.isPinned ? (
                  <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold">공지</span>
                ) : (
                  <span className="text-gray-500">{notice.id}</span>
                )}
              </div>

              {/* 제목 (모바일에서는 가장 크게 보임) */}
              <div className="col-span-7 w-full px-2 md:px-0 text-left">
                {notice.isPinned && <span className="md:hidden bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-bold mr-2">공지</span>}
                <span className={`text-lg md:text-base ${notice.isPinned ? 'font-bold text-gray-900' : 'text-gray-800'}`}>
                  {notice.title}
                </span>
              </div>

              {/* 작성일 및 조회수 (모바일에서는 제목 아래에 작게 배치) */}
              <div className="col-span-4 w-full md:w-auto px-2 md:px-0 flex md:contents text-sm text-gray-500 mt-2 md:mt-0">
                <div className="md:col-span-2 md:text-center mr-4 md:mr-0">{notice.date}</div>
                <div className="md:col-span-2 md:text-center">
                  <span className="md:hidden mr-1">조회</span>{notice.views}
                </div>
              </div>
            </div>
          ))}

          {/* 데이터가 없을 경우 보여줄 화면 (현재는 주석 처리) */}
          {/* <div className="py-20 text-center text-gray-500">
            등록된 공지사항이 없습니다.
          </div> 
          */}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center space-x-2 mt-12">
          <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:bg-gray-50">&lt;</button>
          <button className="w-10 h-10 border border-blue-600 rounded bg-blue-600 text-white font-bold flex items-center justify-center">1</button>
          <button className="w-10 h-10 border border-gray-300 rounded flex items-center justify-center text-gray-500 hover:bg-gray-50">&gt;</button>
        </div>
      </div>
    </div>
  );
}