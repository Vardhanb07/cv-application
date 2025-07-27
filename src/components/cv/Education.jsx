import Subedu from "./Subedu.jsx";

export default function Education({ clearState, loadState, educationState }) {
  return (
    <div className="flex-2">
      <div className="flex justify-center items-center bg-gray-400 mt-2">
        <h1 className="text-[26px] font-roboto">Education</h1>
      </div>
      <Subedu
        title={educationState[0].title}
        degree={educationState[0].degree}
        grade={educationState[0].grade}
      />
    </div>
  );
}
