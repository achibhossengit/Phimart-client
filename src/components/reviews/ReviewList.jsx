import ReviewCard from "./ReviewCard";

const ReviewList = ({reviews, user}) => {
  return (
    <div>
      {reviews.length <= 0 ? (
        <p className="text-center py-10">No reviews Available.</p>
      ) : (
        reviews.slice().reverse().map((review) => <ReviewCard key={review.id} review={review} user={user}/>)
      )}
    </div>
  );
};

export default ReviewList;
