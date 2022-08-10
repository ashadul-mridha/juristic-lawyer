import React from "react";
import SectionTitle from "./SectionTitle";
import { GiClawHammer, GiSkills } from "react-icons/gi";
import { VscLaw } from "react-icons/vsc";
import {
  MdFamilyRestroom,
  MdOutlinePersonalInjury,
  MdOutlineSportsCricket,
} from "react-icons/md";
import { GoLaw } from "react-icons/go";
import { BiDonateHeart } from "react-icons/bi";
import { FaUniversity } from "react-icons/fa";
import ExpertAtCard from "./ExpertAtCard";

const ExpertAt = () => {
  const sectionTitle = {
    icon: <GoLaw />,
    title: "WHAT WE ARE EXPERT AT",
    subTitle: "Legal Practice Areas",
    desc: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc",
  };
  const data = [
    {
      title: "Business Law",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
      icon: <BiDonateHeart size={45} />,
    },
    {
      title: "Legal Defence",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
      icon: <VscLaw size={45} />,
    },
    {
      title: "Education Law",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
      icon: <FaUniversity size={45} />,
    },
    {
      title: "Family Law",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
      icon: <MdFamilyRestroom size={45} />,
    },
    {
      title: "Personal Injuri Law",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
      icon: <MdOutlinePersonalInjury size={45} />,
    },
    {
      title: "Criminal Law",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perspiciatis provident vero perferendis tenetur repudiandae id voluptates blanditiis aliquam fugiat?",
      icon: <MdOutlineSportsCricket size={45} />,
    },
  ];
  return (
    <>
      <section className="expertAtSection">
        <style jsx>{`
          .expertAtSection {
            padding: 80px 0px;
            background-color: #262b3e;
          }
        `}</style>
        <div className="container">
          <SectionTitle data={sectionTitle} titleWhite="titleWhite" />
          <div className="row g-4 py-4">
            {data.map((item, index) => (
              <div key={index} className="col-lg-4">
                <ExpertAtCard data={item} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ExpertAt;
