import React from 'react'

function SlideShow(props) {
  return (

    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col-md-10 mx-auto">



          <div className="container-fluid" id="demo" className="carousel slide" 
          data-ride="carousel">
            <ul className="carousel-indicators">
              <li data-target="#demo" data-slide-to="0" className="active"></li>
              <li data-target="#demo" data-slide-to="1"></li>
              <li data-target="#demo" data-slide-to="2"></li>
            </ul>
            
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={props.show1} className="mySlide" />
                <div className="carousel-caption">
                  <h1>{props.title1}</h1>
                  <p>{props.buy1}</p>
                  <a href={props.link1} target="_blank">
                  <button className="btn btn-danger">Watch Now</button>
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img src={props.show2} className="mySlide" />
                <div className="carousel-caption">
                  <h1>{props.title2}</h1>
                  <p>{props.buy2}</p>
                  <a href={props.link2} target="_blank">
                  <button className="btn btn-danger">Watch Now</button>
                  </a>
                </div>
              </div>

              <div className="carousel-item">
                <img src={props.show3} className="mySlide" />
                <div className="carousel-caption">
                  <h1>{props.title3}</h1>
                  <p>{props.buy3}</p>
                  <a href={props.link3} target="_blank">
                  <button className="btn btn-danger">Watch Now</button>
                  </a>
                </div>
              </div>

            </div>
            <a className="carousel-control-prev" href="#demo" data-slide="prev">
              <span className="carousel-control-prev-icon"></span>
            </a>
            <a className="carousel-control-next" href="#demo" data-slide="next">
              <span className="carousel-control-next-icon"></span>
            </a>
          </div>

        </div>
      </div>
    </div>
  )
}

export default SlideShow