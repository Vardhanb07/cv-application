export default function Subedu({ title, degree, grade }) {
  return (
    <div className="flex flex-col">
      <h2 className="font-roboto text-[24px] font-medium mt-1">{title}</h2>
      <div>
        <p className="font-roboto text-[18px]">Degree: {degree}</p>
        <p className="font-roboto text-[18px]">Grade: {grade}</p>
      </div>
    </div>
  );
}
