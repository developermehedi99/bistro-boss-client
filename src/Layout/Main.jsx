import { Outlet } from "react-router-dom";
import Footer from "../shares/Footer";
import Navbar from "../shares/Navbar";

const Main = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
