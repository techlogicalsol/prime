import React from 'react'
import AboutData from './AboutData'

function About() {
    return (
        <>

        <div className="container mt-5">
            <div className="row">
                <div className="col-md-12">
                    <div className="jumbotron">
                        <h1>ABOUT</h1>
                        <p className="text-muted lead">
                        NetFlix is home to the shows and films that everyone is talking about, from 
                        groundbreaking series and documentaries to the biggest blockbuster movies ever
                         made.
                        </p>
                        <hr class="my-4" />
                        <p className="lead">
                        Part of the WarnerMedia family, NetFlix has been recognized for 
                        decades as one of the most respected and innovative entertainment 
                        brands in the world. It’s where the most talented, creative minds 
                        choose to tell their stories and where people around the world come to watch iconic, award-winning programs.
                        </p>

                        <p className="lead">
                        Stories connect us — they always have. At NetFlix, we strive to develop the best shows and films that illustrate the incredible power of storytelling.
                        </p>
                    </div>
                </div>
            </div>
        </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-md-12 mx-auto">
                        <h1 className="text-center mb-2">OUR TEAM</h1>
                        <div className="row">


                            {AboutData.map((val) => {
                                return(
                                    <div className="col-md-4 mt-4">
                                    <div className="card abtCard">
                                    <img src={val.photo} className="aboutImg" />
                                        <div className="card-body">
                                            
                                <h5 className="card-title abtTitle">{val.title}</h5>
                                <p className="card-text abtText">{val.name}</p>
                                <p className="card-text text-muted">{val.info}</p>
                                <p className="card-text abtEmail">{val.email}</p>
                                <button className="mybtn">Contact</button>
                                           
                                        </div>
                                        
                                    </div>
                                    
    
                                </div>
                                )
                            })}
                          

                        </div>



                    </div>
                </div>
            </div>

        </>
    )
}

export default About