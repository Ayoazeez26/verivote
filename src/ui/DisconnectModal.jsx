/* eslint-disable react/prop-types */
import { disconnect } from "get-starknet";
import avatar from "../assets/avatar.svg";
import { useConnectWallet } from "../context/ConnectContext";
import { disconnectWallet } from "../api/ConnectAPI";
import closeIcon from "../assets/closeIcon.svg";

function DisconnectModal({ toggleIsOpen }) {
  const { address, dispatch } = useConnectWallet();
  async function onDisconnect() {
    await disconnectWallet(dispatch, disconnect);
  }
  return (
    <div
      className="absolute left-[-150px] top-[40px] h-[201px] w-[250px] rounded-lg border-[1px] border-[#333]
      bg-white shadow-md
        "
    >
      <div className="p-4 pb-[52px]">
        <div className="mb-4 flex items-center justify-between">
          <h3 className=" text-sm font-semibold leading-5">My account</h3>
          <button onClick={() => toggleIsOpen(false)}>
            <img src={closeIcon} alt="" />
          </button>
        </div>
        <div className="flex items-center gap-x-3 rounded border-[1px] border-solid border-[#DFDFE0] px-1 py-[7px]">
          <img src={avatar} alt="" />
          <h2>{address.slice(0, 14).concat("...")}</h2>
        </div>
      </div>
      <button
        onClick={onDisconnect}
        className="flex w-full items-center justify-center border-t-[1px] border-t-[#DFDFE0] py-3 text-center text-sm font-semibold
text-[#FD0000]"
      >
        Disconnect Account
      </button>
    </div>
  );
}

export default DisconnectModal;
