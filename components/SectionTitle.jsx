import React from 'react';

const SectionTitle = ({ data, titleWhite, smallTitle }) => {
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
            margin-bottom: 10px;
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
          .section-title-content h2.titleWhite {
            color: #ffffff;
          }
          .section-title-content p {
            font-size: 17px;
            font-weight: 400;
            font-family: "Roboto", sans-serif;
            color: #79859f;
          }
        `}</style>
        <div className={smallTitle === "smallTitle" ? "col-lg-2" : "col-lg-1"}>
          <div className="logo">{data.icon && data.icon}</div>
        </div>
        <div className={smallTitle === "smallTitle" ? "col-lg-10" : "col-lg-11"}>
          <div className="section-title-content">
            <h6>{data.title && data.title}</h6>
            <h2 className={titleWhite}>{data.subTitle && data.subTitle}</h2>
            <p>{data.desc && data.desc}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SectionTitle;