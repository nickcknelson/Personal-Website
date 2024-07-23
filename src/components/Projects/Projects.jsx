import React from "react";
import styles from "./Projects.module.css";

export const Projects = () => {
  return (
    <section className={styles.container}>
      <div className={styles.titleContainer}>
        <h1 className={styles.title}>Projects</h1>
      </div>
      <div className={styles.projects}>
        <div className={styles.project}>
          <h2 className={styles.projectTitle}>Image Viewer and Editor</h2>
          <p className={styles.projectDescription}>
            An image viewer and editor that enables users to effortlessly view
            and edit images.
          </p>
          <a
            href="https://github.com/MrF1ow/Image_Viewer_Editor"
            className={styles.gitHubBtn}
          >
            GitHub
          </a>
        </div>
        <div className={styles.project}>
          <h2 className={styles.projectTitle}>Star Wars Quiz App</h2>
          <p className={styles.projectDescription}>
            A fun Android app that tests you on your knowledge on Star Wars
            lore.
          </p>
          <a href="https://github.com/osu-cs492-599-w24/Star_Wars_Quiz_App" className={styles.gitHubBtn}>
            GitHub
          </a>
        </div>
      </div>
    </section>
  );
};
