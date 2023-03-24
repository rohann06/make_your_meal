import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {IoMdArrowDroprightCircle} from 'react-icons/io'

const Details = () => {
  const [details, setDetails] = useState(null);
  const router = useRouter();
  const { deta } = router.query;
  const headers = {"Content-Type": "application/json",
}

  const fetchData = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY3;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/${deta}/information?apiKey=${key}`, {headers}
    );
    const data = await api.json();
    setDetails(data);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, [deta]);


  return (
    <div className=" flex justify-center  lg:gap-20 gap-6 lg:mt-20 mt-14 mb-7">
      <div>
        <div>
          <h1 className=" lg:text-[40px] text-[20px] text-slate-600 font-extrabold text-left font-nav_fonts">
            {details && details.title}:
          </h1>
          <img
            src={details && details.image}
            alt="images"
            className=" mt-5 lg:h-72 rounded-3xl shadow-xl "
          />
        </div>

        <div>
          <h1 className=" font-semibold font-nav_fonts text-slate-500 text-[25px] lg:text-3xl mb-2 mt-10">
            Ingredients:
          </h1> 
          <ul className=" mt-5 lg:text-base text-xs">
            {details && details.extendedIngredients.map((ingredient) => 
              <li className=" text-slate-500 flex font-medium font-normal_text my-[10px]" key={ingredient.id}><IoMdArrowDroprightCircle className=" mt-0.5"/> {ingredient.original} </li>
            )}
          </ul>
        </div>
      </div>

      <div>
        <h1 className=" font-semibold font-nav_fonts text-slate-500  text-[25px] lg:text-3xl mb-2">
          Instruction:
        </h1>
        <div className=" max-w-2xl font-normal_text lg:text-[19px] text-[13px] ">
          <h1
            className=" font-semibold"
            dangerouslySetInnerHTML={{ __html: details && details.summary }}
          ></h1>
          <div>
            <h1 className=" font-semibold font-nav_fonts text-slate-500 text-[25px] lg:text-3xl mt-7 mb-2">
              Instructions:
            </h1>
            <h1
              className=" text-slate-700"
              dangerouslySetInnerHTML={{ __html:details && details.instructions }}
            ></h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
