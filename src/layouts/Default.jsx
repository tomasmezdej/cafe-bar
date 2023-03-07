
import {Outlet} from "react-router-dom";

import Header from "../components/main/Header"
/* import Footer from "../components/main/Footer" */
import ScrollUpButton from "../components/main/ScrollUpButton"

const Default = () => {
  return (
    <>
      <Header />
      <Outlet />
      {/* <Footer /> */}
      <ScrollUpButton />
    </>
  );
};

export default Default;

