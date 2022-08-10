import React from "react";

const ExpertAtCard = ({ data }) => {
  return (
    <>
      <div className="card">
        <style jsx>{`
          .card {
            padding: 50px 25px 20px 25px;
            background-color: transparent;
          }
          .card__logo {
            color: #c9b38c;
          }
          .card__title {
            font-size: 17px;
            font-weight: 500;
            text-transform: uppercase;
            font-family: "Roboto", sans-serif;
            color: #ffffff;
            margin: 0px 0px;
          }
          .card__desc {
            font-size: 14px;
            font-weight: 400;
            text-transform: capitalize;
            font-family: "Roboto", sans-serif;
            color: #c5c5c6;
            margin-top: 15px;
          }
        `}</style>
        <div className="row">
          <div className="col-3">
            <div className="card__logo">{data.icon && data.icon}</div>
          </div>
          <div className="col-9">
            <h2 className="card__title">{data.title && data.title}</h2>
            <p className="card__desc">{data.desc && data.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExpertAtCard;
