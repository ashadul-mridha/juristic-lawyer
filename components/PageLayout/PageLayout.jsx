import React from 'react';
import NavbarWithDropDown from '../Navbar/Navbar';

const PageLayout = ({name}) => {
    return (
      <>
        <div className="pageLayoutWrapper">
          <style jsx>{`
            .pageLayoutWrapper {
              background-image: url("/image/page-title-bg.jpg");
              height: 60vh;
              background-attachment: fixed;
              background-repeat: no-repeat;
              background-position: center top;
              background-size: cover;
            }
            .pageTitle {
              margin: 50px 0px;
            }
            .pageTitle h2 {
              font-size: 55px;
              font-weight: 300;
              color: #fff;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              text-align: center;
            }
            .pageTitle p {
              font-size: 17px;
              font-weight: 400;
              color: #fff;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              margin-top: 15px;
              margin-bottom: 15px;
              text-align: center;
            }
            @media screen and (max-width: 768px) {
              .pageTitle h2 {
                font-size: 50px;
              }
            }
          `}</style>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <NavbarWithDropDown />
                <div className="pageTitle">
                  <h2>{name}</h2>
                  <p>Home / {name}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default PageLayout;