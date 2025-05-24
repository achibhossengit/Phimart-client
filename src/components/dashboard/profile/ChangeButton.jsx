import React from "react";

const ChangeButton = ({ isEdit, handleIsEdit }) => {
  return (
    <div className="flex justify-center mt-5 gap-4">
      {!isEdit ? (
        <button
          onClick={handleIsEdit}
          type="button"
          className="cursor-pointer px-4 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-200"
        >
          Edit Profile
        </button>
      ) : (
        <div className="flex gap-2 items-center">
          <button
            onClick={handleIsEdit}
            type="button"
            className="cursor-pointer px-4 py-2 bg-gray-200 text-gray-700 font-semibold rounded-md hover:bg-gray-300 transition duration-200"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="cursor-pointer px-4 py-2 bg-pink-500 text-white font-semibold rounded-md hover:bg-pink-600 transition duration-200"
          >
            Save Changes
          </button>
        </div>
      )}
    </div>
  );
};

export default ChangeButton;
