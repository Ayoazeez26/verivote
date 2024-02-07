function ProposalTableHeader() {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.2fr] bg-[#DCF3FF] tableRow font-bold text-black text-base">
      <div>Proposal</div>
      <div>Due Date</div>
      <div>Vote for</div>
      <div>Vote against</div>
      <div>Total</div>
      <div>State</div>
    </div>
  );
}

export default ProposalTableHeader;
