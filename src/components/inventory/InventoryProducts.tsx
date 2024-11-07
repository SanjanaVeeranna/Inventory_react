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
    name: "iPhone 13 Pro",
    image:
      "https://s3-alpha-sig.figma.com/img/7736/87d4/556d4d0fcd2751bdb09090e73a4c6ba1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dODxii~tzGlXfuPsQJAWmkOGmke7L5gF9W12Epf5c1PiUEj6PVwe3mlkRnVcHqqImj93PFiKI0Afv6nIaWxR-74kt5giEs7R~cxj6DJGEwgMa5yGIOHTCTMWgo58nREIdwaj5~zfi8wOOslKLzt3vm0L2zWt8O20iYmZNkazkf5YiotJZTH0m669iGmZO8aGoCDkaoGRyQ29TT2toSLPEY9YGew-3jMRRSmqme4T3wWc1FqNzwC2V-X2-8Nnl5UyHJ7MM5YeKN9UYwcoLJfJzIRs25F0VuFgRnkhZNA1gPgQTZ6E4FBIWgzGwhjwFpDpl3NgcKBoHRuSExKFp9ALWw__",
    category: "Gadgets",
    unitPrice: 1225000.0,
    inStock: 8,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Published",
  },
  {
    id: 2,
    name: "iPhone 12 Pro",
    image:
      "https://s3-alpha-sig.figma.com/img/dd27/9ed7/9b5f31803e237080f1d4997662e8d625?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYdIlJrms7IZ3ppTXcCsAZz3m40BAk01ngN-u46LAJJe2whts6N8R6ZrNxdlcqTJaaNZZWDW551lTwQbZLPo2LqmktS3sOF8p-xsmmJqskQYd4ETpGJvwCnFnrVQl0V34e9e5Are-Wqh3y4UKvtPYznETb8KTSdeqI57CPPtANsnjQ4zBzsSQypFhFEnYIUJrF8~ZUWEa42llZq6DO8xm3ov7pOgo2aeHkCPZt3UfR5y5tJ30PCW9SQXx3LsdXwng1U9-nSQksl0QIIkGJu~o40HC14dN46Kn9G0frtQ9-9tys48CuHRSb-NB27X7BXz2sKRvOCyOUaRqniTU5CuUQ__",
    category: "Gadgets",
    unitPrice: 725000.0,
    inStock: 12,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Published",
  },
  {
    id: 3,
    name: "Polo T-shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/624c/0aac/3e9ba88949b2aba52fd81607a1c17d4a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHzRqPIh0-hkqee8Azm~gJ4wpiPqoZQBYAHtGpsnsIeYuJeZ3AelkIWtmx4mquTB0i3fQNtKrSeXJYgxGF~9aMnkjsma4fsNE1dKFfPZqsZeqWykG62cz4fV023qF-DFC2TWdjQFwEAlrkzG4MsGGz6buXg4HP4pgwb3pXACfT8eJUMzuI9As3J2zMcQO2r~9EarzNn8~-mKLY-MFsvueYltuVtofP0uOQFw10MclryVfXEN-gJ~Bf5Epw85pND5z9~nxS~VNYspr2TT7ZY5uFz3qeh2HHXqEKcJjSpYhm6qvjGZvIFc0AMoVHq3pGFayGBegwSjqZeD8OVw0pVbUw__",
    category: "Fashion",
    unitPrice: 49.99,
    inStock: 120,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Unpublished",
  },
  {
    id: 1,
    name: "iPhone 13 Pro",
    image:
      "https://s3-alpha-sig.figma.com/img/7736/87d4/556d4d0fcd2751bdb09090e73a4c6ba1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dODxii~tzGlXfuPsQJAWmkOGmke7L5gF9W12Epf5c1PiUEj6PVwe3mlkRnVcHqqImj93PFiKI0Afv6nIaWxR-74kt5giEs7R~cxj6DJGEwgMa5yGIOHTCTMWgo58nREIdwaj5~zfi8wOOslKLzt3vm0L2zWt8O20iYmZNkazkf5YiotJZTH0m669iGmZO8aGoCDkaoGRyQ29TT2toSLPEY9YGew-3jMRRSmqme4T3wWc1FqNzwC2V-X2-8Nnl5UyHJ7MM5YeKN9UYwcoLJfJzIRs25F0VuFgRnkhZNA1gPgQTZ6E4FBIWgzGwhjwFpDpl3NgcKBoHRuSExKFp9ALWw__",
    category: "Gadgets",
    unitPrice: 1225000.0,
    inStock: 8,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Published",
  },
  {
    id: 2,
    name: "iPhone 12 Pro",
    image:
      "https://s3-alpha-sig.figma.com/img/dd27/9ed7/9b5f31803e237080f1d4997662e8d625?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYdIlJrms7IZ3ppTXcCsAZz3m40BAk01ngN-u46LAJJe2whts6N8R6ZrNxdlcqTJaaNZZWDW551lTwQbZLPo2LqmktS3sOF8p-xsmmJqskQYd4ETpGJvwCnFnrVQl0V34e9e5Are-Wqh3y4UKvtPYznETb8KTSdeqI57CPPtANsnjQ4zBzsSQypFhFEnYIUJrF8~ZUWEa42llZq6DO8xm3ov7pOgo2aeHkCPZt3UfR5y5tJ30PCW9SQXx3LsdXwng1U9-nSQksl0QIIkGJu~o40HC14dN46Kn9G0frtQ9-9tys48CuHRSb-NB27X7BXz2sKRvOCyOUaRqniTU5CuUQ__",
    category: "Gadgets",
    unitPrice: 725000.0,
    inStock: 12,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Published",
  },
  {
    id: 3,
    name: "Polo T-shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/624c/0aac/3e9ba88949b2aba52fd81607a1c17d4a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHzRqPIh0-hkqee8Azm~gJ4wpiPqoZQBYAHtGpsnsIeYuJeZ3AelkIWtmx4mquTB0i3fQNtKrSeXJYgxGF~9aMnkjsma4fsNE1dKFfPZqsZeqWykG62cz4fV023qF-DFC2TWdjQFwEAlrkzG4MsGGz6buXg4HP4pgwb3pXACfT8eJUMzuI9As3J2zMcQO2r~9EarzNn8~-mKLY-MFsvueYltuVtofP0uOQFw10MclryVfXEN-gJ~Bf5Epw85pND5z9~nxS~VNYspr2TT7ZY5uFz3qeh2HHXqEKcJjSpYhm6qvjGZvIFc0AMoVHq3pGFayGBegwSjqZeD8OVw0pVbUw__",
    category: "Fashion",
    unitPrice: 49.99,
    inStock: 120,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Unpublished",
  },
  {
    id: 1,
    name: "iPhone 13 Pro",
    image:
      "https://s3-alpha-sig.figma.com/img/7736/87d4/556d4d0fcd2751bdb09090e73a4c6ba1?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=dODxii~tzGlXfuPsQJAWmkOGmke7L5gF9W12Epf5c1PiUEj6PVwe3mlkRnVcHqqImj93PFiKI0Afv6nIaWxR-74kt5giEs7R~cxj6DJGEwgMa5yGIOHTCTMWgo58nREIdwaj5~zfi8wOOslKLzt3vm0L2zWt8O20iYmZNkazkf5YiotJZTH0m669iGmZO8aGoCDkaoGRyQ29TT2toSLPEY9YGew-3jMRRSmqme4T3wWc1FqNzwC2V-X2-8Nnl5UyHJ7MM5YeKN9UYwcoLJfJzIRs25F0VuFgRnkhZNA1gPgQTZ6E4FBIWgzGwhjwFpDpl3NgcKBoHRuSExKFp9ALWw__",
    category: "Gadgets",
    unitPrice: 1225000.0,
    inStock: 8,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Published",
  },
  {
    id: 2,
    name: "iPhone 12 Pro",
    image:
      "https://s3-alpha-sig.figma.com/img/dd27/9ed7/9b5f31803e237080f1d4997662e8d625?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pYdIlJrms7IZ3ppTXcCsAZz3m40BAk01ngN-u46LAJJe2whts6N8R6ZrNxdlcqTJaaNZZWDW551lTwQbZLPo2LqmktS3sOF8p-xsmmJqskQYd4ETpGJvwCnFnrVQl0V34e9e5Are-Wqh3y4UKvtPYznETb8KTSdeqI57CPPtANsnjQ4zBzsSQypFhFEnYIUJrF8~ZUWEa42llZq6DO8xm3ov7pOgo2aeHkCPZt3UfR5y5tJ30PCW9SQXx3LsdXwng1U9-nSQksl0QIIkGJu~o40HC14dN46Kn9G0frtQ9-9tys48CuHRSb-NB27X7BXz2sKRvOCyOUaRqniTU5CuUQ__",
    category: "Gadgets",
    unitPrice: 725000.0,
    inStock: 12,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Published",
  },
  {
    id: 3,
    name: "Polo T-shirt",
    image:
      "https://s3-alpha-sig.figma.com/img/624c/0aac/3e9ba88949b2aba52fd81607a1c17d4a?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kHzRqPIh0-hkqee8Azm~gJ4wpiPqoZQBYAHtGpsnsIeYuJeZ3AelkIWtmx4mquTB0i3fQNtKrSeXJYgxGF~9aMnkjsma4fsNE1dKFfPZqsZeqWykG62cz4fV023qF-DFC2TWdjQFwEAlrkzG4MsGGz6buXg4HP4pgwb3pXACfT8eJUMzuI9As3J2zMcQO2r~9EarzNn8~-mKLY-MFsvueYltuVtofP0uOQFw10MclryVfXEN-gJ~Bf5Epw85pND5z9~nxS~VNYspr2TT7ZY5uFz3qeh2HHXqEKcJjSpYhm6qvjGZvIFc0AMoVHq3pGFayGBegwSjqZeD8OVw0pVbUw__",
    category: "Fashion",
    unitPrice: 49.99,
    inStock: 120,
    discount: 0.0,
    totalValue: 50000.0,
    status: "Unpublished",
  },
];

