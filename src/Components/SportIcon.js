import React from 'react'
import SportIconData from './SportIconData'

function SportIcon() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center"><strong>Sports Icons</strong></h1>
        <p className="text-black-50 text-center">
          Uncover these sport documentaries, featuring never-before seen footage and
          stories from some of the greatest in their fields.
            </p>
      </div>



      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="row">



              {SportIconData.map((val) => {
                return (

                  <div className="col-md-6">




                    <div className="card mb-3">
                      <div className="row no-gutters">
                        <div className="col-md-4">
                          <img src={val.photo} className="myIcon" alt="..." />
                        </div>

                        <div className="col-md-8 icon_col">
                          <div className="card-body iconBody">
                            <h5 className="card-title">{val.title}</h5>
                            <p className="card-text myText">{val.info}</p>
                            <p className="card-text"><small className="text-muted">{val.min}</small></p>
                          </div>
                        </div>
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

export default SportIcon