import React from 'react'
import HomeData from './HomeData'

import Display from './Display'
import Faq from './Faq'



function Home() {
    return (
        <>
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-12 hero-image">
                    <img src={HomeData[0].photo} className="hero-back" />
                    <div className="row">
                        <div className="col-md-8 mx-auto hero-text">

                    
                    <div>
                        <h1>{HomeData[0].title}</h1>
                        <h5>{HomeData[0].subtitle1}</h5>
                        <p>{HomeData[0].subtitle2}</p>
                        <input type="text" placeholder="Email address" required/>
                        <a href={HomeData[0].link} target="_blank">
                            <button className="my_btn" type="submit">Try 30 Days Free Trail</button>
                        </a>
                    </div>
                    
                </div>
                </div>
                    </div>
            </div>
            
        </div>

        <Display />
        <Faq />

        </>
    )
}

export default Home