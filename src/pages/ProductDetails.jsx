import React from "react";
import ProductImageGallary from "../components/productsDetails/ProductImageGallary";
import AddToCartButton from "../components/productsDetails/AddToCartButton";

const ProductDetails = () => {
  const images = [
    {
      image:
        "https://res.cloudinary.com/dr4acuvwp/image/upload/v1744615637/hwaasknoezljpwao7dys.jpg",
    },
    {
      image:
        "https://th.bing.com/th/id/OIP.cvexECPTvVLzlZWuLoaRegHaL2?cb=iwc2&w=1563&h=2500&rs=1&pid=ImgDetMain",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8 sm:px-6 lg:px-8 my-5 md:my-20 shadow-2xl">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Product Images */}
        <div className="border-2 border-gray-500 flex items-center rounded-xl bg-base-200">
          <ProductImageGallary images={images} />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-between">
          {/* Category and Title */}
          <div>
            <span className="text-sm font-medium text-indigo-600">
              Books / Fantasy
            </span>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Fantasy Novel
            </h1>
            <div className="mt-4 flex items-center">
              <span className="text-2xl font-bold text-gray-900">$345.40</span>
              <span className="ml-2 text-sm text-gray-500">(inc. tax)</span>
            </div>
          </div>

          {/* Availability */}
          <div className="flex items-center">
            <div className="h-4 w-4 rounded-full bg-green-500 mr-2"></div>
            <span className="text-sm font-medium text-gray-700">
              In stock (101 available)
            </span>
          </div>

          {/* Description */}
          <div className="prose prose-sm max-w-none text-gray-500 border-t border-gray-200 pt-6">
            <p>
              Immerse yourself in this high-quality fantasy novel featuring
              intricate world-building and compelling characters. Perfect for
              fans of epic adventures and magical realms.
            </p>
            <ul className="mt-4 space-y-2">
              <li>• Hardcover with dust jacket</li>
              <li>• 512 pages of captivating content</li>
              <li>• First edition with author signature</li>
              <li>• Includes exclusive map of the fantasy world</li>
            </ul>
          </div>
          
          {/* Additional Info */}
          <div className="">
            <h3 className="text-sm font-medium text-gray-900">Details</h3>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="font-medium text-gray-900">Author</p>
                <p className="text-gray-500">J.R.R. Tolkien</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Publisher</p>
                <p className="text-gray-500">Fantasy Press</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">ISBN</p>
                <p className="text-gray-500">978-1234567890</p>
              </div>
              <div>
                <p className="font-medium text-gray-900">Publication Date</p>
                <p className="text-gray-500">January 2023</p>
              </div>
            </div>
          </div>

          {/* Add to Cart */}
          <div className="border-t border-gray-200 pt-6">
            <AddToCartButton />
          </div>

        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
