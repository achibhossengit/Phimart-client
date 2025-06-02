import ReviewCard from "./ReviewCard";

const ReviewList = ({reviews}) => {
  return (
    <div>
      {reviews.length <= 0 ? (
        <p className="text-center py-10">No reviews Available.</p>
      ) : (
        reviews.slice().reverse().map((review) => <ReviewCard key={review.id} review={review} />)
      )}
    </div>
  );
};

export default ReviewList;
