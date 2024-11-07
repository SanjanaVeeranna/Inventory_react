import { GoHomeFill } from "react-icons/go";
import { BsChevronDown } from "react-icons/bs";
import Folder from "./Folder";
import { Button } from "../ui/Button";
import picture from "../../assets/images/picture.png"; // Add your profile image path here
import { PiBellSimpleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div className="md:p-4 pt-4 ml-8 md:mx-0">
      <div className="flex items-center justify-between md:px-8 px-4">
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

      <div className="flex flex-row md:gap-x-4 gap-x-2 md:py-6 py-2 md:px-8 px-4">
        <GoHomeFill size={24} className="text-blue-600" />
        <div className="text-lg text-gray-400">/</div>
        <Link to="/newInventory" className="text-lg text-gray-400">
          Inventory
        </Link>
      </div>
      <div className="mx-2 md:mx-0">
        <Folder />
      </div>
    </div>
  );
};

export default Profile;
