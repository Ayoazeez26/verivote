/* eslint-disable react/prop-types */
import succeededIcon from "../assets/succeedIcon.svg";
import cancelledIcon from "../assets/cancelledIcon.svg";
import pendingIcon from "../assets/pendingIcon.svg";
import ongoingIcon from "../assets/ongoingIcon.svg";
import executedIcon from "../assets/executedIcon.svg";

function StateBadge({ status }) {
  const states = [
    {
      state: "Succeeded",
      primaryColor: "rgb(0, 166, 0)",
      secondaryColor: "#E0FFEA",
      icon: succeededIcon,
    },
    {
      state: "Cancelled",
      primaryColor: "#FF0000",
      secondaryColor: "#FFF2F2",
      icon: cancelledIcon,
    },
    {
      state: "Ongoing",
      primaryColor: "#0075FF",
      secondaryColor: "#D9EAFF",
      icon: ongoingIcon,
    },
    {
      state: "Executed",
      primaryColor: "#9747FF",
      secondaryColor: "#F9F5FF",
      icon: executedIcon,
    },
    {
      state: "Pending",
      primaryColor: "#FF9600",
      secondaryColor: "#FFF7E8",
      icon: pendingIcon,
    },
  ];
  return (
    <>
      {states
        .filter((state) => state.state.toLowerCase() === status.toLowerCase())
        .map((state, i) => (
          <div
            key={i}
            style={{
              backgroundColor: state.secondaryColor,
              borderColor: state.primaryColor,
              color: state.primaryColor,
            }}
            className={`p-[10px] h-[37px] font-normal rounded-[4px] text-sm border-[1px] border-solid flex items-center gap-x-1 `}
          >
            <img src={state.icon} alt="" />
            <span>{state.state}</span>
          </div>
        ))}
    </>
  );
}

export default StateBadge;
