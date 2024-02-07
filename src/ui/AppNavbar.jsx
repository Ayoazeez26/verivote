/* eslint-disable react/prop-types */
import { useState } from "react";
import Logo from "./Logo";
import WalletConnector from "./WalletConnector";
import notificationIcon from "../assets/notificationsIcon.svg";
import NotificationModal from "./NotificationModal";
import DisconnectModal from "./DisconnectModal";

function AppNavbar({ theme }) {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showDisconnect, setShowDisconnect] = useState(false);
  return (
    <nav className="flex w-full items-center justify-between px-[64px] py-4">
      <Logo theme={theme} />
      <div className="relative flex items-center gap-x-[40px]">
        {showNotifications && (
          <NotificationModal toggleIsOpen={setShowNotifications} />
        )}
        {showDisconnect && <DisconnectModal toggleIsOpen={setShowDisconnect} />}
        <button
          onClick={() => {
            setShowDisconnect(false);
            setShowNotifications((show) => !show);
          }}
        >
          <img src={notificationIcon} alt="" />
        </button>
        <WalletConnector
          setShowDisconnect={setShowDisconnect}
          setShowNotifications={setShowNotifications}
        />
      </div>
    </nav>
  );
}

export default AppNavbar;
