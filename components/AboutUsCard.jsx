import React from 'react';

const AboutUsCard = ({ data}) => {
    return (
      <>
        <div className="card">
          <style jsx>{`
            .card {
              padding: 50px 25px 20px 25px;
              transition: 1s all;
            }
            .card:hover {
              background-color: #c9b38c;
              cursor: pointer;
            }
            .card:hover > .card__logo {
              color: #ffffff;
            }
            .card:hover > .card__title {
              color: #ffffff;
            }
            .card:hover > .card__desc {
              color: #ffffff;
            }
            .card__logo {
              color: #c9b38c;
            }
            .card__title {
              font-size: 20px;
              font-weight: 500;
              text-transform: uppercase;
              font-family: "Roboto", sans-serif;
              color: #000000;
              margin: 20px 0px;
            }
            .card__desc {
              font-size: 14px;
              font-weight: 400;
              text-transform: capitalize;
              font-family: "Roboto", sans-serif;
              color: #79859f;
            }
          `}</style>
          <div className="card__logo">{ data.icon &&  data.icon}</div>
          <h2 className="card__title">{ data.title &&  data.title}</h2>
          <p className="card__desc">{ data.desc &&  data.desc}</p>
        </div>
      </>
    );
};

export default AboutUsCard;