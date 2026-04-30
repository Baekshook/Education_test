import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "상담회 신청 자격은 어떻게 되나요?",
      answer: "여성기업이면 모두 신청 가능합니다.",
    },
    {
      question: "신청 후 결과는 언제 안내받을 수 있나요?",
      answer: "신청 후 3~5일 이내에 결과를 안내해드립니다.",
    },
    {
      question: "첨부파일은 어떤 형식으로 제출해야 하나요?",
      answer: "PDF, JPG, PNG 형식의 파일만 지원됩니다.",
    },
    {
      question: "상담회는 어디에서 진행되나요?",
      answer:
        "온·오프라인으로 진행되며, 온라인은 Zoom을 통해 참여 가능합니다.",
    },
    {
      question: "사업자등록번호로 중복 신청이 가능한가요?",
      answer: "하나의 사업자등록번호로 1회만 신청 가능합니다.",
    },
  ];

  const toggleFAQ = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white" id="faq">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-blue-600 font-bold tracking-wide uppercase text-sm mb-1">
            FAQ
          </p>
          <h2 className="text-3xl font-extrabold text-gray-900">
            자주 묻는 질문
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm"
            >
              <div
                className="p-5 flex justify-between items-center cursor-pointer hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(idx)}
              >
                <div className="flex items-center space-x-4">
                  <span className="text-blue-600 font-black text-xl">Q</span>
                  <span className="text-gray-800 font-medium">
                    {item.question}
                  </span>
                </div>
                <span
                  className={`text-gray-400 text-sm transition-transform ${openIndex === idx ? "rotate-180" : ""}`}
                >
                  ▼
                </span>
              </div>

              {openIndex === idx && (
                <div className="px-5 pb-5 border-t border-gray-100">
                  <div className="flex items-center space-x-4 pt-3">
                    <span className="text-blue-600 font-black text-xl">A</span>
                    <span className="text-gray-800 font-medium">
                      {item.answer}
                    </span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
