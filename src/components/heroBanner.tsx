import heroBurger from "../assets/img/hero-burger.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="bg-background h-full flex md:flex-row flex-col-reverse xl:justify-around items-center justify-center px-10 py-10">
      <img src={heroBurger} className="lg::w-[30%] w-50" />
      <div className="flex flex-col justify-center items-center lg:w-[60%] w-full text-left lg:gap-5">
        <h1 className="font-subtitle md:text-2xl text-xl md:text-center text-left text-primary">
          Welcome to Burgeran
        </h1>
        <p className="md:text-4xl text-xl text-center lg:w-[60%] w-full font-subtitle text-white">
          Enjoy the best burgers & toasts in town
        </p>
        <button className="lg:w-80 md:p-5 btn border-black border-[1px] hover:border-primary hover:text-primary hover:bg-background">
          <Link to="/menu">See our menu</Link>
        </button>
      </div>
    </div>
  );
};

export default Hero;
