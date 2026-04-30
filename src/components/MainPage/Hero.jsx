import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative bg-blue-900 text-white flex items-center justify-center min-h-[500px]">
      <div className="absolute inset-0 bg-blue-900 opacity-90"></div>
      <div className="relative z-10 text-center px-4">
        <p className="text-blue-300 font-semibold mb-3 tracking-wider text-sm md:text-base">
          주관 : 중소벤처기업부   주최 : 한국중소벤처기업유통원
        </p>
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          2026 소상공인 유통플랫폼 MD상담회
        </h1>
        <p className="text-lg md:text-xl mb-8 text-blue-100">
          로컬의 가치를 잇다, 지역의 성장을 열다{" "}
        </p>
        <div className="flex justify-center space-x-4">
          {/* ✨ 버튼(button) 태그를 a 태그로 변경하고 href 속성 추가 */}
          <a
            href="https://fanfandaero.kr/portal/v2/introV2.do"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 text-white px-6 py-3 rounded-md font-bold hover:bg-blue-500 transition-colors inline-block text-center"
          >
            사업 신청하기
          </a>

          {/* 행사 안내 보기는 내부에 있는 페이지(/event)로 가야 하므로 Link로 변경해 주면 좋습니다. (선택사항) */}
          <Link
            to="/event"
            className="bg-white text-blue-900 border border-white px-6 py-3 rounded-md font-bold hover:bg-gray-100 transition-colors inline-block text-center"
          >
            행사 안내 보기
          </Link>
        </div>
      </div>
    </section>
  );
}
