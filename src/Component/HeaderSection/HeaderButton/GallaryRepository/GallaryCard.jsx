import React from "react";
import "./Gallary.css";
import dm from "../../../../IMG/caro1.jpg";
import data from "./GallaryData";
import Footer from "../../../FooterSection/Footer";

function GallaryCard() {
  const [galleryData, setGalleryData] = React.useState([]);
  React.useEffect(() => {
    setGalleryData(data);
  });
  return (
    <>
      <div className="gallery-main-section">
        {galleryData.map((elem, ind) => {
          return (
            <>
              <div className="gallery-card">
                <div className="image-div">
                  <img src={elem.src} alt="" />
                </div>
                <div className="content-div">
                  <ul>
                    <li>
                      Name: <span>{elem.name}</span>
                    </li>
                    <li>
                      Age: <span>{elem.age}</span>
                    </li>
                    <li>
                      vaccinated: <span>{elem.vaccination}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </>
          );
        })}
      <Footer />
      </div>
    </>
  );
}

export default GallaryCard;
