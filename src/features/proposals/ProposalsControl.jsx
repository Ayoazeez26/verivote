/* eslint-disable react/prop-types */
import searchIcon from "../../assets/searchIcon.svg";
import addIcon from "../../assets/addIcon.svg";

function ProposalsControl({ handleCreateProposal }) {
  return (
    <div className="flex items-center justify-between border-y-[1px] border-y-[#A1A1A1] px-[63px] py-[18px] text-base font-normal text-[#3D4043]">
      <div className="flex items-center gap-x-4">
        <select
          name=""
          id=""
          className="rounded-[4px] border-[1px] border-solid border-[#A1A1A1] bg-[#f4f4f4] px-[10px] py-3"
        >
          <option value="">Sort proposal by</option>
        </select>
        <div className="relative w-[600px] overflow-hidden rounded-lg  border-[1px] border-solid border-[#A1A1A1]">
          <img
            src={searchIcon}
            className="absolute left-5 top-[14px] h-6 w-6"
            alt="search-icon"
          />
          <input
            type="text"
            placeholder="Search for proposal by their name"
            className=" w-full bg-[#f4f4f4] p-[12px] pl-[60px] font-normal text-[#3D4043] outline-none"
          />
        </div>
      </div>
      <button
        className="flex items-center gap-x-2 rounded-[4px] bg-[#0075FF] px-[14px] py-[18px] text-base font-bold text-white"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          handleCreateProposal(true);
        }}
      >
        <img src={addIcon} alt="" />
        New Proposal
      </button>
    </div>
  );
}

export default ProposalsControl;
