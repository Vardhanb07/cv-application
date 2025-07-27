import { useState } from "react";
import arrowDown from "../../assets/arrow-down.svg";

export default function Education() {
  const [display, setDisplay] = useState("hidden");
  return (
    <div className="bg-gray-400 rounded-md p-2 mt-2 mb-2">
      <div className="flex flex-row p-2">
        <p className="flex-2 font-roboto text-[25px] flex items-center justify-start">
          Experience
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
          <label htmlFor="title" className="text-[20px]">
            Title
          </label>
          <input
            type="text"
            id="title"
            placeholder="Whatever"
            className="text-[24px] outline-1 border rounded-md pl-2"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="position" className="text-[20px]">
            Position
          </label>
          <input
            type="position"
            id="text"
            placeholder="Whatever"
            className="outline-1 text-[24px] border pl-2 rounded-md"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="description" className="text-[20px]">
            Description
          </label>
          <textarea
            name="description"
            id="description"
            className="border rounded-md outline-1 p-2 text-[24px]"
          ></textarea>
        </div>
      </form>
    </div>
  );
}
