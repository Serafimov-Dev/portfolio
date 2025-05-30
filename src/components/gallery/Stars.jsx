function Stars({ count }) {
  return (
    <div className="flex gap-1 justify-center my-1">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={i < count ? "text-yellow-400" : "text-gray-300"}
        >
          ★
        </span>
      ))}
    </div>
  );
}

export default Stars;
