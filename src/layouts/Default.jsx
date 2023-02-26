
import {Outlet} from "react-router-dom";

import Header from "../components/main/Header"
import Footer from "../components/main/Header"

const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Default;

