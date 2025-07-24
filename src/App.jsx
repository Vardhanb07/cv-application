import Cv from "./components/cv/Cv.jsx";
import Edit from "./components/edit/Edit.jsx";

export default function App() {
  return (
    <div className="flex flex-row h-screen p-3">
      <Edit />
      <Cv />
    </div>
  );
}