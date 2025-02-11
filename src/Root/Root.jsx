import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar/Navbar";

const Root = () => {
  return (
    <div className="md:max-w-7xl mx-auto Poppins">
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;