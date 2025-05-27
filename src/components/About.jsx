import { useState } from "react";

const tabs = [
  { label: "За Мен", key: "about" },
  { label: "Умения", key: "skills" },
  { label: "Бъдеще", key: "future" },
  { label: "За ИИ", key: "ai" },
];

const tabContent = {
  about: {
    text: "Предимно съм работил като обслужващ персонал във Видин. Градът не предлага много възможности за реализация, но интересът ми винаги е бил в технологиите и визуалното. Харесвам идеята трудът ми да оставя следа — нещо, което не изчезва след 30 минути.",
  },
  skills: {
    text: "Фокусиран съм върху React с js и Tailwind. Бих казал, че разбирам основните концепции, работя с компоненти, състояния, форми, props , условен рендеринг и други. Разбира се знам, че пътя е дълъг и има още много за надграждане.",
  },
  future: {
    text: "В дългосрочен план планирам да надграждам уменията си и да уча нови технологии като Next.js, който харесвам заради простотата и удобната организация. Искам да мастерирам и Tailwind – обичам го заради гъвкавостта и бързината, с която се работи.",
  },
  ai: {
    text: "Използвам активно AI инструменти и вярвам, че те са бъдещето на дигиталната разработка. Прилагам ги ежедневно – за учене, идеи и по-бързи решения. В програмирането се доверявам се на Copilot, но гледам да не губя контрол над кода.",
  },
};

const About = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div
      className="bg-slate-100 w-full flex items-center justify-center"
      id="about"
    >
      <div className="mx-auto max-w-6xl w-full p-4 md:p-8 lg:p-28 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-8">
          Малко повече за мен
        </h2>
        <div className="flex justify-center gap-2 md:gap-4 mb-8">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActiveTab(tab.key)}
                className={`px-4 py-2 rounded-full font-semibold border transition-all duration-200
                  ${
                    isActive
                      ? "bg-blue-700 text-white border-blue-700 shadow-md scale-105"
                      : "bg-zinc-100 text-blue-700 border-blue-200 hover:bg-blue-100"
                  }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
        <div className="w-full flex flex-col items-center">
          <p className="text-slate-800 text-lg md:text-xl text-center">
            {tabContent[activeTab].text}
          </p>
        </div>
        <hr className="my-10 border-slate-500 w-full max-w-3xl mx-auto" />
        <p className="text-blue-800 text-lg md:text-xl text-center max-w-3xl mx-auto">
          Въпреки че тепърва навлизам във фронтенд разработката и все още нямам
          завършени проекти, с това портфолио искам да покажа какво мога.
          <br />
          Фокусът тук е върху галерия с дизайни, които съм създавал през
          последните 10 години. Данните се зареждат от външен JSON, поддържа се
          филтриране по категории, визуализиране на рейтинг а при модално
          отваряне се показват и детайлите за дизайна.
        </p>
      </div>
    </div>
  );
};

export default About;
