import { FaShieldAlt, FaShoppingCart, FaSyncAlt, FaTag } from "react-icons/fa";
const Features = () => {
  const features = [
    {
      icon: <FaShoppingCart className="text-blue-500 text-4xl" />,
      title: "Fast Shipping",
      subtitle: "Get your products delivered within 48 hours in select cities.",
    },
    {
      icon: <FaTag className="text-green-500 text-4xl" />,
      title: "Best Prices",
      subtitle: "We ensure the best market prices for all products.",
    },
    {
      icon: <FaSyncAlt className="text-yellow-500 text-4xl" />,
      title: "Easy Returns",
      subtitle: "Hassle-free returns within 7 days of purchase.",
    },
    {
      icon: <FaShieldAlt className="text-purple-500 text-4xl" />,
      title: "Secure Payment",
      subtitle: "Your payments are safe with our end-to-end encryption.",
    },
  ];

  return (
    <section className="my-10 flex justify-around flex-wrap gap-10">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex flex-col w-[300px] justify-center text-center items-center space-y-2"
        >
          {feature.icon}
          <h2 className="text-xl font-bold">{feature.title}</h2>
          <p className="text-gray-500">{feature.subtitle}</p>
        </div>
      ))}
    </section>
  );
};

export default Features;
