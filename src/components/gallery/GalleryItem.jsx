import Stars from "./Stars";
import categories from "./categories";

function GalleryItem({ item, onClick }) {
  // Find the category object for the current item
  const category = categories.find((c) => c.id === item.category);

  return (
    // Card container for a single gallery item
    <div
      className="bg-slate-100 rounded-xl shadow-lg flex flex-col items-center p-4 transition hover:scale-105 cursor-pointer"
      onClick={onClick} // Open modal on click
    >
      {/* Image container with aspect ratio */}
      <div className="w-full aspect-[1.414/1] bg-white rounded-lg overflow-hidden mb-3 border border-slate-200">
        <img
          src={item.url}
          alt={item.description}
          className="object-cover w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
      {/* Star rating */}
      <Stars count={item.stars} />
      {/* Category label */}
      <div className="mt-2 text-xs text-blue-700 font-semibold">
        {category?.label}
      </div>
    </div>
  );
}

export default GalleryItem;
