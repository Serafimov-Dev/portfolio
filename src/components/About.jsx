import { useState } from "react";

const tabs = [
  { label: "About Me", key: "about" },
  { label: "Skills", key: "skills" },
  { label: "Future", key: "future" },
  { label: "AI", key: "ai" },
];

const tabContent = {
  about: {
    text: "I have always enjoyed visual communication. Frontend development allows me to combine creativity with logical thinking and build user-friendly solutions. Becoming part of the IT field feels like a natural progression of my interests and skills.",
  },
  skills: {
    text: "I am focused on React with JS and Tailwind. I would say I understand the main concepts, work with components, state, forms, props, conditional rendering, and more. Of course, I know the journey is long and there is much more to learn.",
  },
  future: {
    text: "In the long term, I want to develop my skills by learning new technologies like Next.js, which I like for its simplicity and good organization. I also want to deepen my knowledge of Tailwind, which I really enjoy using.",
  },
  ai: {
    text: "I actively use AI tools and believe they are the future of digital development. I apply them daily – for learning, ideas, and faster solutions. I believe that integrating AI into my workflow will help me create higher quality and more innovative solutions.",
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
          A Little More About Me
        </h2>
        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8">
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
          Although I am just starting out in frontend development and do not yet
          have completed projects, with this portfolio I want to show what I can
          do.
          <br />
          The main focus of my portfolio is a gallery of graphic designs created
          by me over the last 10 years as a hobby or for direct clients. The
          gallery loads data from an external JSON with fetch and useEffect and
          allows filtering by categories. When clicked, a modal opens with a
          detailed overview and navigation via arrows, keyboard and gestures.
          When the modal is open, scrolling is blocked to maintain focus.
        </p>
      </div>
    </div>
  );
};

export default About;
