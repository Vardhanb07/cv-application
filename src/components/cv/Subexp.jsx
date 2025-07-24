export default function Subedu({ title, position, description }) {
  return (
    <div>
      <h2 className="font-roboto font-medium text-[26px]">{title}</h2>
      <h3 className="font-roboto font-normal text-[23px]">{position}</h3>
      <p className="font-roboto text-[18px]">{description}</p>
    </div>
  );
}
