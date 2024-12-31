import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slider from "react-slick";
import Items from "../../../Utils/Items";
import { PrimaryBtn, SecondaryBtn } from "../..";
import { FaLink, FaCode } from "react-icons/fa";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholderImage from "../../../assets/placeholder.jpg";
import "./index.css"; // Importing the CSS file

const ProjectDetails = () => {
  const { id } = useParams();
  const [item, setItem] = useState();

  useEffect(() => {
    const filtered = Items.find((item) => item.id === parseInt(id));
    setItem(filtered);
  }, [id]);

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 2,
    autoplay: true,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="parent py-16">
      <h1 className="text-center text-4xl font-medium mt-8">{item?.title}</h1>

      <Slider {...settings}>
        {item?.img?.map((image, index) => (
          <div key={index} className="mt-6">
            <div className="carousel-item">
              <LazyLoadImage
                placeholderSrc={placeholderImage}
                src={image}
                className="project_image"
              />
            </div>
          </div>
        ))}
      </Slider>
      <p className="description">
        <span className="description-title">Description: </span>
        {item?.description}
      </p>
      <div className="features-section">
        <h2 className="section-title">Features:</h2>
        <ul className="feature-list">
          {item?.features?.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      <div className="technologies-section">
        <h2 className="section-title">Tools & Technologies:</h2>
        <ul className="technology-list">
          {item?.technologies?.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
      <div className="button-group">
        <a href={item?.liveLink} className="btn-link" target="blank">
          <PrimaryBtn>
            <span>Visit Now</span>
            <span>
              <FaLink />
            </span>
          </PrimaryBtn>
        </a>
        <a href={item?.codeLink} className="btn-link" target="blank">
          <SecondaryBtn className="btn-secondary">
            <span>Source Code</span>
            <span>
              <FaCode />
            </span>
          </SecondaryBtn>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetails;
