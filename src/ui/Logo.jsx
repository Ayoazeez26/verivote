/* eslint-disable react/prop-types */
function Logo({ theme = "orange" }) {
  return (
    <h2
      className={`font-bold text-[32px] ${theme === "orange" ? "text-[#FDBC40]" : "text-[#0400D0]"}`}
    >
      VeriVote
    </h2>
  );
}

export default Logo;
