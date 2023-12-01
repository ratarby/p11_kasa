import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/images/banners/banner-about.webp";
import Collapse from "../../components/Collapse/Collapse";
import dropdown  from "../../utils/dropdown.json";

const About = () => {

  return (
    <main>
      <div>
        <Banner title="" image={bannerImage} />
        <div>
          {dropdown.map((about) => (
            <Collapse
              key={about.title}
              title={about.title}
              description={about.description}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default About;
