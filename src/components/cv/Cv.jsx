import Header from "./Header.jsx";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

export default function Cv() {
  return (
    <div className="flex-1 flex flex-col">
      <Header />
      <Education />
      <Experience />
    </div>
  );
}
