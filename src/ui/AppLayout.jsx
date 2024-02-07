import { Outlet } from "react-router-dom";

import AppNavbar from "./AppNavbar";

function AppLayout() {
  return (
    <div className="bg-white">
      <AppNavbar theme="blue" />
      <Outlet />
    </div>
  );
}

export default AppLayout;
