import { FaStar } from "react-icons/fa";

const StarRating = ({ handleOnClick, ratingsValue }) => {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => {
        const value = i + 1;
        return (
          <FaStar
            onClick={() => handleOnClick(value)}
            key={value}
            size={24}
            className={`cursor-pointer ${
              value <= ratingsValue ? "text-yellow-300" : "text-gray-300"
            } hover:text-yellow-400 transition-colors duration-200`}
          />
        );
      })}
    </div>
  );
};

export default StarRating;
