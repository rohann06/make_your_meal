import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../components/Card";

const Cuisine = () => {
  const [cuisines, setCuisines] = useState([]);
  const router = useRouter();
  const { cuisine } = router.query;

  const getCuisine = async () => {
    const key = process.env.NEXT_PUBLIC_API_KEY2;
    const api = await fetch(
      `https://api.spoonacular.com/recipes/complexSearch?apiKey=${key}&number=12&cuisine=${cuisine}`
    );

    const data = await api.json();
    setCuisines(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    getCuisine();
  }, [cuisine]);

  return (
    <div className=" my-5">
      <div className=" grid gap-10 grid-cols-4">
        {cuisines.map((result) => (
          <div key={result.id}>
            <Card title={result.title} image={result.image} id={result.id}/>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cuisine;
