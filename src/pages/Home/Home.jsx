import React from "react";
import housing from "../../utils/housing.json";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/images/banners/banner-home.webp";


const  Home = () => {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <div className={styles.containerHousings}>
        {housing.map(item => (
          <Card key={item.id} id={item.id} title={item.title} cover={item.cover} />
        ))}
      </div>
    </main>
  );
}

export default Home;