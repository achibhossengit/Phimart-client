import React from 'react';

const RegisterBlank = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 to-red-100 flex items-center justify-center p-4">
      <div className="bg-white shadow-2xl rounded-lg p-6 max-w-md w-full text-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Account Created Successfully!</h1>
        <p className="text-gray-700 mb-6">
          Your account has been created successfully. Please check your email inbox for an activation link to verify your account.
        </p>
      </div>
    </div>
  );
};

export default RegisterBlank;
