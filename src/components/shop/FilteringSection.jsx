const FilteringSection = ({ priceRange, handlePriceRange }) => {
  return (
    <div className="my-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-10 shadow-md rounded-md p-5">
      {/* price range */}
      <div className="space-y-3">
        <label className="text-sm font-semibold text-gray-600">
          Price Range
        </label>
        {/* Min Range */}
        <div className="flex items-center justify-between text-gray-700 gap-3">
          <input
            type="number"
            min={0}
            max={priceRange[1]}
            value={priceRange[0]}
            onChange={(event) => handlePriceRange(0, event.target.value)}
            className="w-1/3 text-center border-1 border-gray-600 rounded-sm focus:outline-none"
          />
          <input
            type="range"
            min={0}
            max={priceRange[1]}
            step={10}
            value={priceRange[0]}
            onChange={(event) => handlePriceRange(0, event.target.value)}
            className="w-1/2"
          />
        </div>
        {/* Max Range */}
        <div className="flex items-center justify-between gap-3">
          <input
            type="number"
            min={priceRange[0]}
            max={1000}
            value={priceRange[1]}
            onChange={(event) => handlePriceRange(1, event.target.value)}
            className="w-1/3 text-center border-1 border-gray-600 rounded-sm focus:outline-none"
          />
          <input
            type="range"
            min={priceRange[0]}
            max={1000}
            value={priceRange[1]}
            onChange={(event) => handlePriceRange(1, event.target.value)}
            className="w-1/2"
          />
        </div>
        <div className="flex justify-between text-gray-700 ">
          <span>${priceRange[0]}</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>

      {/* category div */}
      <div>
        <label className="text-sm font-semibold text-gray-600">Category</label>
        <select className="w-full block border border-gray-600 rounded-sm text-gray-700 focus:outline-none">
          <option value="">All Categories</option>
          <option value="1">Book</option>
          <option value="2">Fashion</option>
        </select>
      </div>

      {/* search */}
      <div>
        <label className="text-sm font-semibold text-gray-600">Search</label>
        <input
          type="text"
          placeholder="Search Products..."
          className="w-full block border border-gray-600 rounded-sm text-gray-700 focus:outline-none pl-2"
        />
      </div>

      {/* sorting */}
      <div>
        <label className="text-sm font-semibold text-gray-600">
          Sort By Price
        </label>
        <select className="w-full block border border-gray-600 rounded-sm text-gray-700 focus:outline-none">
          <option value="">Default</option>
          <option value="asc">Low to High</option>
          <option value="desc">High to Low</option>
        </select>
      </div>
    </div>
  );
};

export default FilteringSection;
