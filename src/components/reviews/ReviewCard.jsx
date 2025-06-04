import { FaStar } from "react-icons/fa";
import ReviewEditForm from "./ReviewEditForm";
import { useLocation } from "react-router";

const ReviewCard = ({
  review,
  user,
  editReview,
  setEditReview,
  onEditClick,
  isEditing,
  onCancelEdit,
  handleUpdateReview,
  handleDeleteReview,
}) => {
  const location = useLocation();
  const isMyReview = location.pathname.split("/").includes("my-reviews", 0);
  return (
    <div className="mb-6 last:mb-0">
      {!isEditing ? (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow">
          <div className="flex justify-between items-start gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                {isMyReview ? (
                  <h3 className="text-lg font-semibold text-gray-800">
                    Product Id: {review.product}
                  </h3>
                ) : (
                  <h3 className="text-lg font-semibold text-gray-800">
                    {review.user.name}
                  </h3>
                )}
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => {
                    const value = i + 1;
                    return (
                      <FaStar
                        key={value}
                        className={`${
                          value <= review.ratings
                            ? "text-yellow-400"
                            : "text-gray-200"
                        }`}
                        size={18}
                      />
                    );
                  })}
                </div>
              </div>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {review.comment}
              </p>
            </div>

            {user?.id === review?.user.id && (
              <div className="flex gap-2">
                <button
                  onClick={onEditClick}
                  className="px-3 py-1.5 text-sm text-blue-600 bg-blue-50 rounded-md hover:bg-blue-100 transition-colors cursor-pointer"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteReview(review.product, review.id)}
                  className="px-3 py-1.5 text-sm text-red-600 bg-red-50 rounded-md hover:bg-red-100 transition-colors cursor-pointer"
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
          <div className="mb-3 flex items-center gap-3">
            <h3 className="text-lg font-semibold text-gray-800">
              {review.user.name}
            </h3>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => {
                const value = i + 1;
                return (
                  <FaStar
                    key={value}
                    className={`${
                      value <= editReview.ratings
                        ? "text-yellow-400"
                        : "text-gray-200"
                    }`}
                    size={18}
                  />
                );
              })}
            </div>
          </div>
          <ReviewEditForm
            editReview={editReview}
            setEditReview={setEditReview}
            onCancelEdit={onCancelEdit}
            onEditSave={() => handleUpdateReview(review.product, review.id)}
          />
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
