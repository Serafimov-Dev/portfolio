import { motion } from "framer-motion";

const Home = () => {
  return (
    <div
      className="relative bg-slate-900 w-full pt-24 md:pt-16 min-h-screen flex items-center justify-center"
      id="home"
    >
      <div className="mx-auto max-w-6xl w-full p-4 md:p-8 lg:p-28 overflow-x-hidden">
        <div className="flex flex-col items-center justify-center md:flex-row gap-8 md:gap-16 lg:gap-24">
          <img
            src="/photo.png"
            className="w-[200px] md:w-[330px] h-auto  hover:scale-105 transition-all duration-500"
            alt="Serafimov Photo"
          />
          <div className="flex flex-col items-center md:items-start justify-center gap-3">
            <h1 className="text-gray-200 text-3xl md:text-4xl lg:text-5xl font-semibold text-center md:text-left">
              Светлин <span className="text-blue-400">Серафимов</span>
            </h1>
            <h3 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-light text-center md:text-left bg-gradient-to-r">
              FRONT END & DESIGN
            </h3>
            <p className="text-lg text-slate-400 text-center md:text-left text-pretty">
              <span className="block mb-2">Здравейте, колеги!</span>
              Аз съм начинаещ фронтенд разработчик, бакалавър по Компютърни
              науки с дизайнерски усет и умения.{" "}
              <span className="font-bold text-blue-400">
                <br />
                Работя с React, JavaScript и Tailwind, а за графичен дизайн
                използвам CorelDRAW и Adobe Photoshop.
                <br />
              </span>{" "}
              Търся възможност да уча и да се развивам в позитивен екип, с който
              заедно да растем и създаваме красиво и функционално съдържание.
            </p>
            <div className="flex gap-3 mt-2">
              <a
                href="/Serafimov-Portfolio-BG.pdf"
                download
                className="px-2 py-1 text-white bg-zinc-800 rounded-full text-xs md:text-sm hover:bg-blue-700 transition"
              >
                Моето CV
              </a>
              <a
                href="https://github.com/Serafimov-Dev/portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="px-2 py-1 text-white bg-zinc-800 rounded-full text-xs md:text-sm hover:bg-blue-800 transition"
              >
                GitHub Repo
              </a>
            </div>
          </div>
        </div>
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, 16, 0] }}
          transition={{ repeat: 2, duration: 1, ease: "easeInOut" }}
          className="absolute left-1/2 -translate-x-1/2"
          style={{ bottom: 32 }}
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#60a5fa"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
