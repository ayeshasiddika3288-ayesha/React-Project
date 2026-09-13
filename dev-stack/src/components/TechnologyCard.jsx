function TechnologyCard({ technology, onAdd, isAdded }) {
  const { name, description, icon, category, difficulty, rating, badge } = technology;

  return (
    <div
      className={`bg-white rounded-2xl p-5 flex flex-col shadow-sm transition-all ${
        isAdded
          ? "border-2 border-pink-400 shadow-md"
          : "border border-gray-200 hover:shadow-md"
      }`}
    >
      <div className="flex items-start justify-between mb-3">
        <img src={icon} alt={name} className="w-10 h-10 object-contain" />
        <span className="text-xs font-medium px-3 py-1 rounded-full bg-orange-50 text-orange-600">
          {badge}
        </span>
      </div>

      <h3 className="text-lg font-bold text-gray-900 mb-1">{name}</h3>
      <p className="text-sm text-gray-500 mb-4 flex-1">{description}</p>

      <div className="flex items-center gap-3 text-xs text-gray-600 mb-4">
        <span className="bg-gray-100 px-2 py-1 rounded-md">{category}</span>
        <span>{difficulty}</span>
        <span className="flex items-center gap-1 text-yellow-500 font-medium">
          ⭐ {rating}
        </span>
      </div>

      <button
        onClick={() => onAdd(technology)}
        disabled={isAdded}
        className={`w-full py-2 rounded-lg font-medium text-sm transition-colors ${
          isAdded
            ? "bg-green-50 text-green-600 border border-green-200 cursor-not-allowed"
            : "bg-gray-900 text-white hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Added to Stack" : "Add to Stack"}
      </button>
    </div>
  );
}

export default TechnologyCard;