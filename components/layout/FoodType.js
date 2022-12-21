import Link from "next/link";
import { useRouter } from "next/router";
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
const FoodType = () => {
  const router = useRouter();

  return (
    <div className=" flex justify-center gap-20 ">
      <button
        onClick={() => {
          router.push("/cuisine/italian");
        }}
      >
        <div className=" text-slate-50 bg-slate-700 rounded-full text-xl p-4 scale-100 hover:scale-105 hover:bg-slate-800">
          <FaPizzaSlice />
        </div>
        <p className=" text-center text-xs">Italian</p>
      </button>

      <button
        onClick={() => {
          router.push("/cuisine/american");
        }}
      >
        <div className=" text-slate-50 bg-slate-700 rounded-full text-xl p-4 scale-100 hover:scale-105 hover:bg-slate-800">
          <FaHamburger />
        </div>
        <p className=" text-center text-xs">American</p>
      </button>

      <button
        onClick={() => {
          router.push("/cuisine/thai");
        }}
      >
        <div className=" text-slate-50 bg-slate-700 rounded-full text-xl p-4 scale-100 hover:scale-105 hover:bg-slate-800">
          <GiNoodles />
        </div>
        <p className=" text-center text-xs">Thai</p>
      </button>

      <button
        onClick={() => {
          router.push("/cuisine/chinese");
        }}
      >
        <div className=" text-slate-50 bg-slate-700 rounded-full text-xl p-4 scale-100 hover:scale-105 hover:bg-slate-800">
          <GiChopsticks />
        </div>
        <p className=" text-center text-xs">Chinese</p>
      </button>
    </div>
  );
};

export default FoodType;
