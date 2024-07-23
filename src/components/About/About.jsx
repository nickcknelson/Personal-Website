import React from "react";
import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <p className={styles.about}>
          I am a computer science student specializing in web and mobile app
          development, currently earning my bachelor's degree at Oregon State
          University. Proficient in object-oriented programming languages such
          as Python, C++ and Kotlin, I also have experience in C, JavaScript,
          and SQL. <br /> <br />
          Collaborating in teams up to 7 members, I contributed to the
          development of multiple software applications. From creating
          information databases using MongoDB to designing image viewing and
          editing tools with Python, these experiences have enhanced my
          problem-solving abilities and my ability to communicate with
          colleagues. <br /> <br />I am constantly learning new programming
          languages and methodologies and always eager to acquire new skills
          that are relevant to web development. I welcome any opportunities to
          further my skills and contribute to impactful projects. Feel free to
          reach out to me for collaboration or new opportunities.
        </p>
      </div>
    </section>
  );
};
