import Stars from "./Stars";
import categories from "./categories";

function GalleryItem({ item, onClick }) {
  const category = categories.find((c) => c.id === item.category);

  return (
    <div
      className="bg-slate-100 rounded-xl shadow-lg flex flex-col items-center p-4 transition hover:scale-105 cursor-pointer"
      onClick={onClick}
    >
      <div className="w-full aspect-[1.414/1] bg-white rounded-lg overflow-hidden mb-3 border border-slate-200">
        <img
          src={item.url}
          alt={item.description}
          className="object-cover w-full h-full rounded-lg"
          loading="lazy"
        />
      </div>
      <Stars count={item.stars} />
      <div className="mt-2 text-xs text-blue-700 font-semibold">
        {category?.label}
      </div>
    </div>
  );
}

export default GalleryItem;
