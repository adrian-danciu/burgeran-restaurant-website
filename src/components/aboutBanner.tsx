import aboutBurger from "../assets/img/about_burger.png";
import burger3 from "../assets/menu/burger-2.png";
import sand2 from "../assets/menu/sand-2.png";
import { Link } from "react-router-dom";

const AboutBanner = () => {
  return (
    <section className="flex lg:flex-row flex-col-reverse lg:justify-center justify-center items-center w-full mt-40 p-10">
      <div className="flex flex-col w-full justify-start items-center gap-5">
        <p className="font-subtitle text-2xl text-primary"> About us</p>
        <h1 className="font-title text-4xl w-[70%] text-center">
          The best burgers & toasts are made with love.
        </h1>
        <p className="w-[75%] text-lg font-text text-background text-center">
          It's the perfect dining experience if you want a juicy burger or
          refined toasts made only with carefully chosen ingredients
        </p>
        <div className="flex flex-row justify-center items-center gap-10">
          <div className="h-[200px] flex flex-col w-full justify-center items-start border-[2px] border-primary p-5 rounded-xl gap-2">
            <img src={burger3} className="h-20 w-20" />
            <div className="flex flex-col gap-2">
              <h1 className="font-subtitle text-primary text-xl">Burgers</h1>
              <p className="font-text text-background text-sm">
                Juicy, tasty and very messy.
              </p>
            </div>
          </div>
          <div className="h-[200px] flex flex-col w-full justify-center items-start border-[2px] border-primary p-5 rounded-xl gap-2">
            <img src={sand2} className="h-20 w-20" />
            <div className="flex flex-col">
              <h1 className="font-subtitle text-primary text-xl">Toast</h1>
              <p className="font-text text-background text-sm">
                Refined, full of taste and soft.
              </p>
            </div>
          </div>
        </div>
        <Link to="/about">
          <button className="md:p-5 lg:w-60 btn border-white border-[1px] hover:border-primary hover:text-primary hover:bg-white">
            Learn More
          </button>
        </Link>
      </div>
      <img src={aboutBurger} className="lg:h-80 h-20 lg:rotate-[25deg]" />
    </section>
  );
};

export default AboutBanner;
