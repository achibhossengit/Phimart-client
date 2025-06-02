import StarRating from "./StarRating";

const ReviewEditForm = ({ editReview, setEditReview, onCancelEdit, onEditSave }) => {
  console.log(editReview);
  return (
    <div className="h-auto min-h-[120px] bg-gray-50 p-4 rounded-lg border border-gray-200 shadow-sm">
      <div className="mb-3">
        <StarRating
          ratingsValue={editReview.ratings}
          handleOnClick={(value) =>
            setEditReview({ ...editReview, ratings: value })
          }
        />
      </div>
      <textarea
        value={editReview.comment}
        onChange={(e) =>
          setEditReview({ ...editReview, comment: e.target.value })
        }
        className="w-full p-3 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        rows="3"
      />
      <div className="flex justify-end gap-2 mt-3">
        <button
          onClick={onCancelEdit}
          className="px-3 py-1.5 text-sm cursor-pointer text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 transition-colors"
        >
          Close
        </button>
        <button onClick={onEditSave} className="px-3 py-1.5 cursor-pointer text-sm text-white bg-blue-600 rounded-md hover:bg-blue-700 transition-colors">
          Save
        </button>
      </div>
    </div>
  );
};

export default ReviewEditForm;
