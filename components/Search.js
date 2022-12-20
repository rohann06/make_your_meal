import { FaSearch } from "react-icons/fa";
import { useState } from "react";

const Search = () => {

    const[input, setInput]  = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
    }

  return (
    <form onSubmit={submitHandler} className=" relative mx-60 my-10">
      <div className=" w-full relative">
        <FaSearch  className=" text-slate-50 font-semibold text-2xl absolute top-3 left-3"/>
        <input
        onChange={(e) => setInput(e.target.value)}
          type="text"
          value={input}
          className="bg-gradient-to-r from-slate-700 via-slate-800 to-slate-900 text-slate-50 text-xl font-bold font-normal_text border-none py-[0.7rem] px-[4rem] w-full rounded-full outline-none"
        />
      </div>
    </form>
  );
};

export default Search;
