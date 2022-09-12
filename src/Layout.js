// Overall layout of the application
// This is the main component that is rendered by the application
// It contains the header, the main content, and the footer
// Here goes the Outlet
import { Outlet } from "react-router-dom";
import Navbar from "./components/Nabar";

const Layout = () => {
  return (
    <div>
      <Outlet />
      <Navbar />
    </div>
  );
};

export default Layout;
