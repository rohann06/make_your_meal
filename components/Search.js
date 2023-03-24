import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/router";


const Search = () => {
  const [input, setInput] = useState("");
  const router = useRouter();

  const submitHandler = (e) => {
    e.preventDefault();
    router.push(`/searched/${input}`);
    setInput('');
  };

  return (
    <form className="  my-10">
      <div className=" relative flex justify-center items-center">
        <FaSearch className=" text-slate-50 lg:text-[1.5rem] text-[1rem] absolute lg:left-52 left-3" />
        <input
          onChange={(e) => setInput(e.target.value)}
          type="text"
          required
          autoComplete="on"
          placeholder="Search recipes"
          value={input}
          className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-slate-50 text-[15px]  font-normal_text border-none lg:py-[0.7rem] py-[0.4rem] px-[4rem] rounded-l-full outline-none lg:w-[60%] w-[100%] "
        />
        <button onClick={submitHandler} type='submit' className=" text-[18px] text-slate-50 font-semibold border-none bg-slate-600 hover:bg-slate-700  rounded-r-full lg:py-[0.55rem] py-[0.24rem] lg:px-[2rem] px-[1rem]">Search</button>
      </div>
    </form>
  );
};

export default Search;
