import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";


const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/searched/${input}`);
  };

  return (
    <form className=" relative mx-60 my-10">
      <div className=" w-full relative flex">
        <FaSearch className=" text-slate-50 font-semibold text-2xl absolute top-3 left-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          required
          autoComplete="on"
          placeholder="Search recipes"
          value={input}
          className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-slate-50 text-[15PX] font-normal_text border-none py-[0.7rem] px-[4rem] w-full rounded-full outline-none"
        />
        <button onClick={submitHandler} type='submit' className=" text-lg text-slate-50 font-semibold absolute  right-0 border-none bg-slate-600 hover:bg-slate-700  rounded-tr-full rounded-br-full py-[0.55rem]  px-[2rem]">Search</button>
      </div>
    </form>
  );
};

export default Search;
