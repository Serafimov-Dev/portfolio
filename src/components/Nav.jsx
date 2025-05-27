import { useState, useEffect } from "react";
import { BiMenu } from "react-icons/bi";

const sections = [
  { id: "about", label: "За Мен" },
  { id: "gallery", label: "Галерия" },
  { id: "faq", label: "FAQ" },
  { id: "contact", label: "Контакти" },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      let current = null;
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            current = section.id;
            break;
          }
        }
      }

      if (
        window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 10
      ) {
        current = sections[sections.length - 1].id;
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full backdrop-blur-md bg-blue-950/90 border-b border-gray-700 border-opacity-20 z-50">
      <nav className="max-w-7xl mx-auto py-6 px-6 lg:px-32 flex items-center justify-between text-white">
        <a
          href="#home"
          className="inline-block text-xl md:text-2xl font-semibold text-gray-100 transition-all duration-300 transform hover:scale-105 font-sans [font-feature-settings:'liga'_off']"
        >
          Светлин <span className="text-blue-400">Серафимов</span>
        </a>

        <ul className="hidden md:flex gap-10">
          {sections.map((section) => (
            <li
              key={section.id}
              className={`opacity-70 hover:opacity-100 transition-opacity duration-300 ${
                activeSection === section.id ? "text-white opacity-100" : ""
              }`}
            >
              <a href={`#${section.id}`}>{section.label}</a>
            </li>
          ))}
        </ul>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <BiMenu className="text-3xl" />
        </button>

        {isOpen && (
          <ul className="md:hidden absolute top-16 left-0 right-0 bg-black/90 border-b border-gray-800 py-16 space-y-5 text-center">
            {sections.map((section) => (
              <li
                key={section.id}
                className={`group px-10 opacity-80 hover:opacity-100 duration-300 ${
                  activeSection === section.id ? "text-white opacity-100" : ""
                }`}
              >
                <a href={`#${section.id}`} onClick={() => setIsOpen(false)}>
                  <span className="text-lg">{section.label}</span>
                </a>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
