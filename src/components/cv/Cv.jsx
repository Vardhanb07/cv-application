import Header from "./Header.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function Cv({
  introductionState,
  educationState,
  experienceState,
}) {
  return (
    <div className="flex-1 flex flex-col">
      <Header introductionState={introductionState} />
      <Education educationState={educationState} />
      <Experience experienceState={experienceState} />
    </div>
  );
}
