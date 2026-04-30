import React from "react";
import Main from "./components/MainPage/Main";
import Event from "./components/pages/Event";
import Header from "./components/MainPage/Header";
import Footer from "./components/MainPage/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Education from "./components/pages/Education";
import EventGallery from "./components/pages/EventGallery";
import EventCalendar from "./components/pages/EventCalendar";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-gray-800 flex flex-col">
        {/* Header는 페이지가 바뀌어도 항상 위에 고정 */}
        <Header />

        {/* URL 주소에 따라 내용이 바뀌는 영역 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/event" element={<Event />} />
            <Route path="/education" element={<Education />} />
            <Route path="/event/gallery" element={<EventGallery />} />
            <Route path="/event/calendar" element={<EventCalendar />} />
          </Routes>
        </main>

        {/* Footer 역시 항상 하단에 고정 */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
