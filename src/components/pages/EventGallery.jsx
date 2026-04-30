import React, { useState } from "react";

export default function EventGallery() {
  const [currentPage, setCurrentPage] = useState(1);

  // 페이지별 데이터
  const allPosts = {
    1: [
      {
        id: 1,
        title: "2025년 판로역량강화 하반기 상담회 현장",
        date: "2025.11.20",
        views: 342,
      },
      {
        id: 2,
        title: "우수 여성기업 시상식 및 네트워킹 데이",
        date: "2025.09.15",
        views: 512,
      },
      {
        id: 3,
        title: "2025년 상반기 MD 통합 상담회 (코엑스)",
        date: "2025.05.12",
        views: 890,
      },
      {
        id: 4,
        title: "유통망 입점 설명회 스케치",
        date: "2025.03.08",
        views: 231,
      },
      {
        id: 5,
        title: "2024년 연말 성과 공유회",
        date: "2024.12.22",
        views: 455,
      },
      {
        id: 6,
        title: "지역별 찾아가는 1:1 멘토링 현장",
        date: "2024.08.30",
        views: 189,
      },
    ],
    2: [
      {
        id: 7,
        title: "2024년 상반기 MD 상담회 (부산)",
        date: "2024.05.18",
        views: 623,
      },
      {
        id: 8,
        title: "여성기업 판로확대 세미나",
        date: "2024.04.05",
        views: 312,
      },
      {
        id: 9,
        title: "온라인 상담회 특강 현장",
        date: "2024.03.22",
        views: 445,
      },
      {
        id: 10,
        title: "2024 신년 Kick-off 워크숍",
        date: "2024.01.15",
        views: 567,
      },
      {
        id: 11,
        title: "여성기업 성과발표회",
        date: "2023.12.10",
        views: 289,
      },
      {
        id: 12,
        title: "MD 상담사 양성과정 수료식",
        date: "2023.11.28",
        views: 178,
      },
    ],
    3: [
      {
        id: 13,
        title: "2023년 하반기 상담회 (대구)",
        date: "2023.10.20",
        views: 401,
      },
      {
        id: 14,
        title: "여성기업 네트워킹 데이",
        date: "2023.09.08",
        views: 534,
      },
      {
        id: 15,
        title: "온·오프라인 통합 상담회",
        date: "2023.08.15",
        views: 712,
      },
      {
        id: 16,
        title: "유통기업 간담회",
        date: "2023.07.22",
        views: 198,
      },
      {
        id: 17,
        title: "2023년 상반기 상담회 (서울)",
        date: "2023.06.10",
        views: 823,
      },
      {
        id: 18,
        title: "여성기업 판로지원 정책 설명회",
        date: "2023.05.05",
        views: 356,
      },
    ],
  };

  const posts = allPosts[currentPage] || [];

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="bg-blue-900 text-white py-12 text-center">
        <h1 className="text-3xl font-extrabold">이전 행사 게시판</h1>
        <p className="mt-3 text-blue-200">
          지난 행사들의 생생한 현장을 사진으로 만나보세요.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              {/* 이미지 썸네일 영역 (회색 배경으로 대체) */}
              <div className="aspect-[4/3] bg-gray-200 rounded-xl overflow-hidden mb-4 relative">
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                <div className="w-full h-full flex items-center justify-center text-gray-400 text-4xl">
                  📸
                </div>
              </div>
              {/* 텍스트 영역 */}
              <div>
                <h3 className="font-bold text-lg text-gray-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
                  {post.title}
                </h3>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>{post.date}</span>
                  <span>조회 {post.views}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 페이지네이션 */}
        <div className="flex justify-center space-x-2 mt-12">
          {[1, 2, 3].map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-3 py-1 border rounded font-bold ${
                currentPage === page
                  ? "bg-blue-600 text-white"
                  : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
