import React from 'react';
import { AiOutlineHome } from "react-icons/ai";

const SectionTitle = () => {
    return (
      <>
        <div className="row">
          <style jsx>{`
            .logo {
              background-color: #c9b38c;
              color: #ffffff;
              border: 5px solid #f4f0e8;
              border-radius: 50%;
              height: 60px;
              width: 60px;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 30px;
              font-width: 500px;
              cursor: pointer;
            }
            .section-title-content h6 {
              font-size: 20px;
              font-weight: 500;
              text-transform: uppercase;
              font-family: "Roboto", sans-serif;
              color: #c9b38c;
            }
            .section-title-content h2 {
              font-size: 32px;
              font-weight: 500;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              padding: 10px 0px;
            }
            .section-title-content p {
              font-size: 14px;
              font-weight: 400;
              font-family: "Roboto", sans-serif;
              color: #79859f;
            }
          `}</style>
          <div className="col-lg-1">
            <div className="logo">
              <AiOutlineHome />
            </div>
          </div>
          <div className="col-lg-11">
            <div className="section-title-content">
              <h6>ABOUT JURISTIC</h6>
              <h2>
                We Are The Most Populer Law Firm With Various Law Services!
              </h2>
              <p>
                Maecenas tempus, tellus eget condimentum rhoncus, sem quam
                semper libero, sit amet adipiscing sem neque sed ipsum
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure iste vero impedit hic sed natus a nesciunt architecto, suscipit deleniti consectetur repellendus, temporibus quia vitae aliquam eveniet asperiores blanditiis tempore reprehenderit commodi at animi maxime. Esse molestiae quis velit inventore magni, consequuntur repudiandae ipsa omnis commodi laborum hic similique ut.
              </p>
            </div>
          </div>
        </div>
      </>
    );
};

export default SectionTitle;