import { PiSquaresFour } from "react-icons/pi";
import { BsHandbag } from "react-icons/bs";
import { LuUsers } from "react-icons/lu";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";
import { FiFolderMinus } from "react-icons/fi";
import { LuHeadphones } from "react-icons/lu";
import { FiGift } from "react-icons/fi";
import companyLogo from "../assets/logos/companyLogo.png";
import { Link, useLocation } from "react-router-dom";
import arrow from "../assets/logos/Arrow.png";

const Header = () => {
  const location = useLocation();

  const isActive =
    location.pathname === "/newInventory" ||
    location.pathname === "/viewInventory";
  return (
    <div className="flex flex-col md:w-[88px] w-[72px] items-center h-[1024px] md:p-8 p-8 fixed left-0 top-0 md:space-y-6 space-y-0 md:mx-4 mx-0 border-r-2">
      <div className="w-10 h-10 mb-8 mr-2 md:mr-0">
        <img
          src={companyLogo}
          alt="Company Logo"
          className="w-[47px] h-[47px] fixed top-[24px] left-[18px] object-contain md:mx-4 mx-0"
        />
      </div>
      <div className="flex flex-col lg:gap-44 gap-20">
        <nav className="flex flex-col items-center md:space-y-10 space-y-7">
          <button>
            <Link to="/newInventory">
              <PiSquaresFour size={32} />
            </Link>
          </button>
          <button>
            <BsHandbag size={28} />
          </button>
          <button>
            <LuUsers size={28} />
          </button>
          <button
            className={`${
              isActive ? "bg-[#5570f1] text-white" : "bg-white"
            } hover:bg-[#5570f1] focus:bg-[#5570f1] active:bg-[#5570f1] hover:text-white rounded-lg p-2 transition-all`}
          >
            <Link to="/newInventory">
              <FiFolderMinus size={28} />
            </Link>
          </button>
          <button>
            <AiOutlineMessage size={28} />
          </button>
          <button>
            <IoSettingsOutline size={28} />
          </button>
        </nav>
        <div className="flex flex-col gap-4">
          <button className="bg-[#5E63661A] p-4 rounded-2xl">
            <LuHeadphones size={28} />
          </button>
          <button className="bg-[#fdeedd] p-4 rounded-2xl">
            <FiGift size={28} />
          </button>
          <img src={arrow} alt="arrow" className="w-8 h-8 ml-4 mt-4" />
        </div>
      </div>
    </div>
  );
};

export default Header;
