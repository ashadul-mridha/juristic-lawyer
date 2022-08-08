import React from "react";
import {
  MdBusiness,
  MdFamilyRestroom,
  MdOutlinePersonalInjury,
  MdOutlineSportsCricket,
} from "react-icons/md";

const LawPlan = () => {
  return (
    <div className="lawPlan">
      <style jsx>{`
        .lawPlan {
          margin-top: -50px;
        }
        .lawPlan__item {
          display: flex;
          justify-content: start;
          align-items: center;
          background-color: #f1f0f0;
          padding: 35px 10px;
          border-right: 0.5px solid gray;
        }
        .lawPlan__item:hover {
          background-color: #c9b38c;
          cursor: pointer;
        }
        .lawPlan__item:hover > .lawPlan__item__logo {
          color: #ffffff;
        }
        .lawPlan__item:hover > .lawPlan__item__content h6 {
          color: #ffffff;
        }
        .lawPlan__item:hover > .lawPlan__item__content p {
          color: #ffffff;
        }
        .lawPlan__item__logo {
          margin: 0px 15px;
          color: #393750;
        }
        .lawPlan__item__content p {
          margin: 0px;
          font-size: 15px;
          font-weight: 400;
          color: #aaa;
          text-transform: capitalize;
          font-family: "Roboto", sans-serif;
        }
        .lawPlan__item__content h6 {
          font-size: 18px;
          font-weight: 400;
          color: #393750;
          margin-top: 3px;
          text-transform: capitalize;
          font-family: "Roboto", sans-serif;
        }
      `}</style>
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdFamilyRestroom size={40} />
              </div>
              <div className="lawPlan__item__content">
                <p>Family Law Plan</p>
                <h6>Family Law</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdOutlinePersonalInjury size={40}  />
              </div>
              <div className="lawPlan__item__content">
                <p>Personal Injury Plan</p>
                <h6>Personal Injury</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdOutlineSportsCricket size={40}  />
              </div>
              <div className="lawPlan__item__content">
                <p>Criminal Plan</p>
                <h6>Criminal Law</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="lawPlan__item">
              <div className="lawPlan__item__logo">
                <MdBusiness size={40}  />
              </div>
              <div className="lawPlan__item__content">
                <p>Busniness Plan</p>
                <h6>Business Law</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawPlan;
