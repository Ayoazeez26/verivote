import { useConnectWallet } from "../../context/ConnectContext";
import { useNavigate } from "react-router-dom";
import { connectWallet } from "../../api/ConnectAPI";
import { connect } from "get-starknet";
import SpinnerMini from "../../ui/SpinnerMini";
import walletIcon from "../../assets/walletIcon.svg";

function HeroSection() {
  const { dispatch, loading } = useConnectWallet();
  const navigate = useNavigate();

  async function onConnect() {
    const response = await connectWallet(dispatch, connect);
    if (response) {
      navigate("app");
    }
    return;
  }

  return (
    <div className="bg-bg px-[215px] text-white min-h-screen pt-[200px] text-center bg-no-repeat bg-cover bg-center">
      <h1 className="text-[64px] font-bold leading-[77px] mb-6">
        Empowering Decentralized Decision-Making!
      </h1>
      <p className="font-normal text-2xl leading-7 mb-8">
        provide a cutting-edge solution that ensures reliability, efficiency,
        and ballot privacy in DAO voting, giving you the tools to make informed
        decisions.
      </p>
      <button
        className=" flex items-center gap-x-2 mx-auto justify-center rounded bg-[#E5EEFF] px-[80px] py-[12px] text-center text-base font-bold uppercase text-darkPrimary disabled:cursor-not-allowed border-[#0075FF] border-[2px] border-solid"
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
    </div>
  );
}

export default HeroSection;
