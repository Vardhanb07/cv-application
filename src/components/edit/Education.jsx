import { useState } from "react";
import arrowDown from "../../assets/arrow-down.svg"

export default function Education() {
  const [display, setDisplay] = useState("hidden");
  return (
    <div className="bg-gray-400 rounded-md p-2 mt-2 mb-2">
      <div className="flex flex-row p-2">
        <p className="flex-2 font-roboto text-[25px] flex items-center justify-start">
          Education
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
            Title
          </label>
          <input
            type="text"
            id="name"
            placeholder="Whatever"
            className="outline-1 text-[24px] border rounded-md pl-2"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="degree" className="text-[20px]">
            Degree
          </label>
          <input
            type="text"
            id="degree"
            placeholder="Whatever"
            className="outline-1 text-[24px] border rounded-md pl-2"
          />
        </div>
        <div className="flex-1 flex flex-col font-roboto">
          <label htmlFor="grade" className="text-[20px]">
            Grade
          </label>
          <input
            type="text"
            id="grade"
            placeholder="0.0"
            className="outline-1 text-[24px] border rounded-md pl-2"
          />
        </div>
      </form>
    </div>
  );
}
