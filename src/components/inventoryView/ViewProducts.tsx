import { BsChevronDown } from "react-icons/bs";
import { CiFilter, CiSearch } from "react-icons/ci";
import { FiSend } from "react-icons/fi";
import { SlCalender } from "react-icons/sl";
import { Checkbox } from "../ui/Checkbox";
import { Button } from "../ui/Button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/Table";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";

const products = [
  {
    id: 1,
    date: "12 Aug 2022 - 12:25am",
    type: "Home Delivery",
    unitPrice: 1225000.0,
    qty: 2,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Completed",
  },
];

const ViewProducts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl px-4 py-4 pb-44">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-600">Purchases</div>
        <div className="flex justify-between items-center">
          <div className="block sm:hidden mr-36">
            <button
              className="text-black px-4 py-2"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <BsChevronDown size={12} className="ml-2" />
            </button>

            {dropdownOpen && (
              <div className="absolute bg-white border border-gray-300 rounded-md mt-2 p-4 z-10">
                <button className="text-gray-400 border-2 border-gray-400 rounded-md px-4 py-2 flex flex-row gap-2 mb-2">
                  <CiSearch size={24} className="pt-1 text-gray-800" />
                  Search
                </button>
                <button className="text-black border-2 border-gray-600 rounded-md px-4 py-2 flex flex-row gap-1 mb-2">
                  <CiFilter size={22} className="pt-1 text-gray-600" />
                  Filter
                </button>
                <button className="text-black border-2 border-gray-600 rounded-md px-4 py-2 flex flex-row gap-1 mb-2">
                  <SlCalender size={22} className="pt-1 text-gray-600" />
                  Filter
                </button>
                <button className="text-black border-2 border-gray-600 rounded-md px-4 py-2 flex flex-row gap-1 mb-2">
                  <FiSend size={22} className="pt-1 text-gray-600" />
                  Share
                </button>
                <button className="text-black border-2 border-gray-600 rounded-md px-4 py-2 flex flex-row gap-1">
                  Bulk Action
                  <BsChevronDown size={12} className="ml-2 mt-2" />
                </button>
              </div>
            )}
          </div>

          <div className="hidden sm:flex space-x-2 overflow-x-auto no-scrollbar flex-nowrap">
            <button className="text-gray-400 border-2 border-gray-400 rounded-md px-4 my-2 py-2 flex flex-row gap-2 pr-28">
              <CiSearch size={24} className="pt-1 text-gray-800" />
              Search
            </button>
            <button className="text-black border-2 border-gray-600 rounded-md px-4 my-2 py-2 flex flex-row gap-1">
              <CiFilter size={22} className="pt-1 text-gray-600" />
              Filter
            </button>
            <button className="text-black border-2 border-gray-600 rounded-md px-4 my-2 py-2 flex flex-row gap-1">
              <SlCalender size={22} className="pt-1 text-gray-600" />
              Filter
            </button>
            <button className="text-black border-2 border-gray-600 rounded-md px-4 my-2 py-2 flex flex-row gap-1">
              <FiSend size={22} className="pt-1 text-gray-600" />
              Share
            </button>
            <button className="text-black border-2 border-gray-600 rounded-md px-4 my-2 py-2 flex flex-row gap-1">
              Bulk Action
              <BsChevronDown size={12} className="ml-2 mt-2" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-10xl mx-auto py-10">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px]">
                <Checkbox />
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Order Date
                  <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Order Type <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Unit Price <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>

              <TableHead>
                <div className="flex items-center">
                  Qty <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Discount <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Order Total <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Status <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>
                  <Checkbox />
                </TableCell>
                <TableCell className="font-medium text-gray-600">
                  <div className="flex flex-col">
                    <span>{product.date}</span>
                  </div>
                </TableCell>
                <TableCell>{product.type}</TableCell>
                <TableCell>${product.unitPrice.toFixed(2)}</TableCell>
                <TableCell>{product.qty}</TableCell>
                <TableCell>{product.discount}%</TableCell>
                <TableCell>${product.totalValue.toFixed(2)}</TableCell>

                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="text-green-500 bg-green-100 rounded-lg"
                  >
                    Completed
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ViewProducts;