const InventoryProducts = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  return (
    <div className="bg-white rounded-2xl px-4 pt-4">
      <div className="flex justify-between items-center">
        <div className="text-xl font-semibold text-gray-600">
          Inventory Items
        </div>
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
              <TableHead></TableHead>
              <TableHead>
                <div className="flex items-center">
                  Product Name
                  <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Category <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Unit Price <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>

              <TableHead>
                <div className="flex items-center">
                  In-Stock <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Discount <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Total Value <BiMenuAltLeft className="ml-2" />
                </div>
              </TableHead>
              <TableHead>
                <div className="flex items-center">
                  Action <BiMenuAltLeft className="ml-2" />
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
                <TableCell className="p-2">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="rounded-md"
                    width={50}
                    height={50}
                  />
                </TableCell>
                <TableCell className="font-medium text-gray-600">
                  {product.name}
                </TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.unitPrice.toFixed(2)}</TableCell>
                <TableCell>{product.inStock}</TableCell>
                <TableCell>{product.discount}%</TableCell>
                <TableCell>${product.totalValue.toFixed(2)}</TableCell>

                <TableCell>
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex items-center text-gray-600 bg-gray-200 px-6"
                  >
                    Publish
                    <BsChevronDown size={12} className="ml-2" />
                  </Button>
                </TableCell>

                <TableCell>
                  {product.status === "Published" ? (
                    <Button className="bg-[#d2daff] text-[#5570F1] px-6">
                      Published
                    </Button>
                  ) : (
                    <Button className="bg-[#fdeedd] text-black">
                      Unpublished
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default InventoryProducts;
