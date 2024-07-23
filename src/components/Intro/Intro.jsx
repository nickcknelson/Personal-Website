import React from "react";
import styles from "./Intro.module.css";

import { getImageUrl } from "../../utils";

export const Intro = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Nicholas Nelson</h1>
        <h2 className={styles.text}>Aspiring Software Engineer</h2>
      </div>
      <img
        src={getImageUrl("me/me-photo.jpg")}
        alt="Professional portrait of Nick C.K. Nelson"
        className={styles.meImg}
      ></img>
      <div className={styles.topBlur} />
    </section>
  );
};
