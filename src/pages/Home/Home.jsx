import React from "react";
import housing from "../../utils/housing.json";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";
import bannerImage from "../../assets/images/banners/banner-home.webp";


export default function Home() {
  return (
    <main>
      <Banner title="Chez vous, partout et ailleurs" image={bannerImage} />
      <div className={styles.containerHousings}>
        {housing.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  );
}