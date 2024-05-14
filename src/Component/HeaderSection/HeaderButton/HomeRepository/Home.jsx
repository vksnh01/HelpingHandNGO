import React from "react";
// import "./HeaderButton.css";
import data from "../Carousel/CaroData";
import CaroCard from "../Carousel/CaroCard";
import { homeData, homeRescueData } from "./HomeData";
import { NavLink } from "react-router-dom";
import Footer from "../../../FooterSection/Footer";
import rescue from "../../../../IMG/markus-winkler-PcKhVNNyEio-unsplash.jpg";

function Home() {
  const [caroData, setCaroData] = React.useState([]);
  const [homeSectionData, setHomeSectionData] = React.useState([]);
  const [hidePageData, setHidePageData] = React.useState([]);
  const [hideShowPage, setHideShowPage] = React.useState(false);
  React.useEffect(() => {
    setCaroData(data);
    setHomeSectionData(homeData);
    setHidePageData(homeRescueData);
  }, []);
  // const HideShowPage =()=>{
  //   console.log("hello");
  // }
  return (
    <>
      <CaroCard data={caroData} />
      <section className={`home-main-section ${!hideShowPage}?'':'blr
'`}>
        <div className="animationsection">
          <marquee behavior="" direction="left">
            <h1>Welcome to Helping Hand-"a hope of the voiceless"</h1>
          </marquee>
        </div>
        <div className="home-rescue-section section">
          <div id="title-section">
            <h1 className="ts">What we do every day</h1>
          </div>
          <div className="content-section">
            <img src={rescue} alt="" />
            <p>
              Leading by example is one of the best ways to cultivate
              compassion. Even though our rescue and recovery center has a short
              sighted goal, its impact reaches far beyond the recipient animals{" "}
              <span
                className="animationBtn"
                onClick={() => setHideShowPage(!hideShowPage)}
              >
                Read More...
              </span>
            </p>
          </div>
        </div>
        {homeSectionData.map((elem, ind) => {
          return (
            <>
              <div className="volenteer-section section" key={ind}>
                <div id="title-section">
                  <h1 className="ts">{elem.title}</h1>
                </div>
                <div className="content-section">
                  {elem.id % 2 == 1 ? (
                    <>
                      {" "}
                      <img src={elem.img} alt="volenteer" />
                      <p>
                        {elem.content}
                        {elem.btn != null ? (
                          <NavLink className="button" to={elem.btnLink}>
                            {elem.btn}
                          </NavLink>
                        ) : (
                          ""
                        )}
                      </p>
                    </>
                  ) : (
                    <>
                      <p>
                        {elem.content}
                        {elem.btn != null ? (
                          <NavLink className="button" to={elem.btnLink}>
                            {elem.btn}
                          </NavLink>
                        ) : (
                          ""
                        )}
                      </p>
                      <img src={elem.img} alt="volenteer" />
                    </>
                  )}
                </div>
              </div>
            </>
          );
        })}
        <Footer />
        {/* hideShow Page */}
        <div
          className={`${!hideShowPage ? "hide" : "ShowPage"}`}
          onClick={() => setHideShowPage(!hideShowPage)}
        >
          {hidePageData.map((elem, ind) => {
            return (
              <>
                <div className="section">
                  <div id="title-section">
                    <h1 className="ts">{elem.title}</h1>
                  </div>
                  <div
                    className="content-section"
                    onClick={() => setHideShowPage(!hideShowPage)}
                  >
                    <p style={{"fontSize":"18px"}}>
                      {elem.content}
                      {/* <span className="animationBtn">Read More...</span> */}
                    </p>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Home;
