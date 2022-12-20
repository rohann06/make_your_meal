import { useEffect, useState } from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";
import Card from "./Card";

const HeroSectoin = () => {
  const [heroSection, setHeroSection] = useState([]);

  useEffect(() => {
    getHeroSection();
  }, []);

  const getHeroSection = async () => {
    //Save in local storage
    const check = localStorage.getItem("herosectoin");

    if (check) {
      setHeroSection(JSON.parse(check));
    } else {
      const key = process.env.NEXT_PUBLIC_API_KEY;
      const api = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${key}&number=10&tags=sweets`
      );
      const data = await api.json();

      localStorage.getItem('herosectoin', JSON.stringify(data.recipes));
      setHeroSection(data.recipes);
    }
  };

  return (
    <>
      <div className=" my-[1.5rem]">
        <h1 className=" font-headings text-slate-600 font-bold text-[22px] lg:text-[25px] my-5">
          Christmas recipes 🎁
        </h1>

        <Splide
          options={{
            perPage: 3,
            arrows: false,
            pagination: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {heroSection.map((recipe) => {
            return (
              <SplideSlide key={recipe.id}>
                <Card title={recipe.title} image={recipe.image} />
              </SplideSlide>
            );
          })}
        </Splide>
      </div>
    </>
  );
};

export default HeroSectoin;
