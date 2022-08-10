import React from "react";
import AboutUsCard from "./AboutUsCard";
import SectionTitle from "./SectionTitle";
import { GiClawHammer, GiSkills } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import { MdFamilyRestroom } from "react-icons/md";
import { AiOutlineHome } from "react-icons/ai";

const AboutUs = () => {
    const sectionTitle = {
      icon : <AiOutlineHome />,
      title: "ABOUT JURISTIC",
      subTitle: "We Are The Most Populer Law Firm With Various Law Services!",
      desc : "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure iste vero impedit hic sed natus a nesciunt architecto, suscipit deleniti consectetur repellendus, temporibus quia vitae aliquam eveniet asperiores blanditiis tempore reprehenderit commodi at animi maxime. Esse molestiae quis velit inventore magni, consequuntur repudiandae ipsa omnis commodi laborum hic similique ut."
    };
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
          <SectionTitle data={sectionTitle} />
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
