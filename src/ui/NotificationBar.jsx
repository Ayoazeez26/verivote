/* eslint-disable react/prop-types */
function NotificationBar({ message }) {
  return (
    <div className="border-b-[1px] border-b-[#f1f1f1] px-6 py-3 text-sm font-normal leading-[22px]">
      {message}
    </div>
  );
}

export default NotificationBar;
