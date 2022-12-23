import Link from "next/link";
import { useRouter } from "next/router";

const Card = ({ title, image, id }) => {
  const router = useRouter();

  return (
    <div className=" relative overflow-hidden rounded-3xl lg:h-[18rem] lg:w-auto ">
      <Link href={`/details/${id}`}>
          <h1 className=" text-slate-50 font-normal_text absolute z-10 bottom-0 w-full h-[20%] text-center font-medium text-sm flex justify-center align-middle">
            {title}
          </h1>
          <img
            src={image}
            alt="recipe"
            className=" rounded-3xl w-[100%] h-[100%] object-cover absolute left-0"
          />
          <div className=" absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-800"></div>
      </Link>
    </div>
  );
};

export default Card;
