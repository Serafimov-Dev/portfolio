import { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    question: "Колко време отне изработката на този сайт?",
    answer:
      "Една седмица, но свободното ми време за работа по него беше силно ограничено.",
  },
  {
    question: "На какво ниво бих се определил?",
    answer: "Начинаещ, но с желание да уча и развивам.",
  },
  {
    question: "Защо избрах фронтенд разработката?",
    answer:
      "Винаги съм харесвал визуалната комуникация, било то печатна или дигитална.",
  },
  {
    question: "Имам ли готовност да работя на пълен работен ден от офис?",
    answer:
      "Да, търся си сериозна и постоянна работа на пълен работен ден. Харесвам общуването с колеги и екипната работа.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section
      className="bg-slate-100 w-full py-16 flex flex-col items-center justify-center min-h-[60vh]"
      id="faq"
    >
      <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
        Въпроси и отговори
      </h2>
      <div className="w-full max-w-2xl mx-auto flex flex-col gap-4">
        {faqData.map((item, idx) => (
          <div
            key={idx}
            className="bg-zinc-50 rounded-2xl shadow-md border border-blue-900/10 overflow-hidden transition-all"
          >
            <button
              className="w-full flex items-center justify-between px-6 py-4 text-left text-blue-900 font-semibold text-lg focus:outline-none"
              onClick={() => toggle(idx)}
              aria-expanded={openIndex === idx}
            >
              <span>{item.question}</span>
              {openIndex === idx ? (
                <FaChevronUp className="text-blue-700" />
              ) : (
                <FaChevronDown className="text-blue-700" />
              )}
            </button>
            <div
              className={`px-6 pb-4 text-blue-800 text-base transition-all duration-300 ${
                openIndex === idx ? "block" : "hidden"
              }`}
            >
              {item.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Faq;
