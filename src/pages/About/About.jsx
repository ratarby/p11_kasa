import React from "react";
import Banner from "../../components/Banner/Banner";
import Dropdown from "../Dropdown/Dropdown";
import bannerImage from "../../assets/images/banners/banner-about.webp";


const About = () => {
  return (
    <main>
      <div>
        <Banner title="" image={bannerImage} />
      
      <Dropdown />
      </div>
      
    
    </main>
  );
};

export default About;
