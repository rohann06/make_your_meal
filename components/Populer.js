import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";



const HeroSectoin = () => {
  const [populer, setPopuler] = useState([]);

  useEffect(() => {
    getHeroSection();
  }, []);

  const getHeroSection = async () => {
    //Save in local storage
    const check = localStorage.getItem("populer");

    if (check) {
      setPopuler(JSON.parse(check));
    } else {
      const key = process.env.NEXT_PUBLIC_API_KEY3;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=15`
      );
      const data = await api.json();

      localStorage.setItem('populer', JSON.stringify(data.recipes));
      setPopuler(data.recipes);
    }
  };

  return (
    <>
      <div className=" mt-[2rem] mb-10">
        <h1 className=" font-headings text-slate-600 font-normal text-[22px] lg:text-[25px] my-5">
          Populer recipes 🍴
        </h1>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "7rem",
          }}
        >
          {populer.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card title={recipe.title} image={recipe.image} id={recipe.id}/>
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default HeroSectoin;
