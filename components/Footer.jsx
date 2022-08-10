import React from 'react';

const Footer = () => {
    return (
      <>
        <footer className="footerSection">
          <style jsx>{`
            .footerSection {
              background-color: #262b3e;
              padding: 80px 0px 20px 0px;
            }
            .title {
              font-size: 18px;
              font-weight: 400;
              text-transform: uppercase;
              font-family: "Roboto", sans-serif;
              color: #ffffff;
              margin: 5px 0px 30px 0px;
            }
            .item {
              font-size: 15px;
              font-weight: 400;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              color: #cdced0;
              margin-top: 10px;
            }
            .listWrapper {
              list-style: none;
              padding-left: 0px;
            }
          `}</style>
          <div className="container">
            <div className="row g-4">
              <div className="col-lg-3">
                <h6 className="title">About Us</h6>
                <p className="item">
                  Showed a lady fitted out with a fur hat and fur boa who sat
                  upright, raising a heavy fur muff that covered the whole of
                  her lower arm
                </p>
              </div>
              <div className="col-lg-3">
                <h6 className="title">Our Address</h6>
                <ul className="listWrapper">
                  <li className="item">Booston town, Austria</li>
                  <li className="item">Phone: 84667441</li>
                  <li className="item">Office Time: 10AM- 5PM</li>
                  <li className="item">Email: demo@example.com</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h6 className="title">Usefull Links</h6>
                <ul className="listWrapper">
                  <li className="item">About Us</li>
                  <li className="item">Our Service</li>
                  <li className="item">Contact Us</li>
                  <li className="item">Meet Team</li>
                </ul>
              </div>
              <div className="col-lg-3">
                <h6 className="title">Practice Area</h6>
                <ul className="listWrapper">
                  <li className="item">Real State Law</li>
                  <li className="item">Education Law</li>
                  <li className="item">Criminal Law</li>
                  <li className="item">personal Law</li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
};

export default Footer;