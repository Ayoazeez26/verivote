import { createPortal } from "react-dom";
import ProposalsControl from "../features/proposals/ProposalsControl";
import ProposalsTable from "../features/proposals/ProposalsTable";
import CreateProposalModal from "../features/proposals/CreateProposalModal";
import { useState } from "react";

function ProposalsPage() {
  const [createProposalIsOpen, setCreateProposalIsOpen] = useState(false);
  return (
    <div>
      {/* {createPortal(<Modal />, document.body)} */}
      {createProposalIsOpen &&
        createPortal(
          <CreateProposalModal toggleIsOpen={setCreateProposalIsOpen} />,
          document.body,
        )}
      <ProposalsControl handleCreateProposal={setCreateProposalIsOpen} />
      <div className="bg-[#f4f4f4] px-[64px] pb-[69px] pt-[29px] ">
        <ProposalsTable />
      </div>
    </div>
  );
}

export default ProposalsPage;
