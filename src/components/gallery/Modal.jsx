import Stars from "./Stars";

function Modal({ item, onClose, onPrev, onNext }) {
  // Check if the device is mobile (for swipe navigation)
  const isMobile = window.innerWidth < 640;

  let touchStartX = null;

  // Handle swipe start
  function handleTouchStart(e) {
    touchStartX = e.touches[0].clientX;
  }

  // Handle swipe end and trigger prev/next
  function handleTouchEnd(e) {
    if (touchStartX === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchEndX - touchStartX;
    if (diff > 50) {
      onPrev();
    } else if (diff < -50) {
      onNext();
    }
    touchStartX = null;
  }

  return (
    // Modal overlay, closes on click outside content
    <div
      className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal content */}
      <div
        className="bg-white rounded-2xl shadow-2xl p-3 sm:p-6 md:p-8 w-full max-w-3xl flex flex-col items-center relative mx-2 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={isMobile ? handleTouchStart : undefined}
        onTouchEnd={isMobile ? handleTouchEnd : undefined}
      >
        {/* Navigation arrows only on desktop */}
        {!isMobile && (
          <>
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
          </>
        )}

        {/* Gallery image */}
        <img
          src={item.url}
          alt={item.description}
          className="max-h-[60vh] w-auto rounded-lg"
          style={{ objectFit: "contain", maxWidth: "85%" }}
        />

        {/* Star rating */}
        <Stars count={item.stars} />

        {/* Description */}
        <div className="text-slate-800 text-lg text-center font-semibold mb-2">
          {item.description}
        </div>

        {/* Pros and cons */}
        <div className="flex flex-col gap-2 w-full justify-center items-center mb-2 text-sm text-center">
          <div className="flex flex-col items-center w-full">
            <span className="font-bold text-green-700 mb-1">What I like:</span>
            <span>{item.pro}</span>
          </div>
          <div className="flex flex-col items-center w-full">
            <span className="font-bold text-red-700 mb-1">
              What I don't like:
            </span>
            <span>{item.cons}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
