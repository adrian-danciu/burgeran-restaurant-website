import { foodDb } from "../utils/foodDb";
import { useState } from "react";

const Menu = () => {
  return (
    <section className="flex flex-col justify-center items-center p-5">
      <div className="flex flex-row justify-center items-center gap-2 bg-background w-full lg:h-[30vh]">
        <h1 className="font-subtitle lg:text-5xl text-2xl text-headline">
          Menu
        </h1>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 lg:w-[80%] w-full  lg:p-10 p-5">
        <div className="grid md:grid-cols-2 grid-cols-1 items-start justify-center gap-10 w-full bg-cards rounded-xl p-5">
          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="font-subtitle text-background text-2xl">
              Our "filthy" burgers
            </h3>

            {foodDb.map((food) => {
              if (food.type === "burger") {
                return (
                  <div className="flex flex-col justify-center items-center gap-2 w-full bg-background p-5 rounded-xl">
                    <div className="flex flex-row justify-between items-center gap-2 w-full">
                      <img src={food.image} className="w-10 h-10" />
                      <p className="font-subtitle text-primary text-2xl">
                        {food.name}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-3 w-full">
                      <p className="font-text text-base text-headline">
                        {food.description}
                      </p>
                      <p className="font-subtitle text-headline text-2xl">
                        {food.price}$
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>

          {/* <div className="bg-primary h-[700px] w-[2px] ml-[100px]"></div> */}

          <div className="flex flex-col justify-center items-center gap-5">
            <h3 className="font-subtitle text-background text-2xl">
              Our golden softies
            </h3>
            {foodDb.map((food) => {
              if (food.type === "toast") {
                return (
                  <div className="flex flex-col justify-center items-center gap-2 w-full bg-background p-5 rounded-xl">
                    <div className="flex flex-row justify-between items-center gap-2 w-full">
                      <img src={food.image} className="w-10 h-10" />
                      <p className="font-subtitle text-primary text-2xl">
                        {food.name}
                      </p>
                    </div>
                    <div className="flex flex-row justify-between items-center gap-3 w-full">
                      <p className="font-text text-base text-headline">
                        {food.description}
                      </p>
                      <p className="font-subtitle text-headline text-2xl">
                        {food.price}$
                      </p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;
