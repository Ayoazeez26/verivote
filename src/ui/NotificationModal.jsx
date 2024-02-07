/* eslint-disable react/prop-types */
import cancelIcon from "../assets/closeIcon.svg";
// import NotificationBar from "./NotificationBar";
function NotificationModal({ toggleIsOpen }) {
  return (
    <div className="absolute left-[-220px] top-[40px] h-fit w-[250px]  rounded-lg border-[1px] border-[#333] bg-white shadow-md">
      <div className="flex items-center justify-between border-b-[1px] border-b-[#f1f1f1] px-7 py-[12px]">
        <h1 className="text-base font-bold leading-6 text-black">
          Notifications
        </h1>
        <button className="cursor-pointer" onClick={() => toggleIsOpen(false)}>
          <img src={cancelIcon} className="h-4 w-4" alt="" />
        </button>
      </div>
      <div className="max-h-[300px] min-h-[140px] overflow-auto">
        <h1 className="py-4 text-center text-sm">
          No notifications a the moment!
        </h1>
      </div>
    </div>
  );
}

export default NotificationModal;
