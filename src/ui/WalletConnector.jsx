/* eslint-disable react/prop-types */
import { useConnectWallet } from "../context/ConnectContext";
import { connectWallet, disconnectWallet } from "../api/ConnectAPI";
import { connect, disconnect } from "get-starknet";
import SpinnerMini from "./SpinnerMini";
import { useState } from "react";
import argent from "../assets/argentLogo.svg";
import { useNavigate } from "react-router-dom";
import walletIcon from "../assets/walletIcon.svg";
import { IoIosLogOut } from "react-icons/io";

function WalletConnector({ setShowDisconnect, setShowNotifications }) {
  const { dispatch, address, connection, loading } = useConnectWallet();
  const [displayAddress, setDisplayAddress] = useState(true);
  const navigate = useNavigate();

  async function onConnect() {
    const response = await connectWallet(dispatch, connect);
    if (response) {
      navigate("app");
    }
    return;
  }

  async function onDisconnect() {
    await disconnectWallet(dispatch, disconnect);
  }

  return (
    <>
      {!connection?.isConnected ? (
        <button
          className=" flex items-center justify-center gap-x-2 rounded border-[2px] border-solid border-[#0075FF] bg-[#E5EEFF] px-2 py-[12px] text-center text-base  font-bold uppercase text-darkPrimary disabled:cursor-not-allowed"
          onClick={onConnect}
          disabled={loading}
        >
          {loading ? (
            <SpinnerMini />
          ) : (
            <>
              <span>Connect wallet</span>
              <img src={walletIcon} alt="" />
            </>
          )}
        </button>
      ) : (
        <button
          onClick={() => {
            setShowNotifications(() => false);
            setShowDisconnect((show) => !show);
          }}
        >
          <IoIosLogOut size={"34"} />
        </button>
      )}
    </>
  );
}

export default WalletConnector;

/* <button
className=" flex items-center gap-x-2 w-[200px] justify-center rounded text-darkPrimary bg-[#E5EEFF] px-2 py-[12px] text-center text-base font-bold uppercase  disabled:cursor-not-allowed border-[#0075FF] border-[2px] border-solid"
onMouseEnter={() => setDisplayAddress(false)}
onMouseLeave={() => setDisplayAddress(true)}
onClick={onDisconnect}
>
{!displayAddress ? (
  loading ? (
    <SpinnerMini />
  ) : (
    "Disconnect Wallet"
  )
) : (
  <>
    <img src={argent} className="h-[24px] w-[24px]" alt="" />
    <span>{address.slice(0, 10).concat("...")}</span>
  </>
)}
</button> */
