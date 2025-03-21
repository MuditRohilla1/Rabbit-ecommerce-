import { useSearchParams } from "react-router-dom";

const SortOptions = () => {
  const [searchParams, SetSearchParams] = useSearchParams();

  const handleSortChange = (e) => {
    const sortBy = e.target.value;
    searchParams.set("sortBy", sortBy);
    SetSearchParams(searchParams)
  };

  return (
    <div className="mb-4 flex items-center justify-end">
      <select
        name="sort"
        id="sort"
        onChange={handleSortChange}
        value={searchParams.get("sortBy") || ""}
        className="border p-2 rounded-md focus:outline-none"
      >
        <option value="">Default</option>
        <option value="priceAsc">Price: Low to High</option>
        <option value="priceDesc">Price: High to Low</option>
        <option value="poularity">Popularity</option>
      </select>
    </div>
  );
};

export default SortOptions;
