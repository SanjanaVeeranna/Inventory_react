import { BsChevronDown, BsSave, BsUpload } from "react-icons/bs";
import ProductFolderLeft from "./ProductFolderLeft";
import ProductFolderRight from "./ProductFolderRight";
import { useNavigate } from "react-router-dom";

const ProductFolder = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-gray-100 md:pt-4 md:px-8 pb-14 w-full px-2 ml-3">
      <div className="flex justify-between items-center">
        <div className="md:text-2xl text-[15px] md:py-6 py-4 font-semibold text-gray-600">
          New Inventory Item
        </div>
        <div className="flex space-x-4">
          <button
            className="flex items-center justify-between bg-black rounded-xl md:px-4 px-2 py-2 md:w-48 w-10 sm:w-auto text-white my-6"
            onClick={() => navigate("/viewInventory")}
          >
            <span className="mx-auto hidden sm:block">Save as Draft</span>

            <span className="mx-auto sm:hidden">
              <BsSave size={20} className="text-white" />
            </span>

            <span className="border-l border-gray-600 h-6 mx-2 hidden sm:block"></span>
            <BsChevronDown
              size={20}
              className="text-white ml-2 hidden sm:block"
            />
          </button>

          <button
            className="flex items-center justify-between bg-[#5570f1] rounded-xl md:px-4 px-2 py-2 md:w-48 w-10 sm:w-auto text-white my-6"
            onClick={() => navigate("/viewInventory")}
          >
            <span className="mx-auto hidden sm:block">Save & Publish</span>

            <span className="mx-auto sm:hidden">
              <BsUpload size={20} className="text-white" />
            </span>
          </button>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row mt-0 space-x-0 lg:space-x-6 space-y-6 lg:space-y-0">
        <div className="lg:w-2/3 w-full bg-white rounded-lg p-6 shadow-md">
          <div className="text-xl font-semibold mb-4">
            <ProductFolderLeft />
          </div>
        </div>

        <div className="lg:w-1/3 w-full bg-white rounded-lg p-6 shadow-md">
          <div className="text-xl font-semibold mb-4">
            <ProductFolderRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFolder;
