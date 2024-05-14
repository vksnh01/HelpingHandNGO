import React from "react";
// import Header from "./HeaderSection/NavbarSection/Header";
import Header from './HeaderSection/NavbarSection/Header'
import "./HeaderSection/HeaderButton/HeaderButton.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./HeaderSection/HeaderButton/HomeRepository/Home";
import About from "./HeaderSection/HeaderButton/About";
import GalleryCard from "./HeaderSection/HeaderButton/GallaryRepository/GallaryCard";
import Contact from "./HeaderSection/HeaderButton/Contact";
import Donate from "./HeaderSection/HeaderButton/Donate";
import data from './HeaderSection/NavbarSection/HeaderData'

function MainComponentFile() {
  const [navData, setNavData] = React.useState([]);
  React.useEffect(()=>{
    setNavData(data);
  })
  return (
    <>
      {/* <div className="main-comp"> */}
      <BrowserRouter>
        <Header />
        <Routes>
        {
          navData.map((elem)=>{

            return(<>
              <Route path={elem.path} element={elem.link} />
            </>)
          })
        }
          {/* <Route path="/" element=<Home /> />
          <Route path="/about" element=<About /> />
          <Route path="/gallery" element=<GalleryCard /> />
          <Route path="/contact" element=<Contact /> />
          <Route path="/donate" element=<Donate /> /> */}
        </Routes>
      </BrowserRouter>
      {/* <Footer /> */}
      {/* </div> */}
    </>
  );
}

export default MainComponentFile;
