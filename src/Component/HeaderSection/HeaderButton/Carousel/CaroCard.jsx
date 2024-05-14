import React from 'react'
import './Caro.css'

function CaroCard({data}) {
  return (
    <>
         <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" style={{ padding: "0px" }}>
          {data.map((elem, ind) => {
            return (
              <>
                <div
                  className={`carousel-item ${elem.active}`}
                  data-bs-interval={2000}
                  key={ind}
                >
                  <img
                    src={elem.link}
                    className="d-block w-100 caro-img "
                    // style={{ height: "87vh" }}
                    alt={elem.name}
                  />
                </div>
              </>
            );
          })}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>)
}

export default CaroCard