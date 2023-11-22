import React from "react";
import housing from "../../data/housing.json";
import styles from "./Home.module.css";
import Card from "../../components/Card/Card";
import Banner from "../../components/Banner/Banner";

export default function Home() {
  return (
    <main>
      <Banner page="home" />
      <div className={styles.containerHousings}>
        {housing.map(({ id, title, cover }) => (
          <Card key={id} id={id} title={title} cover={cover} />
        ))}
      </div>
    </main>
  );
}