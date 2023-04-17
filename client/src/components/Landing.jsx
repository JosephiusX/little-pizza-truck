import React from "react";
import Header from "./Header";
import AboutUs from "./AboutUs";
import Family from "./Family";
import Menu from "./Menu";
import ContactUs from "./ContactUs";
import Footer from "./Footer";

const Landing = () => {

  return (
    <div>
      <Header />
      <AboutUs />
      <Family />
      {/* <Menu /> */}
      <ContactUs />
      <Footer />
    </div>
  )
}

export default Landing