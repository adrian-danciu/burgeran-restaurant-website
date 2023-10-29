import LocationCommponent from "../components/locationComponent";
import logo from "../assets/logo.png";
import bolt from "../assets/icons/bolt.png";
import tazz from "../assets/icons/tazz.png";
import glovo from "../assets/icons/glovo.png";
import tiktok from "../assets/icons/tiktok.svg";
import facebook from "../assets/icons/facebook.svg";
import instagram from "../assets/icons/instagram.svg";

const Footer = () => {
  return (
    <section className="w-full bg-primary flex justify-center items-center p-10 mt-20 ">
      <div className="w-full flex lg:flex-row lg:justify-around items-center p-5 flex-col justify-center lg:gap-0 gap-10">
        <div className="flex flex-col justify-center items-center gap-5">
          <div className="flex lg:flex-row flex-col justify-center items-center gap-2">
            <img src={logo} className="w-20 h-20" />
            <p className="font-subtitle text-background text-2xl">Burgerar</p>
          </div>
          <div className="flex flex-col justify-center items-center gap-2 font-subtitle text-background text-lg">
            <p>Call us at: 1293732193127</p>
            <p>Open: 10:00 - 23:00</p>
            <p>Address: 1234 Street, City</p>
          </div>
        </div>

        <LocationCommponent />

        <div className="flex flex-col justify-center items-center gap-10">
          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="font-subtitle text-xl">You can order also here:</h3>
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                className="w-10 h-10 rounded-xl cursor-pointer"
                src={bolt}
                alt="bolt"
              />
              <img
                className="w-10 h-10 rounded-xl cursor-pointer"
                src={tazz}
                alt="tazz"
              />
              <img
                className="w-10 h-10 rounded-xl cursor-pointer"
                src={glovo}
                alt="glovo"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-3">
            <h3 className="font-subtitle text-xl">Follow us on:</h3>
            <div className="flex flex-row justify-center items-center gap-5">
              <img
                className="w-10 h-10 rounded-xl cursor-pointer"
                src={tiktok}
                alt="tiktok"
              />
              <img
                className="w-10 h-10 rounded-xl cursor-pointer"
                src={facebook}
                alt="facebook"
              />
              <img
                className="w-10 h-10 rounded-xl cursor-pointer"
                src={instagram}
                alt="instagram"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
