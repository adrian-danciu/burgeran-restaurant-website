import heroBurger from "../assets/img/hero-burger.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="hero-bg h-[70vh] flex xl:flex-row flex-col-reverse xl:justify-around items-center justify-center px-10 py-10">
      <img src={heroBurger} className="xl:w-[30%] w-50" />
      <div className="flex flex-col justify-center items-center lg:w-[60%] w-full text-left lg:gap-5">
        <h1 className="font-subtitle lg:text-2xl text-left text-primary">
          Welcome to Burgeran
        </h1>
        <p className="lg:text-5xl text-xl text-center lg:w-[60%] w-full font-subtitle text-white">
          Enjoy the best burgers & toasts in town
        </p>
        <button className="">
          <Link to="/menu">See our menu</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
