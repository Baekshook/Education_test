import React from "react";
import Main from "./components/MainPage/Main";
import Event from "./components/pages/Event";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen font-sans text-gray-800 flex flex-col">
        {/* Header는 페이지가 바뀌어도 항상 위에 고정 */}
        {/* URL 주소에 따라 내용이 바뀌는 영역 */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/event" element={<Event />} />
            {/* 다른 페이지가 필요하면 여기에 추가 */}
            {/* <Route path="/event" element={<Event />} /> */}
          </Routes>
        </main>
        {/* Footer 역시 항상 아래에 고정 */}
      </div>
    </BrowserRouter>
  );
}

export default App;
