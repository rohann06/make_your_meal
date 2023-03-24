import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Searched = () => {
  const router = useRouter();
  const { sear } = router.query;

  const [results, setResults] = useState([]);

  const getSearch = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY3;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=20&query=${sear}`
    );
    const data = await api.json();
    setResults(data.results);
  };

  useEffect(() => {
    getSearch();
  }, [sear]);

  return (
    <div className=" my-5">
      <h1 className=" font-headings text-slate-600 font-bold lg:text-[30px] my-5">{sear} recipes 🍽️ : </h1>

      <div className=" grid lg:gap-10 gap-5 lg:grid-cols-4 grid-cols-2">
        {results.map((result) => (
          <div key={result.id}>
            <Card title={result.title} image={result.image} id={result.id}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searched;
