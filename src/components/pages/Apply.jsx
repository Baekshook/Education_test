import React from 'react';

export default function Apply() {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <div className="bg-blue-900 text-white py-12 text-center">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-2">Apply</p>
        <h1 className="text-3xl font-extrabold">상담 신청하기</h1>
        <p className="mt-3 text-blue-200">여성기업 판로역량강화 지원사업에 참여할 기업 정보를 입력해 주세요.</p>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <form className="bg-white p-8 rounded-2xl shadow-sm border border-gray-200">
          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">기업 기본 정보</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">기업명 *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="(주)여성기업" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">대표자명 *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="홍길동" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">사업자등록번호 *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="000-00-00000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">주요 취급 품목 *</label>
              <select className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white">
                <option>선택해 주세요</option>
                <option>식품</option>
                <option>패션/잡화</option>
                <option>뷰티/코스메틱</option>
                <option>생활/주방가전</option>
                <option>기타</option>
              </select>
            </div>
          </div>

          <h2 className="text-xl font-bold text-gray-900 mb-6 border-b pb-4">담당자 정보</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">담당자 이름 *</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="김담당" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">직급</label>
              <input type="text" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="대리" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">휴대폰 번호 *</label>
              <input type="tel" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="010-0000-0000" />
            </div>
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">이메일 주소 *</label>
              <input type="email" className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="example@email.com" />
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md mb-8 border border-gray-200">
            <label className="flex items-center space-x-3 cursor-pointer">
              <input type="checkbox" className="w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
              <span className="text-sm text-gray-700 font-medium">개인정보 수집 및 이용에 동의합니다. (필수)</span>
            </label>
          </div>

          <div className="text-center">
            <button type="button" className="bg-blue-600 text-white px-10 py-4 rounded-md font-bold text-lg hover:bg-blue-700 transition-colors w-full sm:w-auto min-w-[200px]">
              신청서 제출하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}