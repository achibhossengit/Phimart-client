import ReviewCard from "./ReviewCard";

const ReviewList = ({
  reviews,
  user,
  editReview,
  setEditReview,
  editingId,
  setEditingId,
  handleUpdateReview,
  handleDeleteReview,
}) => {
  return (
    <div>
      {reviews.length <= 0 ? (
        <p className="text-center py-10">No reviews Available.</p>
      ) : (
        reviews
          .slice()
          .reverse()
          .map((review) => (
            <ReviewCard
              key={review.id}
              review={review}
              user={user}
              isEditing={editingId === review.id}
              editReview={editReview}
              setEditReview={setEditReview}
              onEditClick={() => {
                setEditingId(review.id);
                setEditReview({
                  ratings: review.ratings,
                  comment: review.comment,
                });
              }}
              onCancelEdit={() => setEditingId(null)}
              handleUpdateReview={handleUpdateReview}
              handleDeleteReview={handleDeleteReview}
            />
          ))
      )}
    </div>
  );
};

export default ReviewList;
