import Logo from "./Logo";
import WalletConnector from "./WalletConnector";

function Navbar() {
  return (
    <nav className="px-[64px] py-4 absolute top-0 left-0 w-full flex items-center justify-between">
      <Logo />
      <WalletConnector />
    </nav>
  );
}

export default Navbar;
