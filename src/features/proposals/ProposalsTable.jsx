import ProposalTableHeader from "./ProposalTableHeader";
import ProposalTableRow from "./ProposalTableRow";

function ProposalsTable() {
  return (
    <div className="rounded-[8px] overflow-hidden border-solid border-[1px] border-[#A1A1A1]">
      <ProposalTableHeader />
      <div className="max-h-[400px] overflow-y-auto overflow-x-hidden">
        <ProposalTableRow />
        <ProposalTableRow />
        <ProposalTableRow />
        <ProposalTableRow />
        <ProposalTableRow />
      </div>
    </div>
  );
}

export default ProposalsTable;
