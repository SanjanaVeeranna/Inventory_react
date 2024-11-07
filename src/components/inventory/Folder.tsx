import { BsChevronDown } from "react-icons/bs";
import { FaPlus } from "react-icons/fa";
import { FiFolderMinus } from "react-icons/fi";
import { LuUsers } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import InventoryProducts from "./InventoryProducts";

const Folder = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/newInventory");
  };

  return (
    <div className="bg-gray-100 md:pt-4 md:px-8 pb-14 w-full ml-1 px-2">
      <div className="flex flex-row justify-between">
        <div className="md:text-2xl text-[15px] md:py-6 py-4 font-semibold text-gray-600">
          Inventory Summary
        </div>
        <button
          onClick={handleClick}
          className="flex items-center bg-[#5570f1] rounded-xl md:w-56 w-56 h-10 text-white md:my-6 my-4"
        >
          <FaPlus size={20} className="text-white md:mr-2 mr-1 md:ml-8 ml-1" />
          Add a New Product
        </button>
      </div>

      <div className="flex flex-col md:flex-row w-full h-auto gap-8">
        <div className="w-full md:w-1/2 bg-[#5570f1] p-4 rounded-2xl flex flex-col justify-start">
          <div className="bg-opacity-20 bg-white w-[48px] p-2 rounded-xl flex items-center mb-4 text-white">
            <FiFolderMinus size={26} />
          </div>

          <div className="flex flex-row md:gap-x-72 gap-x-14 text-white md:mt-10 mt-6 md:m-4">
            <div className="flex flex-col items-start">
              <div className="md:text-lg text-sm md:mb-2">All Products</div>
              <div className="md:text-2xl text-lg font-semibold">350</div>
            </div>
            <div className="flex flex-col items-start">
              <div className="md:text-lg text-sm md:mb-2">Active</div>
              <div className="flex items-center gap-x-2">
                <div className="md:text-2xl text-lg font-semibold">316</div>
                <div className="md:text-[18px] text-[13px] ml-1">86%</div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 bg-white rounded-2xl p-4 flex flex-col justify-start relative">
          <div className="bg-[#fdeedd] w-[48px] p-2 rounded-xl flex items-center mb-4 text-gray-600">
            <LuUsers size={28} />
          </div>
          <div className="absolute top-4 right-4 flex items-center text-gray-400">
            <span className="text-sm">This Week</span>
            <BsChevronDown size={12} className="ml-2" />
          </div>

          <div className="flex flex-row md:gap-x-36 gap-x-4 text-black md:mt-10 mt-6 md:m-4">
            <div className="flex flex-col items-start">
              <div className="md:text-lg text-sm md:mb-2 text-red-600">
                Low Stock Alert
              </div>
              <div className="md:text-2xl text-lg font-semibold">23</div>
            </div>
            <div className="flex flex-col items-start text-gray-400">
              <div className="md:text-lg text-sm md:mb-2">Expired</div>
              <div className="md:text-2xl text-lg font-semibold">3</div>
            </div>
            <div className="flex flex-col items-start text-gray-400">
              <div className="md:text-lg text-sm md:mb-2">1 Star Rating</div>
              <div className="md:text-2xl text-lg font-semibold">2</div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 -mb-10 md:mb-0">
        <InventoryProducts />
      </div>
    </div>
  );
};

export default Folder;
