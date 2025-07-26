import Subedu from "./Subedu.jsx";

export default function Education({ clearState }) {
  return (
    <div className="flex-2">
      <div className="flex justify-center items-center bg-gray-400 mt-2">
        <h1 className="text-[26px] font-roboto">Education</h1>
      </div>
      <Subedu title="Whatever" degree="whatever" grade="0.0" />
    </div>
  );
}
