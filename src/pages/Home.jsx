import { useState } from "react";
import Front from "./Front";
import Back from "./Back";
import National from "./National";
import Business from "./Business";
import International from "./International";
import Sports from "./Sports";
import CryptoPrices from "../components/CryptoPrices";

const Home = () => {

    const [category, setCategory] = useState("Front page");

  const categories = [
    "Front page",
    "Back page",
    "National",
    "Business",
    "International",
    "Sport",
  ];

  return (
    <>
      <div className="mt-2 flex justify-center items-center gap-1">
        {categories.map((item, index) => (
          <button onClick={()=>setCategory(item)} key={index} className={`uppercase text-sm font-semibold ${category === item && "bg-black text-white"} px-2 pt-1`}>
            {item}
          </button>
        ))}
      </div>

      <div className="flex mt-20">
        <div className="w-[70%]">
          {category === categories[0] && <Front />}
          {category === categories[1] && <Back />}
          {category === categories[2] && <National />}
          {category === categories[3] && <Business />}
          {category === categories[4] && <International />}
          {category === categories[5] && <Sports />}
        </div>
        <div className="w-[30%] bg-zinc-400 h-[80vh]">
          <CryptoPrices/>
        </div>
      </div>
      
    </>
  );
};

export default Home;
