import EventInfo from "../EventPage/EventInfo";
import EventSchedule from "../EventPage/EventSchedule";

export default function Event() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* 서브페이지 타이틀 영역 */}
      <div className="bg-blue-900 text-white py-16 text-center">
        <p className="text-blue-300 text-sm font-semibold tracking-widest uppercase mb-2">
          Event
        </p>
        <h1 className="text-4xl font-extrabold">행사 안내</h1>
      </div>

      <EventInfo />
      <EventSchedule />

      {/* 간단한 하단 CTA */}
      <section className="py-12 bg-white text-center border-t border-gray-200">
        <p className="text-xl text-gray-800 mb-6 font-medium">
          여성기업과 유통사(MD)를 연결하는 1:1 상담회
        </p>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-md font-bold hover:bg-blue-700 transition-colors">
          상담 신청하기
        </button>
      </section>
    </div>
  );
}
