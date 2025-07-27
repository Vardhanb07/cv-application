import call from "../../assets/call.svg";
import location from "../../assets/location.svg";
import mail from "../../assets/mail.svg";

export default function Header({ clearState, introductionState, loadState }) {
  if (clearState[0]) {
    introductionState[1]({
      name: "",
      mail: "",
      number: "",
      location: "",
    });
    clearState[1](false);
  }

  if (loadState[0]) {
    introductionState[1]({
      name: "John Doe",
      mail: "Whatever@mail.com",
      number: "123456789",
      location: "whatever",
    });
    loadState[1](false);
  }

  return (
    <div className="flex-1 flex flex-col bg-[#28b9dd]">
      <h1 className="flex-1 flex justify-center items-center text-[40px] font-roboto">
        {introductionState[0].name}
      </h1>
      <div className="flex-1 flex flex-row">
        <div className="flex-1 flex flex-row justify-center items-center">
          <img src={mail} alt="mail" height="40" width="40" />
          <h2 className="text-[26px] font-roboto">
            {introductionState[0].mail}
          </h2>
        </div>
        <div className="flex-1 flex flex-row justify-center items-center">
          <img src={call} alt="call" height="40" width="40" />
          <h2 className="text-[26px] font-roboto">
            {introductionState[0].number}
          </h2>
        </div>
        <div className="flex-1 flex flex-row justify-center items-center">
          <img src={location} alt="location" height="40" width="40" />
          <h2 className="text-[26px] font-roboto">
            {introductionState[0].location}
          </h2>
        </div>
      </div>
    </div>
  );
}
