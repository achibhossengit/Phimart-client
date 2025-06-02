import { useForm } from "react-hook-form";
import StarRating from "./StarRating";

const ReviewForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    reset,
    formState: { errors, isSubmitting },
  } = useForm();

  const ratingsValue = watch("ratings", 0);

  return (
    <div className="flex justify-center w-full my-5 px-4 sm:px-6 lg:px-8">
      <form
        onSubmit={handleSubmit(async (data) => {
          const res = await onSubmit(data);
          if (res.status == 201) reset();
        })}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md w-full max-w-2xl"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">
          Write a Review
        </h2>

        <fieldset className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">
            Rating<span className="text-red-500">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <StarRating
              handleOnClick={(value) => setValue("ratings", value)}
              ratingsValue={ratingsValue}
              size="lg" // Assuming your StarRating component supports size props
            />
            <span className="text-gray-600 text-sm">
              {ratingsValue > 0 ? `${ratingsValue} star${ratingsValue !== 1 ? 's' : ''}` : "Not rated"}
            </span>
          </div>
          <input
            {...register("ratings", { required: "Rating is required." })}
            type="hidden"
          />
          {errors.ratings && (
            <p className="text-red-500 text-sm mt-1">
              {errors.ratings.message}
            </p>
          )}
        </fieldset>

        <fieldset className="flex flex-col space-y-2">
          <label className="font-semibold text-gray-700">
            Your Review<span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("comment", {
              required: "Review is required.",
              minLength: {
                value: 10,
                message: "Review must be at least 10 characters long.",
              },
              maxLength: {
                value: 500,
                message: "Review must be less than 500 characters.",
              }
            })}
            rows="5"
            className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-300 focus:border-blue-500 focus:outline-none transition-all"
            placeholder="Share your experience in detail..."
          ></textarea>
          <div className="flex justify-between items-center">
            {errors.comment ? (
              <p className="text-red-500 text-sm">
                {errors.comment.message}
              </p>
            ) : (
              <span className="text-gray-400 text-sm">
                Minimum 10 characters
              </span>
            )}
            <span className="text-gray-400 text-sm">
              {watch("comment", "").length}/500
            </span>
          </div>
        </fieldset>

        <div className="pt-2">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-3 px-4 rounded-lg cursor-pointer font-medium text-white transition-colors ${
              isSubmitting
                ? 'bg-blue-400 cursor-not-allowed'
                : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center gap-2">
                <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full"></span>
                Submitting...
              </span>
            ) : (
              "Submit Review"
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;