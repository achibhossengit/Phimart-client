import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";
import ReviewList from "../reviews/ReviewList";

const RatingHistory = () => {
  const [reviews, setReviews] = useState([]);
  const [editReview, setEditReview] = useState({ ratings: 0, comment: "" });
  const [editingId, setEditingId] = useState(null);
  const [loading, setLoading] = useState(false);
  const loadReviews = async () => {
    setLoading(true);
    try {
      const res = await authApiClient.get("/reviews/");
      if (res.status == 200) {
        setReviews(res.data.results);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadReviews();
  }, []);

  const handleUpdateReview = async (productId, reviewId) => {
    try {
      await authApiClient.put(`/reviews/${reviewId}/`, editReview);
      setEditingId(null);
      loadReviews();
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteReview = async (productId, reviewId) => {
    try {
      await authApiClient.delete(`/reviews/${reviewId}/`);
      loadReviews();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="my-5">
      {!loading ? (
        <ReviewList
          reviews={reviews}
          user={reviews[0]?.user}
          editReview={editReview}
          editingId={editingId}
          setEditReview={setEditReview}
          setEditingId={setEditingId}
          handleUpdateReview={handleUpdateReview}
          handleDeleteReview={handleDeleteReview}
        />
      ) : (
        <div className="flex justify-center items-center min-h-screen">
            <p><span className="loading loading-spinner loading-sm"></span> Reviews Loading...</p>
        </div>
      )}
    </div>
  );
};

export default RatingHistory;
