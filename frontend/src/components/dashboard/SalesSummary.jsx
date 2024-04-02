import React from "react";
import { MdDateRange } from "react-icons/md";
import { ImStatsDots } from "react-icons/im";
import { MdCurrencyRupee ,MdOutlineAccountCircle} from "react-icons/md";
import { LuListVideo } from "react-icons/lu";
import { PiCoins } from "react-icons/pi";
export default function SalesSummary() {
  return (
    <div className=" w-full bg-white pt-3 rounded-3xl px-5  mt-5 h-[240px] ">
      <div className=" flex justify-between items-center">
        <div>
          <p>Today's Sales</p>
          <p className=" text-[13px]">Sales Summary</p>
        </div>
        <div className=" flex items-center gap-2">
          <MdDateRange style={{ color: "#306CFC" }} />
          <p className=" text-[13px]"> Thu , 05-09-2023</p>
        </div>
      </div>

      <div className=" flex justify-between items-center mt-4 ">
        <div className=" bg-[#FCDEE0] w-[240px]  h-[150px] rounded-3xl px-3 py-2">
          <div className="flex items-center pt-3 px-5 gap-4 ">
            <div className=" p-3 bg-[#F75F80] rounded-full">
              <ImStatsDots style={{ color: "white" }} />
            </div>
            <div className=" flex items-center justify-center">
              <MdCurrencyRupee className=" w-8 h-8" />
              <p className=" text-3xl">37,446</p>
            </div>
          </div>
          <div className=" flex flex-col mr-4 pt-4">
            <p className=" text-right  font-semibold">Total Sales</p>
            <p className=" text-sm text-right text-blue-400">
              +18% from yesterday
            </p>
          </div>
        </div>
        <div className=" bg-[#C9FADB] w-[240px]  h-[150px] rounded-3xl px-3 py-2">
          <div className="flex items-center justify-between pt-3 px-5 gap-4 ">
            <div className=" p-3 bg-[#4AD75E] rounded-full">
              <LuListVideo style={{ color: "white" }} />
            </div>
            <div className=" flex items-center justify-center">
              {/* <MdCurrencyRupee className=" w-8 h-8" /> */}
              <p className=" text-right text-3xl">37,446</p>
            </div>
          </div>
          <div className=" flex flex-col mr-4 pt-4">
            <p className=" text-right  font-semibold">Total Orders</p>
            <p className=" text-sm text-right text-blue-400">
              +33% from yesterday
            </p>
          </div>
        </div>
        <div className=" bg-[#E8DAFA] w-[240px]  h-[150px] rounded-3xl px-3 py-2">
          <div className="flex justify-between items-center pt-3 px-5 gap-4 ">
            <div className=" p-3 bg-[#BD87FC] rounded-full">
              <MdOutlineAccountCircle className="w-5 h-5" style={{ color: "white" }} />
            </div>
            <div className=" flex items-center justify-center">
              {/* <MdCurrencyRupee className=" w-8 h-8" /> */}
              <p className=" text-3xl">100</p>
            </div>
          </div>
          <div className=" flex flex-col mr-4 pt-4">
            <p className=" text-right  font-semibold">New Customers</p>
            <p className=" text-sm text-right text-blue-400">
              +20% from yesterday
            </p>
          </div>
        </div>
        <div className=" bg-[#FBE9C7] w-[240px]  h-[150px] rounded-3xl px-3 py-2">
          <div className="flex items-center pt-3 px-5 gap-4 ">
            <div className=" p-3 bg-[#F19077] rounded-full">
              <PiCoins  style={{ color: "white" }} />
            </div>
            <div className=" flex items-center justify-center">
              <MdCurrencyRupee className=" w-8 h-8" />
              <p className=" text-3xl">37,446</p>
            </div>
          </div>
          <div className=" flex flex-col mr-4 pt-4">
            <p className=" text-right  font-semibold">Total Sales</p>
            <p className=" text-sm text-right text-blue-400">
              +18% from yesterday
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
