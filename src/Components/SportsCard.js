import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';


import Pod from './Pod';
import SportIcon from './SportIcon';
import SportDocu from './SportDocu';
import SportsData from './SportsData';
import Boxing from './Boxing';


function SportsCard() {

    let setting = {
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
    }

    return (
        <>
            <div className="my-5">
                <h1 className="text-center"><span>NetFlix</span> <strong>Sports</strong></h1> 
                <h3 className="text-center"><strong>Discover the Latest</strong></h3>
                <p className="text-center text-black-50">
                    There's nothing like a good sports movie, whether it's football or 
                    basketball, baseball or soccer, comedy, drama or documentary. Game, 
                    set, watch!
                    </p>
            </div>
            <div className="container mb-5">
                <div className="row">
                
                    <div className="col-md-10 mx-auto">

                  
                        <div className="row">

                        
                            <div className="col-md-12">

                    

                            <Slider {...setting}>

                            <div className="card">
                                <img src={SportsData[0].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[0].title}</h4>
                                    <p className="card-text">{SportsData[0].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>


                            <div className="card">
                                <img src={SportsData[1].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[1].title}</h4>
                                    <p className="card-text">{SportsData[1].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>

                            <div className="card">
                                <img src={SportsData[2].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[2].title}</h4>
                                    <p className="card-text">{SportsData[2].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>


                            <div className="card">
                                <img src={SportsData[3].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[3].title}</h4>
                                    <p className="card-text">{SportsData[3].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>


                            <div className="card">
                                <img src={SportsData[4].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[4].title}</h4>
                                    <p className="card-text">{SportsData[4].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>


                            <div className="card">
                                <img src={SportsData[5].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[5].title}</h4>
                                    <p className="card-text">{SportsData[5].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>


                            <div className="card">
                                <img src={SportsData[6].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[6].title}</h4>
                                    <p className="card-text">{SportsData[6].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>



                            <div className="card">
                                <img src={SportsData[7].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[7].title}</h4>
                                    <p className="card-text">{SportsData[7].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>




                            <div className="card">
                                <img src={SportsData[8].photo} className="slideImg" />
                                <div className="card-body sportCard">
                                    <h4 className="card-title">{SportsData[8].title}</h4>
                                    <p className="card-text">{SportsData[8].subtitle}</p>
                                    <button className="btn btn-danger myButton">Watch More </button>
                                </div>
                            </div>

                            </Slider>
                            </div>
                            
                        </div>

                      

                    </div>
                    
                </div>
            </div>


            <SportDocu />
            <SportIcon />
            <Pod />

            <Boxing />
         

        </>
    )
}

export default SportsCard 