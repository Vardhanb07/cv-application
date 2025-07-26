import Subexp from "./Subexp.jsx"

export default function Experience({ clearState }) {
  return (
    <div className="flex-2">
      <div className="flex justify-center items-center mt-2 bg-gray-400 font-roboto">
        <h1 className="text-[26px]">Experience</h1>
      </div>
      <Subexp title="whatever" position="whatever" description="whatever"/>
    </div>
  )
}