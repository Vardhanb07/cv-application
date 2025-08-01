import { useState } from "react";
import Cv from "./components/cv/Cv.jsx";
import Edit from "./components/edit/Edit.jsx";

export default function App() {
  const [introduction, setIntroduction] = useState({
    name: "John Doe",
    mail: "Whatever@mail.com",
    number: "123456789",
    location: "Whatever",
  });

  const [education, setEducation] = useState({
    title: "Whatever",
    degree: "Whatever",
    grade: "0.0",
  });

  const [experience, setExperience] = useState({
    title: "Whatever",
    position: "Whatever",
    description: "Whatever",
  });

  return (
    <div className="flex flex-row h-screen p-3 gap-3">
      <Edit
        introductionState={[introduction, setIntroduction]}
        educationState={[education, setEducation]}
        experienceState={[experience, setExperience]}
      />
      <Cv
        introductionState={[introduction, setIntroduction]}
        educationState={[education, setEducation]}
        experienceState={[experience, setExperience]}
      />
    </div>
  );
}
