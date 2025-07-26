import Introduction from "./Introduction.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx"

export default function Edit({ clearState }) {
  return (
    <div className="flex-1">
      <div className="flex flex-row gap-5 ">
        <button className="flex-1 text-[20px] cursor-pointer font-roboto bg-[#4bbbe8] rounded-sm p-2 font-medium">
          LOAD
        </button>
        <button
          className="flex-1 text-[20px] cursor-pointer font-roboto bg-[#4bbbe8] rounded-sm p-2 font-medium"
          onClick={() => {
            clearState[0] ? clearState[1](false) : clearState[1](true);
          }}
        >
          CLEAR
        </button>
      </div>
      <Introduction />
      <Education />
      <Experience />
    </div>
  );
}
