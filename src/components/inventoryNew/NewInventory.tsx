import { GoHomeFill } from "react-icons/go";
import { Button } from "../ui/Button";
import { BsChevronDown } from "react-icons/bs";
import { PiBellSimpleFill } from "react-icons/pi";
import picture from "../../assets/images/picture.png";
import ProductFolder from "../inventoryNew/ProductFolder";
import { Link } from "react-router-dom";

const NewInventory = () => {
  return (
    <div className="md:p-4 pt-4 ml-0 md:mx-0">
      <div className="flex items-center justify-between md:px-8 px-0">
        <div className="md:text-4xl text-xl font-semibold text-gray-600">
          Inventory
        </div>

        <div className="flex items-center md:space-x-4 space-x-2">
          <Button
            variant="outline"
            size="sm"
            className="flex items-center bg-[#fdeedd] text-gray-800 md:px-6 px-2 font-medium"
          >
            Nanny's Shop
            <BsChevronDown
              size={16}
              className="md:ml-6 ml-1 mt-1 text-gray-800"
            />
          </Button>
          <PiBellSimpleFill
            size={26}
            className="text-[#5570f1] hidden md:block"
          />
          <img
            src={picture}
            alt="Profile"
            className="h-8 w-8 rounded-xl object-cover"
          />
        </div>
      </div>

      <div className="flex flex-row md:gap-x-4 gap-x-2 md:py-6 py-2 md:px-8 px-0">
        <Link to="/" className="flex items-center">
          <GoHomeFill className="text-blue-600 w-4 h-4 md:w-6 md:h-6" />
        </Link>
        <div className="md:text-lg text-sm text-gray-400">/</div>
        <Link to="/newInventory" className="md:text-lg text-sm text-gray-400">
          Inventory
        </Link>
        <div className="md:text-lg text-sm text-gray-400">/</div>
        <Link to="/viewInventory" className="md:text-lg text-sm text-gray-400">
          New Inventory
        </Link>
      </div>
      <div className="-mx-4 md:mx-0">
        <ProductFolder />
      </div>
    </div>
  );
};

export default NewInventory;
