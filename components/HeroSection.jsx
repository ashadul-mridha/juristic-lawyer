import React from 'react';
import { useRouter } from "next/router";
import NavbarWithDropDown from './Navbar/Navbar';

const HeroSection = () => {
  
  const router = useRouter();

    return (
      <>
        <div className="herosectionWrapper">
          <style jsx>{`
            .herosectionWrapper {
              background-image: url("/image/hero-bg-img.jpg");
              height: 90vh;
              background-attachment: fixed;
              background-repeat: no-repeat;
              background-position: center top;
              background-size: cover;
            }
            .herosectionWrapperContent {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: start;
              height: 70vh;
            }
            .herosectionWrapperContent h2 {
              font-size: 60px;
              font-weight: 400;
              color: #fff;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
            }
            .herosectionWrapperContent p {
              font-size: 17px;
              font-weight: 500;
              color: #fff;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              margin-top: 15px;
              margin-bottom: 15px;
            }
            @media screen and (max-width: 768px) {
              .herosectionWrapperContent h2 {
                font-size: 50px;
              }
            }
          `}</style>
          <div className="container">
            <div className="row">
              <div className="col-lg-12">
                <NavbarWithDropDown />
                <div className="herosectionWrapperContent">
                  <h2>
                    our Independence <br /> makes the difference
                  </h2>
                  <p>Nationally Estabilished. International Recognized</p>
                  <button
                    onClick={() => router.push("/consultancy-form")}
                    className="btn__primary"
                  >
                    Request For Consultration
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default HeroSection;