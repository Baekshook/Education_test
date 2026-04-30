import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function SignUp() {
  const [activeTab, setActiveTab] = useState("member");

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200">
        {/* 로고 영역 */}
        <div className="py-8 text-center bg-white border-b border-gray-100">
          <Link to="/" className="text-2xl font-extrabold text-blue-900">
            2026 MD 상담회
          </Link>
          <p className="mt-2 text-sm text-gray-500">통합 회원 서비스 로그인</p>
        </div>

        {/* 탭 영역 */}
        <div className="flex border-b border-gray-200">
          <button
            className={`flex-1 py-4 text-center font-bold text-sm ${activeTab === "member" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:bg-gray-50"}`}
            onClick={() => setActiveTab("member")}
          >
            회원 로그인
          </button>
          <button
            className={`flex-1 py-4 text-center font-bold text-sm ${activeTab === "nonmember" ? "text-blue-600 border-b-2 border-blue-600" : "text-gray-500 hover:bg-gray-50"}`}
            onClick={() => setActiveTab("nonmember")}
          >
            비회원/신청확인
          </button>
        </div>

        {/* 로그인 폼 */}
        <div className="p-8">
          <form className="space-y-4">
            <div>
              <input
                type="text"
                placeholder="아이디를 입력해주세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="비밀번호를 입력해주세요"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
              />
            </div>

            <div className="flex items-center justify-between text-sm mt-2">
              <label className="flex items-center text-gray-600 cursor-pointer">
                <input
                  type="checkbox"
                  className="mr-2 border-gray-300 rounded text-blue-600 focus:ring-blue-500"
                />
                아이디 저장
              </label>
              <div className="space-x-2 text-gray-500">
                <button type="button" className="hover:text-blue-600">
                  아이디 찾기
                </button>
                <span>|</span>
                <button type="button" className="hover:text-blue-600">
                  비밀번호 찾기
                </button>
              </div>
            </div>

            <button
              type="button"
              className="w-full py-4 mt-4 bg-blue-900 text-white rounded-md font-bold text-lg hover:bg-blue-800 transition-colors"
            >
              로그인
            </button>
          </form>

          {/* 소셜 로그인 라인 */}
          <div className="mt-8">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">간편 로그인</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button className="flex justify-center items-center py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors bg-[#FEE500] text-black font-semibold text-sm border-none">
                카카오
              </button>
              <button className="flex justify-center items-center py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors bg-[#03C75A] text-white font-semibold text-sm border-none">
                네이버
              </button>
              <button className="flex justify-center items-center py-2 border border-gray-200 rounded-md hover:bg-gray-50 transition-colors bg-black text-white font-semibold text-sm border-none">
                Apple
              </button>
            </div>
          </div>

          {/* 회원가입 유도 버튼 */}
          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-500 text-sm mb-4">
              아직 회원이 아니신가요?
            </p>
            <button
              type="button"
              className="w-full py-3 border border-blue-600 text-blue-600 rounded-md font-bold hover:bg-blue-50 transition-colors"
            >
              신규 회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
