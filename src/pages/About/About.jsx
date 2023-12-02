import React from "react";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/images/banners/banner-about.webp";
import Collapse from "../../components/Collapse/Collapse";
import dropdown  from "../../utils/dropdown.json";
import styles from "../../pages/About/About.module.css";

const About = () => {

  return (
      <main >
        <Banner title="" image={bannerImage} />
        <div className={styles.about}>
          {dropdown.map((about) => (
            <Collapse
              key={about.title}
              title={about.title}
              description={about.description}
            />
          ))}
        </div>
      </main>
  );
};

export default About;
