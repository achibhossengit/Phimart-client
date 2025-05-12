import { FaArrowRight } from "react-icons/fa";

const CategoryItems = ({category, index}) => {
    const gradientColor=[
        "from-pink-200 to-blue-200",
        "from-purple-200 to-pink-200",
        "from-blue-200 to-pink-200",
        "from-pink-200 to-purple-200",
    ];

    return (
        <div className={`p-3 bg-gradient-to-br ${gradientColor[index % 4]} rounded-xl space-y-2 w-[300px] transform hover:scale-105 duration-150 cursor-pointer`}>
            <div className='flex justify-between items-center'>
                <p className='bg-pink-500 rounded-full px-5 py-3 font-bold text-white text-xl'>{category.name[0]}</p>
                <p className='p-1 bg-gray-100 rounded-md'>{category.product_count} items</p>
            </div>
            <h3 className='font-bold text-xl'>{category.name}</h3>
            <p className='text-gray-500 text-sm'>{category.description}</p>
            <button className='text-pink-500 font-bold flex items-center gap-2'>Explore <FaArrowRight /></button>
        </div>

    );
};

export default CategoryItems;