import React from "react";
import AboutUsCard from "./AboutUsCard";
import SectionTitle from "./SectionTitle";
import { GiClawHammer, GiSkills } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { MdFamilyRestroom } from "react-icons/md";

const AboutUs = () => {
    const data = [
      {
        title: "Skilled Attorneys",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
        icon: <GiClawHammer size={45} />,
      },
      {
        title: "Legal Defence",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
        icon: <VscLaw size={45} />,
      },
      {
        title: "90% Case Win",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
        icon: <MdFamilyRestroom size={45} />,
      },
      {
        title: "Skilled Lawyer",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
        icon: <GiSkills size={45} />,
      },
    ];
  return (
    <>
      <section className="aboutusSection">
        <style jsx>{`
          .aboutusSection {
            padding: 80px 0px;
          }
        `}</style>
        <div className="container">
          <SectionTitle />
          <div className="row py-4">
            {data.map((item, index) => (
              <div key={index} className="col-lg-3">
                <AboutUsCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
