import { useState } from "react";
import { Calendar, Clock } from "lucide-react";
import { Input } from "../ui/Input";
import { Label } from "../ui/Label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { Switch } from "../ui/Switch";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import {
  BsChevronDown,
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsJustifyLeft,
  BsJustifyRight,
  BsJustify,
  BsPaperclip,
} from "react-icons/bs";

const ProductFolderLeft = () => {
  const [isDiscountEnabled, setIsDiscountEnabled] = useState(false);
  const [isExpiryEnabled, setIsExpiryEnabled] = useState(false);
  const [expiryDate, setExpiryDate] = useState<Date | null>(null);

  return (
    <div className="py-0 md:px-2 w-full h-full md:h-[550px]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 ">
        <div className="w-full space-y-6">
          <div className="rounded-lg">
            <Input
              id="product-name"
              placeholder="Product Name"
              className="p-2 bg-gray-100 font-normal text-gray-400 w-full"
            />
          </div>

          <div>
            <Select>
              <SelectTrigger
                id="product-category"
                className="text-gray-400 bg-gray-100 font-normal w-full"
              >
                <SelectValue placeholder="Select Product Category" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="category1">Gadgets</SelectItem>
                <SelectItem value="category2">Accessories</SelectItem>
                <SelectItem value="category3">Fashion</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <Input
                id="selling-price"
                type="number"
                placeholder="Selling price"
                className="text-gray-400 bg-gray-100 font-normal outline-none w-full"
              />
            </div>
            <div>
              <Input
                id="cost-price"
                type="number"
                placeholder="Cost price"
                className="text-gray-400 bg-gray-100 font-normal w-full"
              />
            </div>
          </div>

          <div className="relative">
            <Input
              id="quantity"
              type="number"
              placeholder="Quantity in stock"
              className="text-gray-400 bg-gray-100 font-normal p-2 pr-10 rounded-lg w-full"
            />
          </div>

          <div>
            <Select>
              <SelectTrigger
                id="order-type"
                className="text-gray-400 bg-gray-100 font-normal w-full"
              >
                <SelectValue placeholder="Order Type" />
              </SelectTrigger>
              <SelectContent className="bg-white">
                <SelectItem value="type1">Phone</SelectItem>
                <SelectItem value="type2">Smart Watch</SelectItem>
                <SelectItem value="type3">T-shirts</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>Discount</span>
            <div className="flex items-center space-x-2 text-[12px] font-normal">
              <span>Add Discount</span>
              <Switch
                className="w-10 h-5"
                checked={isDiscountEnabled}
                onCheckedChange={setIsDiscountEnabled}
              />
            </div>
          </div>

          {isDiscountEnabled && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <Select>
                  <SelectTrigger className="text-gray-400 bg-gray-100 font-normal w-full">
                    <SelectValue placeholder="Type" />
                  </SelectTrigger>
                  <SelectContent className="bg-white">
                    <SelectItem value="percentage">Percentage</SelectItem>
                    <SelectItem value="fixed">Fixed Amount</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Input
                  id="discount-value"
                  type="number"
                  placeholder="Value"
                  className="text-gray-400 bg-gray-100 font-normal w-full"
                />
              </div>
            </div>
          )}

          <div className="flex items-center justify-between text-sm text-gray-400">
            <span>Expiry date</span>
            <div className="flex items-center space-x-2 text-[12px] font-normal">
              <span>Add Expiry Date</span>
              <Switch
                className="w-10 h-5"
                checked={isExpiryEnabled}
                onCheckedChange={setIsExpiryEnabled}
              />
            </div>
          </div>

          {isExpiryEnabled && (
            <div>
              <div className="flex items-center mt-2">
                <Button
                  variant="outline"
                  className="w-full justify-start text-gray-400 font-normal bg-gray-100"
                  onClick={() => {}}
                >
                  <Calendar className="mr-2 h-4 w-4 text-gray-600" />
                  {expiryDate ? expiryDate.toLocaleDateString() : "Select Date"}
                </Button>
              </div>
            </div>
          )}
        </div>

        <div className="w-full space-y-6 mb-14 mt-10 md:mt-0 md:mx-0">
          <div className="-mt-14 md:mt-0">
            <Textarea
              id="short-description"
              placeholder="Short Description"
              className="h-32 bg-gray-100 font-normal outline-none"
            />
          </div>

          <div>
            <Label className=" text-gray-400">Product Long Description</Label>
            <div className="relative bg-gray-100 font-normal h-48 p-4 text-lg rounded-xl mb-2">
              <div className="absolute top-2 left-2 flex space-x-2">
                <button className="flex items-center bg-gray-100 text-gray-400 px-3 py-1 rounded-lg shadow-md font-roboto text-sm">
                  Roboto <BsChevronDown className="ml-6" />
                </button>
                <button className="flex items-center bg-gray-100 text-gray-400 px-3 py-1 rounded-lg shadow-md font-roboto text-sm">
                  Paragraph <BsChevronDown className="ml-4" />
                </button>
              </div>

              <div className="hidden md:block">
                <div className="absolute top-2 right-2 flex space-x-3 text-gray-800">
                  <BsTypeBold
                    className="cursor-pointer hover:text-gray-900"
                    size={18}
                  />
                  <BsTypeUnderline
                    className="cursor-pointer hover:text-gray-800"
                    size={18}
                  />
                  <BsTypeItalic
                    className="cursor-pointer hover:text-gray-800"
                    size={18}
                  />
                  <BsJustify
                    className="cursor-pointer hover:text-gray-800"
                    size={18}
                  />
                  <BsJustifyLeft
                    className="cursor-pointer hover:text-gray-800"
                    size={18}
                  />
                  <BsJustifyRight
                    className="cursor-pointer hover:text-gray-800"
                    size={18}
                  />
                  <BsPaperclip
                    className="cursor-pointer hover:text-gray-800"
                    size={18}
                  />
                </div>
              </div>

              <div className="bg-gray-100 font-normal text-lg pt-4 -ml-4">
                <Textarea
                  id="long-description"
                  placeholder="Your Text Goes Here"
                  className="bg-gray-100 text-gray-700 p-4 w-full h-40"
                />
              </div>
            </div>

            <div className="text-[13px] font-normal text-gray-400">
              Add a long description for your product.
            </div>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-gray-400 text-sm font-normal">
              Return Policy
            </span>
            <div className="flex items-center space-x-2 text-[12px] font-normal text-gray-400">
              <span>Add Discount</span>
              <Switch className="w-10 h-5" />
            </div>
          </div>
          <div>
            <Label className="text-[13px] text-gray-400">Date Added</Label>
            <div className="grid grid-cols-2 gap-4 mt-2">
              <Button
                variant="outline"
                className="w-full justify-start text-gray-400 font-normal bg-gray-100"
              >
                <Calendar className="mr-2 h-4 w-4 text-gray-600" />
                12/12/2020
              </Button>
              <Button
                variant="outline"
                className="w-full justify-start text-gray-400 font-normal bg-gray-100"
              >
                <Clock className="mr-2 h-4 w-4 text-gray-600" />
                12:00 PM
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductFolderLeft;
