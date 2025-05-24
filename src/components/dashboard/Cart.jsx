const Cart = ({icon: Icon, title, value}) => {
  return (
    <div className="w-56 py-5 text-center bg-white shadow-xl rounded-md transform hover:scale-x-105 cursor-pointer">
      <div className="flex items-center justify-center gap-2 mb-3">
        <Icon className="text-pink-300" />
        <h3 className="font-semibold">{title}</h3>
      </div>
      <p className="font-bold text-xl">{value}</p>
    </div>
  );
};

export default Cart;
