import backIcon from "../assets/backIcon.svg";
import StateBadge from "../ui/StateBadge";
import thumbsup from "../assets/thumb_up.svg";
import thumbsdown from "../assets/thumb_down.svg";
import { useNavigate } from "react-router-dom";
function ProposalDetailsPage() {
  const navigate = useNavigate();
  return (
    <div>
      <div className="flex justify-between px-[63px] py-[18px] border-y-[#A1A1A1] border-y-[1px] items-center font-normal">
        <button
          className=" flex items-center gap-x-2 text-base font-bold text-black"
          onClick={() => navigate(-1)}
        >
          <img src={backIcon} alt="" />
          Go back
        </button>
      </div>
      <div className="px-[64px] text-black pb-[69px] pt-[37px] bg-[#f4f4f4] min-h-screen grid gap-x-9 grid-cols-[1fr_1fr]">
        <div className="bg-white rounded-[4px] border-[#a1a1a1] border-solid border-[1px]">
          <div className="py-4 px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            Proposal overview
          </div>
          <div className="py-4 flex items-center justify-between px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            <div className="flex items-center text-base font-normal gap-x-3 text-[#A1A1A1]">
              State
              <StateBadge status={"pending"} />
            </div>
            <div className="flex items-center gap-x-3">
              <h4 className="text-base text-[#A1A1A1]">End date</h4>
              <h3 className="text-xl">01, Feb 2024</h3>
            </div>
          </div>
          <div className="py-4 flex items-center px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            <div className="flex items-center gap-x-3">
              <h4 className="text-base text-[#A1A1A1]">Date Created</h4>
              <h3 className="text-xl">01, Jan 2024</h3>
            </div>
          </div>
          <div className="py-4 flex items-center px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            <div className="flex flex-col gap-y-2">
              <h4 className="text-base text-[#A1A1A1]">Title</h4>
              <h3 className="text-base">
                Partnership with Blockchain Education Initiatives
              </h3>
            </div>
          </div>
          <div className="py-4 flex items-center px-6 font-bold text-xl ">
            <div className="flex flex-col gap-y-2">
              <h4 className="text-base text-[#A1A1A1]">Summary</h4>
              <p className="text-base leading-[27px] text-justify">
                This proposal seeks approval for the allocation of funds to
                establish strategic partnerships with reputable blockchain
                education initiatives. The goal is to enhance the
                community&apos;s understanding of blockchain technology through
                sponsored online courses, workshops, and tutorials. The proposed
                budget includes support for online courses, workshop
                facilitation, and promotional material. The partnership aims to
                foster education and awareness within the community, aligning
                with the DAO&apos;s commitment to widespread blockchain
                adoption.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-[4px] border-[#a1a1a1] border-solid border-[1px]">
          <div className="py-4 px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            Voting information
          </div>
          <div className="py-4 flex items-center px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            <div className="flex flex-col gap-y-2 w-full">
              <h4 className="text-xl text-black">Cast your vote</h4>
              <div className="flex justify-between items-center">
                <h3 className="text-base text-[#A1A1A1]">Voting power</h3>
                <h2 className="text-xl font-normal text-black">12984.60</h2>
              </div>
              <div className="grid grid-cols-[1fr_1fr] gap-x-[33px]">
                <button className="p-[10px] flex justify-center gap-x-2 items-center border-[#00A600] border-[1px] border-solid bg-[#E0FFEA] text-[#00A600] rounded-[4px] text-sm font-normal">
                  <img src={thumbsup} alt="" />
                  Vote for
                </button>
                <button className="p-[10px] flex justify-center gap-x-2 items-center border-[#FF0000] border-[1px] border-solid bg-[#FFF2F2] rounded-[4px] text-[#FF0000] text-sm font-normal">
                  <img src={thumbsdown} alt="" />
                  Vote against
                </button>
              </div>
            </div>
          </div>
          <div className="py-4 flex items-center px-6 font-bold text-xl border-b-[#B7B7B7] border-b-[1px]">
            <div className="flex flex-col gap-y-2 w-full">
              <h4 className="text-xl text-black">Voting power</h4>
              <div>
                <h3 className="text-base text-[#A1A1A1]">Votes against</h3>
                <h2 className="text-xl font-normal text-black">
                  30 % - 8345.96
                </h2>
                <div className="w-full h-3 rounded-full overflow-hidden mt-2 bg-[#D9D9D9]">
                  <div className="w-[50%] bg-[#FD0000] h-full rounded-full"></div>
                </div>
              </div>
              <div>
                <h3 className="text-base text-[#A1A1A1]">Votes for</h3>
                <h2 className="text-xl font-normal text-black">
                  70 % - 12345.96
                </h2>
                <div className="w-full h-3 rounded-full overflow-hidden mt-2 bg-[#D9D9D9]">
                  <div className="w-[70%] bg-[#34C84A] h-full rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col gap-y-2 w-full items-center px-6 font-bold text-xl">
            <div className="flex justify-between w-full items-center">
              <h2 className="text-base font-normal text-[#A1A1A1]">Quorum</h2>
              <h3 className="text-xl font-normal">1500 voters</h3>
            </div>
            <div className="flex justify-between w-full items-center">
              <h2 className="text-base font-normal text-[#A1A1A1]">
                Current vote
              </h2>
              <h3 className="text-xl font-normal">50,000</h3>
            </div>
            <div className="flex justify-between w-full items-center">
              <h2 className="text-base font-normal text-[#A1A1A1]">
                Target vote{" "}
              </h2>
              <h3 className="text-xl font-normal">100,000</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProposalDetailsPage;
