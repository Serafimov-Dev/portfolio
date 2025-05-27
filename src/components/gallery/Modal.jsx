import Stars from "./Stars";

function Modal({ item, onClose, onPrev, onNext }) {
  // Махаме използването на category.label в JSX

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-2xl p-8 w-full max-w-3xl flex flex-col items-center relative mx-2 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute top-4 right-4 text-white text-3xl font-bold"
          onClick={onClose}
        >
          ×
        </button>

        <button
          className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-700 text-4xl font-bold hover:text-blue-600"
          onClick={onPrev}
        >
          {"<"}
        </button>

        <button
          className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-700 text-4xl font-bold hover:text-blue-600"
          onClick={onNext}
        >
          {">"}
        </button>

        <img
          src={item.url}
          alt={item.description}
          className="max-h-[60vh] w-auto rounded-lg"
          style={{ objectFit: "contain", maxWidth: "85%" }}
        />

        <Stars count={item.stars} />

        <div className="text-slate-800 text-lg text-center font-semibold mb-2">
          {item.description}
        </div>

        <div className="flex flex-col gap-2 w-full justify-center items-center mb-2 text-sm text-center">
          <div className="flex flex-col items-center w-full">
            <span className="font-bold text-green-700 mb-1">
              какво харесвам:
            </span>
            <span>{item.pro}</span>
          </div>
          <div className="flex flex-col items-center w-full">
            <span className="font-bold text-red-700 mb-1">
              какво не харесвам:
            </span>
            <span>{item.cons}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
