import { useState } from "react";
import arrowDown from "../../assets/arrow-down.svg";

export default function Introduction() {
  const [display, setDisplay] = useState("hidden");
  return (
    <div className="bg-gray-400 rounded-md p-2 mt-2 mb-2">
      <div className="flex flex-row p-2">
        <p className="flex-2 font-roboto text-[25px] flex items-center justify-start">
          Introduction
        </p>
        <img
          src={arrowDown}
          alt="arrow-down"
          className="flex-1 h-[40px] w-[40px] cursor-pointer"
          onClick={() => {
            display === "flex" ? setDisplay("hidden") : setDisplay("flex");
          }}
        />
      </div>
      <form className={"flex-col m-2 gap-2 " + display}>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="name" className="text-[20px]">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="outline-1 text-[24px] border rounded-md pl-2"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="mail" className="text-[20px]">
            Mail
          </label>
          <input
            type="email"
            id="mail"
            placeholder="Whatever@mail.com"
            className="outline-1 text-[24px] border rounded-md pl-2"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="location" className="text-[20px]">
            Location
          </label>
          <input
            type="text"
            id="location"
            placeholder="whatever"
            className="outline-1 text-[24px] border rounded-md pl-2"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="number" className="text-[20px]">
            Number
          </label>
          <input type="tel" id="number" placeholder="123456789" className="outline-1 text-[24px] border rounded-md pl-2"/>
        </div>
      </form>
    </div>
  );
}
