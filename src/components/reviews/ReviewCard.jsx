import { FaStar } from "react-icons/fa";

const ReviewCard = ({ review, user }) => {
  return (
    <div className="flex justify-between items-center py-5">
      <div>
        <h3 className="text-xl font-semibold">{review.user.name}</h3>
        <div className="flex gap-1">
          {[...Array(5)].map((_, i) => {
            const value = i + 1;
            return (
              <FaStar
                key={value}
                className={`${
                  value <= review.ratings ? "text-yellow-300" : "text-gray-300"
                }`}
                size={16}
              />
            );
          })}
        </div>
        <p className="text-gray-500 mt-5">{review.comment}</p>
      </div>
      {user?.id === review?.user.id && (
        <div className="flex gap-2">
          <button className="btn btn-outline btn-primary">Edit</button>
          <button className="btn btn-outline btn-error">Delete</button>
        </div>
      )}
    </div>
  );
};

export default ReviewCard;
