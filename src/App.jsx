import { useState } from "react";
import Cv from "./components/cv/Cv.jsx";
import Edit from "./components/edit/Edit.jsx";

export default function App() {
  const [clear, setClear] = useState(false);
  return (
    <div className="flex flex-row h-screen p-3 gap-6">
      <Edit clearState={[clear, setClear]} />
      <Cv clearState={[clear, setClear]} />
    </div>
  );
}
