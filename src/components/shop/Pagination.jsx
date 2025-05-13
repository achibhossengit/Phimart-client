const Pagination = ({ totalPages, handlePageChange, currentPage }) => {
  return (
    <div className="flex justify-center items-center gap-2 my-5">
      {Array.from({ length: totalPages }, (_, i) => (
        <button
          onClick={() => handlePageChange(i + 1)}
          className={`px-2 rounded-sm ${
            i + 1 == currentPage ? "bg-pink-500 text-white" : "bg-gray-300"
          }`}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
