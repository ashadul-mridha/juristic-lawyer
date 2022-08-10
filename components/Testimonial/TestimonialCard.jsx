/* eslint-disable @next/next/no-img-element */
import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

const TestimonialCard = () => {
  return (
    <>
      <div className="testmonialCard">
        <style jsx>{`
          .testmonialCard__icon {
            color: #c9b38c;
            font-size: 40px;
          }
          .testmonialCard__quote {
            margin: 10px 0px;
          }
          .testmonialCard__quote p {
            font-size: 16px;
            font-weight: 400;
            text-transform: capitalize;
            font-family: "Roboto", sans-serif;
            color: #79859f;
          }
          .testmonialCard__user {
            display: flex;
            justify-content: start;
            align-items: center;
          }
          .testmonialCard__user__img {
            height: 60px;
            width: 60px;
            margin-right: 15px;
          }
          .testmonialCard__user__img img {
            border-radius: 50%;
          }
          .testmonialCard__user__title h6 {
            font-size: 16px;
            font-weight: 400;
            text-transform: capitalize;
            font-family: "Roboto", sans-serif;
            color: #000000;
            margin: 5px 0px;
          }
          .testmonialCard__user__title p {
            font-size: 13px;
            font-weight: 400;
            text-transform: capitalize;
            font-family: "Roboto", sans-serif;
            color: #79859f;
            margin: 0px;
          }
        `}</style>
        <div className="testmonialCard__icon">
          <FaQuoteLeft />
        </div>
        <div className="testmonialCard__quote">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vel
            placeat ab modi iusto amet libero inventore illum recusandae ea
            saepe magni, temporibus doloribus repellat est incidunt quibusdam
            possimus unde error.
          </p>
        </div>
        <div className="testmonialCard__user">
          <div className="testmonialCard__user__img">
            <img
              src="/image/user.jpg"
              alt="User Image"
              height={"100%"}
              width={"100%"}
            />
          </div>
          <div className="testmonialCard__user__title">
            <h6>Ashadul Mridha</h6>
            <p>Frontend Developer</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialCard;
