/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import StateBadge from "../../ui/StateBadge";

function ProposalTableRow({ id = 1, proposal }) {
  return (
    <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1.2fr] border-b-[1px] border-b-[#B7B7B7] bg-white  font-bold text-black text-base tableRow">
      <div>
        <Link to={`${id}`}>Marketing Campaign Expansion</Link>
      </div>
      <div>01, Feb 2024</div>
      <div>123k</div>
      <div>223k</div>
      <div>346k</div>
      <div>
        <Link to={`${id}`}>
          {" "}
          <StateBadge status="succeeded" />
        </Link>
      </div>
    </div>
  );
}

export default ProposalTableRow;
