import Header from "./Header.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function Cv({ clearState, introductionState, loadState, educationState, experienceState }) {
  return (
    <div className="flex-1 flex flex-col">
      <Header clearState={clearState} introductionState={introductionState} loadState={loadState} />
      <Education clearState={clearState} loadState={loadState} educationState={educationState} />
      <Experience clearState={clearState} experienceState={experienceState} />
    </div>
  );
}
