import React from "react";
import { MdOutlineFormatQuote } from "react-icons/md";
import SectionTitle from "./SectionTitle";
import TestimonialSlider from "./Testimonial/TestimonialSlider";

const OurClient = () => {
  const sectionTitle = {
    icon: <MdOutlineFormatQuote />,
    title: "TESTIMONIALS",
    subTitle: "What Our Clients Say About Us",
    desc: "Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc",
  };

  const pagination = {
    el: ".my-custom-pagination-div",
    clickable: true,
    renderBullet: function (index, className) {
      return `<div class=${className}>  </div>`;
    },
  };

  return (
    <>
      <section className="ourClientSection">
        <style jsx>{`
          .ourClientSection {
            padding: 80px 0px;
          }

          .paginationWrapper {
            margin-top: 15px;
          }
        `}</style>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <SectionTitle data={sectionTitle} smallTitle={"smallTitle"} />
              <div className="col-lg-10 offset-lg-2">
                <div className="paginationWrapper">
                  <div className="my-custom-pagination-div"></div>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <TestimonialSlider pagination={pagination} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default OurClient;
