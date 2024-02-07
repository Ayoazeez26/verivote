/* eslint-disable react/prop-types */
import { useState } from "react";
import FormControl from "../../ui/FormControl";
import cancelIcon from "./../../assets/closeIcon.svg";
import { useConnectWallet } from "../../context/ConnectContext";

function CreateProposalModal({ toggleIsOpen }) {
  const { address, account } = useConnectWallet();
  const [createdBy] = useState(address.slice(0, 30).concat("..."));
  console.log(createdBy);
  console.log(account);
  return (
    <div className="absolute inset-0 flex justify-center bg-overlay pt-[50px] backdrop-blur-sm ">
      <form className="h-fit w-[540px] rounded-lg border-[1px] border-[#b7b7b7] bg-white shadow-md ">
        <div className="flex items-center justify-between border-b-[1px] border-b-[#B7B7B7] px-7 py-[17px]">
          <h1 className="text-xl font-bold leading-6 text-black">
            Create Proposal
          </h1>
          <button
            className="cursor-pointer"
            onClick={() => toggleIsOpen(false)}
          >
            <img src={cancelIcon} className="h-5 w-5" alt="" />
          </button>
        </div>
        <div className="flex flex-col gap-y-[14px] px-7 pb-[36px] pt-[36px]">
          <FormControl>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              placeholder="Give your proposal a title"
              name="title"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="created_by">Created By:</label>
            <input
              type="text"
              // placeholder="Enter your wallet address"
              disabled
              id="created_by"
              defaultValue={createdBy}
            />
          </FormControl>
          <FormControl>
            <label htmlFor="summary">Summary:</label>
            <textarea
              type="text"
              placeholder="Summary of your proposal"
              id="summary"
            />
          </FormControl>
          <FormControl>
            <label htmlFor="quorum">Quorum:</label>
            <input type="text" placeholder="Enter voters limit" id="quorum" />
          </FormControl>
        </div>
        <div className="border-t-[1px] border-t-[#B7B7B7] p-3">
          <button
            className="flex
w-full items-center justify-center rounded bg-[#003EB9] py-[14px] text-center text-base font-bold text-white"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreateProposalModal;
