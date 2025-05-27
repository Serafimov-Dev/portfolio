import { useEffect, useState } from "react";
import GalleryItem from "./GalleryItem";
import Modal from "./Modal";
import categories from "./categories";

const JSON_URL =
  "https://raw.githubusercontent.com/Serafimov-Dev/design-gallery/main/gallery.json";

function Gallery() {
  const [items, setItems] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(
    categories.map((c) => c.id)
  );
  const [modalIndex, setModalIndex] = useState(null);

  useEffect(() => {
    fetch(JSON_URL)
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  const filteredItems = items.filter((item) =>
    selectedCategories.includes(item.category)
  );

  function openModal(index) {
    setModalIndex(index);
  }

  function closeModal() {
    setModalIndex(null);
  }

  function showPrev() {
    setModalIndex(
      (prev) => (prev - 1 + filteredItems.length) % filteredItems.length
    );
  }

  function showNext() {
    setModalIndex((prev) => (prev + 1) % filteredItems.length);
  }

  useEffect(() => {
    if (modalIndex !== null) {
      document.body.style.overflow = "hidden";
      const handleKeyDown = (e) => {
        if (e.key === "Escape") closeModal();
        if (e.key === "ArrowLeft") showPrev();
        if (e.key === "ArrowRight") showNext();
      };
      window.addEventListener("keydown", handleKeyDown);
      return () => {
        document.body.style.overflow = "";
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [modalIndex, filteredItems.length]);

  return (
    <section
      id="gallery"
      className="bg-white w-full min-h-screen flex flex-col items-center justify-center"
    >
      <div className="max-w-6xl w-full p-4 md:p-8 lg:p-28 mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-800 text-center mb-2">
          Галерия
        </h2>
        <p className="text-slate-600 text-center text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          Оценките са субективни и отразяват емоцията ми към дизайна.
        </p>

        <div className="flex flex-wrap gap-2 md:gap-4 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() =>
                setSelectedCategories((prev) =>
                  prev.includes(cat.id)
                    ? prev.filter((id) => id !== cat.id)
                    : [...prev, cat.id]
                )
              }
              className={`px-4 py-2 rounded-full font-semibold border transition-all duration-200
                ${
                  selectedCategories.includes(cat.id)
                    ? "bg-blue-700 text-white border-blue-700 shadow-md scale-105"
                    : "bg-zinc-100 text-blue-700 border-blue-200 hover:bg-blue-100"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {selectedCategories.length === 0 ? (
          <div className="text-blue-700 text-lg font-semibold text-center py-16">
            Няма нито една избрана категория!
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {filteredItems.map((item, index) => (
              <GalleryItem
                key={item.id}
                item={item}
                onClick={() => openModal(index)}
              />
            ))}
          </div>
        )}

        {modalIndex !== null && (
          <Modal
            item={filteredItems[modalIndex]}
            onClose={closeModal}
            onPrev={showPrev}
            onNext={showNext}
          />
        )}
      </div>
    </section>
  );
}

export default Gallery;
