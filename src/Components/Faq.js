import React from 'react'
import FaqData from './FaqData';


function Faq() {
  return (
    <>
      <div className="container-fluid my_faq">
        <div className="row">
          <div className="col-8 mx-auto mt-5 mb-5 faq_main">
            <h1 className="text-center mb-5">Frequently Asked Questions</h1>


            <div id="accordion">
              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="card-link faq_link" data-toggle="collapse" href="#collapseOne">
                    {FaqData[0].question}
                  </a>
                </div>
                <div id="collapseOne" className="collapse show" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[0].answer1}</p>
                    <p>{FaqData[0].answer2}</p>
                  </div>
                </div>
              </div>

              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="collapsed card-link faq_link" data-toggle="collapse" href="#collapseTwo">
                    {FaqData[1].question}
                  </a>
                </div>
                <div id="collapseTwo" className="collapse" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[1].answer1}</p>
                  </div>
                </div>
              </div>

              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="collapsed card-link faq_link" data-toggle="collapse" href="#collapseThree">
                    {FaqData[2].question}
                  </a>
                </div>
                <div id="collapseThree" className="collapse" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[2].answer1}</p>
                    <p>{FaqData[2].answer2}</p>
                  </div>
                </div>
              </div>

              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="collapsed card-link faq_link" data-toggle="collapse" href="#collapseThree">
                    {FaqData[3].question}
                  </a>
                </div>
                <div id="collapseThree" className="collapse" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[3].answer1}</p>

                  </div>
                </div>
              </div>

              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="collapsed card-link faq_link" data-toggle="collapse" href="#collapseFour">
                    {FaqData[4].question}
                  </a>
                </div>
                <div id="collapseFour" className="collapse" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[4].answer1}</p>

                  </div>
                </div>
              </div>

              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="collapsed card-link faq_link" data-toggle="collapse" href="#collapseFive">
                    {FaqData[5].question}
                  </a>
                </div>
                <div id="collapseFive" className="collapse" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[5].answer1}</p>
                    <p>{FaqData[5].answer2}</p>
                  </div>
                </div>
              </div>

              <div className="card faq_card">
                <div className="card-header faq_header">
                  <a className="collapsed card-link faq_link" data-toggle="collapse" href="#collapseSix">
                    {FaqData[6].question}
                  </a>
                </div>
                <div id="collapseSix" className="collapse" data-parent="#accordion">
                  <div className="card-body">
                    <p>{FaqData[6].answer1}</p>

                  </div>
                </div>
              </div>

              <input type="text" placeholder="Email address" className="myInput"/>
              <a href={FaqData[7].link} target="_blank">
            <button className="my_btn1">TRY 30 DAYS TRAIL FREE</button>
            </a>
            </div>


            

          </div>
        </div>
      </div>


    </>
  )
}

export default Faq