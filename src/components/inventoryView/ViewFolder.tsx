import { BsChevronDown, BsHandbag, BsSave, BsUpload } from "react-icons/bs";
import { Clock, Eye, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { Card } from "../ui/Card";
import shirt from "../../assets/images/shirt.png";
import ViewProducts from "./ViewProducts";

export default function ViewFolder() {
  return (
    <div className="bg-gray-100 pb-14">
      <div className="md:px-8 px-2 w-full">
        <div className="flex justify-between items-center">
          <div className="flex flex-col">
            <div className="flex items-center gap-12">
              <div className="md:text-xl text-lg md:py-6 py-2 font-semibold text-gray-600">
                Polo T-shirt
              </div>

              <div className="text-lg text-gray-600 font-semibold hidden md:block">
                Date Added{" "}
                <span className="font-medium text-gray-400">
                  12 Sept 2022 - 12:55pm
                </span>
              </div>

              <div className="flex items-center text-lg text-gray-600 font-semibold hidden md:block">
                Product URL
                <a
                  href="https://1nancystores.com/polot-shirt"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ml-1 text-gray-400"
                >
                  1nancystores.com/polot-shirt
                </a>
                <button
                  onClick={() =>
                    navigator.clipboard.writeText(
                      "https://1nancystores.com/polot-shirt"
                    )
                  }
                  className="ml-2 text-blue-600 hover:text-gray-800"
                  title="Copy URL"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8 16v2a2 2 0 002 2h8a2 2 0 002-2v-8a2 2 0 00-2-2h-2M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex items-center justify-between bg-black rounded-xl md:px-4 px-2 py-2 md:w-48 w-10 sm:w-auto text-white my-6">
              <span className="mx-auto hidden sm:block">Edit Profile</span>

              <span className="mx-auto sm:hidden">
                <BsSave size={20} className="text-white" />
              </span>

              <span className="border-l border-gray-600 h-6 mx-2 hidden sm:block"></span>
              <BsChevronDown
                size={20}
                className="text-white ml-2 hidden sm:block"
              />
            </button>

            <button className="flex items-center justify-between bg-[#c95757] rounded-xl md:px-4 px-2 py-2 md:w-48 w-10 sm:w-auto text-white my-6">
              <span className="mx-auto hidden sm:block">
                Unpublished Product
              </span>

              <span className="mx-auto sm:hidden">
                <BsUpload size={20} className="text-white" />
              </span>
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 md:px-8 md:py-6 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-12">
        <Card className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-2 bg-white p-4 rounded-xl border h-52">
          <div className="bg-gray-200 flex items-center justify-center text-gray-400 h-full">
            <img
              src={shirt}
              alt="Default photo"
              width={40}
              height={40}
              className="object-cover w-full h-full"
            />
          </div>
        </Card>

        <Card className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-4 bg-white p-4 flex flex-col justify-between rounded-xl border h-52">
          <div className="flex justify-between items-start">
            <span className="text-gray-800 text-sm">
              Last Order 12 Sept 2022
            </span>
            <Button
              variant="outline"
              size="sm"
              className="text-green-500 bg-green-100 rounded-lg "
            >
              Published
            </Button>
          </div>
          <div className="flex md:gap-x-40 gap-x-14">
            <div>
              <span className="text-gray-400 text-sm">Price</span>
              <p className="text-gray-800 font-semibold text-xl">25000.00</p>
            </div>
            <div>
              <span className="text-gray-400 text-sm">In Stock</span>
              <p className="text-gray-800 font-semibold text-xl">20</p>
            </div>
          </div>
        </Card>

        <Card className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 bg-white p-4 rounded-xl border h-52">
          <div className="flex justify-between items-start mb-4">
            <Clock className="text-blue-600 bg-gray-300 rounded-lg" size={20} />
            <Button variant="ghost" size="sm" className="text-gray-400">
              All-time <ChevronDown size={16} className="ml-1" />
            </Button>
          </div>
          <div className="mt-20">
            <span className="text-gray-400 text-sm">Total Orders</span>
            <p className="text-gray-800 font-semibold text-xl">50000.00</p>
          </div>
        </Card>

        <Card className="col-span-12 sm:col-span-6 md:col-span-3 lg:col-span-3 bg-white p-4 flex flex-col justify-between rounded-xl border h-52">
          <div className="flex justify-between items-start">
            <Eye className="text-black" size={20} />
            <Button variant="ghost" size="sm" className="text-gray-400">
              All-time <ChevronDown size={16} className="ml-1" />
            </Button>
          </div>

          <div className="flex justify-between mt-auto">
            <div>
              <span className="text-gray-400 text-sm">Views</span>
              <p className="text-gray-800 font-semibold text-xl">1,200</p>
            </div>
            <div className="mr-36">
              <span className="text-gray-400 text-sm">Favorites</span>
              <p className="text-gray-800 font-semibold text-xl">23</p>
            </div>
          </div>
        </Card>
      </div>

      <div className="hidden md:block">
        <div className="flex flex-row w-full px-8 h-[200px] gap-8">
          <div className="w-1/2 bg-white rounded-2xl p-4 flex flex-col justify-start relative">
            <div className="bg-[#fdeedd] w-[48px] p-2 rounded-xl flex items-center mb-4 text-gray-600">
              <BsHandbag size={28} />
            </div>
            <div className="absolute top-4 right-4 flex items-center text-gray-400">
              <span className="text-sm">All-time</span>
              <BsChevronDown size={12} className="ml-2" />
            </div>
            <div className="flex flex-row gap-x-36 text-black mt-10 m-4">
              <div className="flex flex-col items-start">
                <div className="text-lg mb-2 text-gray-400">All Orders</div>
                <div className="text-2xl font-semibold text-black">1</div>
              </div>
              <div className="flex flex-col items-start text-gray-400">
                <div className="text-lg mb-2">Pending</div>
                <div className="text-2xl font-semibold text-black">0</div>
              </div>
              <div className="flex flex-col items-start text-gray-400">
                <div className="text-lg mb-2">Completed</div>
                <div className="text-2xl font-semibold text-black">1</div>
              </div>
            </div>
          </div>

          <div className="w-1/2 bg-white rounded-2xl p-4 flex flex-col justify-start relative">
            <div className="bg-[#fdeedd] w-[48px] p-2 rounded-xl flex items-center mb-4 text-gray-600">
              <BsHandbag size={28} />
            </div>
            <div className="absolute top-4 right-4 flex items-center text-gray-400">
              <span className="text-sm">All-time</span>
              <BsChevronDown size={12} className="ml-2" />
            </div>
            <div className="flex flex-row gap-x-36 text-black mt-10 m-4">
              <div className="flex flex-col items-start">
                <div className="text-lg mb-2 text-gray-400">Canceled</div>
                <div className="text-2xl font-semibold text-black">0</div>
              </div>
              <div className="flex flex-col items-start text-gray-400">
                <div className="text-lg mb-2">Returned</div>
                <div className="text-2xl font-semibold text-black">0</div>
              </div>
              <div className="flex flex-col items-start text-gray-400">
                <div className="text-lg mb-2">Damaged</div>
                <div className="text-2xl font-semibold text-black">0</div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
      <div className="md:px-8 md:my-8 md:py-10 py-6">
        <ViewProducts />
      </div>
    </div>
  );
}
