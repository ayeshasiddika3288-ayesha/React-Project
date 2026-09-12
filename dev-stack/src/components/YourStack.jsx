function YourStack({ stack, onRemove, onRemoveAll }) {
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-5 h-fit sticky top-24">
      <h2 className="text-lg font-bold text-gray-900">Your Stack</h2>
      <p className="text-sm text-gray-400 mb-4">
        {stack.length} Technology Selected
      </p>

      {stack.length === 0 ? (
        <p className="text-sm text-gray-400">
          Your stack is empty. Add technologies from the list to build your stack.
        </p>
      ) : (
        <div className="flex flex-col gap-3 mb-4">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border border-gray-100 rounded-xl p-3"
            >
              <div className="flex items-center gap-3">
                <img src={item.icon} alt={item.name} className="w-8 h-8 object-contain" />
                <div>
                  <p className="text-sm font-semibold text-gray-900">{item.name}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                </div>
              </div>
              <button
                onClick={() => onRemove(item.id)}
                className="text-gray-400 hover:text-red-500 text-sm"
              >
                ✕
              </button>
            </div>
          ))}
        </div>
      )}

      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="w-full border border-red-200 text-red-500 font-medium py-2 rounded-lg hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
}

export default YourStack;