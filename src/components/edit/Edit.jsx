import Introduction from "./Introduction.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function Edit({
  introductionState,
  educationState,
  experienceState,
}) {
  return (
    <div className="flex-1">
      <div className="flex flex-row gap-5 ">
        <button
          className="flex-1 text-[20px] cursor-pointer font-roboto bg-[#4bbbe8] rounded-sm p-2 font-medium"
          onClick={() => {
            introductionState[1]({
              name: "",
              mail: "",
              number: "",
              location: "",
            });
            educationState[1]({
              title: "",
              degree: "",
              grade: "",
            });
            experienceState[1]({
              title: "",
              position: "",
              description: "",
            });
          }}
        >
          CLEAR
        </button>
        <button
          className="flex-1 text-[20px] cursor-pointer font-roboto bg-[#4bbbe8] rounded-sm p-2 font-medium"
          onClick={() => {
            introductionState[1]({
              name: "John Doe",
              mail: "Whatever@mail.com",
              number: "123456789",
              location: "Whatever",
            });
            educationState[1]({
              title: "Whatever",
              degree: "Whatever",
              grade: "0.0",
            });
            experienceState[1]({
              title: "Whatever",
              position: "Whatever",
              description: "Whatever",
            });
          }}
        >
          LOAD
        </button>
      </div>
      <Introduction introductionState={introductionState} />
      <Education educationState={educationState} />
      <Experience experienceState={experienceState} />
    </div>
  );
}
