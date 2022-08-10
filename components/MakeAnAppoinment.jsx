/* eslint-disable @next/next/no-img-element */
import React from 'react';

const MakeAnAppoinment = () => {
    return (
      <>
        <section className="makeAnAppoinmentSection">
          <style jsx>{`
            .makeAnAppoinment {
              background: linear-gradient(180deg, #546aae, #b19e7dad),
                url("/image/cta-bg.jpg");
              background-size: cover;
              background-position: center;
              display: flex;
              flex-direction: column;
              align-items: center;
              padding: 120px 0px;
            }
            .makeAnAppoinment__img {
              height: 120px;
              width: 100px;
            }
            .makeAnAppoinment_title {
              font-size: 38px;
              font-weight: 400;
              text-transform: uppercase;
              font-family: "Roboto", sans-serif;
              color: #ffffff;
              margin: 5px 0px 30px 0px;
            }
            .makeAnAppoinment__subTitle {
              font-size: 18px;
              font-weight: 400;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              color: #ffffff;
              margin: 35px 0px 10px 0px;
            }
          `}</style>
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="makeAnAppoinment">
                  <div className="makeAnAppoinment__img">
                    <img
                      src="/image/cta-logo.png"
                      alt="logo"
                      height={"100%"}
                      width="100%"
                    />
                  </div>
                  <h6 className="makeAnAppoinment__subTitle">Call Us 24/7</h6>
                  <h2 className="makeAnAppoinment_title">545-75797-897</h2>
                  <button className="btn__secondary">Make An Appoinment</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default MakeAnAppoinment;