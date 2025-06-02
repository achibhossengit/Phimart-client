import { useEffect, useState } from "react";
import authApiClient from "../../services/auth-api-client";
import ReviewForm from "./ReviewForm";
import ReviewList from "./ReviewList";
import { useParams } from "react-router";
import apiClient from "../../services/api-client";
import useAuthContext from "../../hooks/useAuthContext";

const ReviewSection = () => {
  const { id } = useParams();
  const { user } = useAuthContext();
  const [reviewPermission, setReviewPermission] = useState(false);
  const [reviews, setReviews] = useState([]);
  const [editReview, setEditReview] = useState({ ratings: 0, comment: "" });
  const [editingId, setEditingId] = useState(null);
  const [formLoading, setFormLoading] = useState(false);
  const [reviewsLoading, setReviewsLoading] = useState(false);

  const onSubmit = async (data) => {
    try {
      const res = await authApiClient.post(`/products/${id}/reviews/`, data);
      loadReviews();
      return res;
    } catch (error) {
      console.log(error);
    }
  };
  const loadReviews = async () => {
    setReviewsLoading(true);
    try {
      const res = await apiClient.get(`/products/${id}/reviews/`);
      setReviews(res.data);
    } catch (error) {
      console.log(error);
    } finally {
      setReviewsLoading(false);
    }
  };

  const checkUserPermission = async () => {
    setFormLoading(true);
    try {
      const res = await authApiClient.get(`/orders/has-ordered/${id}`);
      setReviewPermission(res.data.hasOrdered);
    } catch (error) {
      console.log(error);
    } finally {
      setFormLoading(false);
    }
  };

  const handleUpdateReview = async(productId, reviewId)=>{
    try {
      await authApiClient.put(`/products/${productId}/reviews/${reviewId}/`, editReview)
      setEditingId(null)
      loadReviews()
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    checkUserPermission();
    loadReviews();
  }, []);
  return (
    <div>
      <div className="flex justify-between items-center pt-5 pb-2 border-b-2 border-gray-300">
        <h2 className="text-2xl font-bold text-gray-600">Customer Reviews</h2>
        <p className="text-gray-600">
          {reviews.length} {reviews.length > 1 ? "reviews" : "review"}
        </p>
      </div>
      <div>
        {formLoading ? (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-spinner loading-md"></span>
          </div>
        ) : (
          reviewPermission && <ReviewForm onSubmit={onSubmit} />
        )}
        {reviewsLoading ? (
          <div className="flex justify-center items-center py-10">
            <span className="loading loading-ring loading-md"></span>
          </div>
        ) : (
          <ReviewList
            reviews={reviews}
            user={user}
            editReview={editReview}
            setEditReview={setEditReview}
            editingId={editingId}
            setEditingId={setEditingId}
            handleUpdateReview={handleUpdateReview}
          />
        )}
      </div>
    </div>
  );
};

export default ReviewSection;
