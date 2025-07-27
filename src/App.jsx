import { useState } from "react";
import Cv from "./components/cv/Cv.jsx";
import Edit from "./components/edit/Edit.jsx";

export default function App() {
  const [clear, setClear] = useState(false);
  const [introduction, setIntroduction] = useState({
    name: "John Doe",
    mail: "Whatever@mail.com",
    number: "123456789",
    location: "whatever",
  });
  const [load, setLoad] = useState(false);

  return (
    <div className="flex flex-row h-screen p-3 gap-6">
      <Edit
        clearState={[clear, setClear]}
        introductionState={[introduction, setIntroduction]}
        loadState={[load, setLoad]}
      />
      <Cv
        clearState={[clear, setClear]}
        introductionState={[introduction, setIntroduction]}
        loadState={[load, setLoad]}
      />
    </div>
  );
}
