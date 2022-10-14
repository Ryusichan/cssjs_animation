import React from "react";
import ProjectLayout from "../layouts/ProjectLayout";
import styled from "styled-components";
import styles from "./Project02.module.css";

const Project02 = () => {
  const [value, setValue] = React.useState("reset");

  const handleChange = (event: any) => {
    event.preventDefault();
    setValue(event.target.value);
    console.log(value);
  };

  let perspectiveStyle = {
    transform: "perspective(500px) rotateX(45deg) rotateZ(45deg)",
  };

  switch (value) {
    case "left":
      perspectiveStyle.transform =
        "perspective(500px) rotateX(45deg) rotateZ(45deg) rotateY(90deg)";
      break;
    case "right":
      perspectiveStyle.transform =
        "perspective(500px) rotateX(45deg) rotateZ(45deg) rotateY(-90deg)";
      break;
    case "up":
      perspectiveStyle.transform =
        "perspective(500px) rotateX(5deg) rotateZ(45deg)";
      break;
    case "down":
      perspectiveStyle.transform =
        "perspective(500px) rotateX(85deg) rotateZ(45deg)";
      break;
    default:
      perspectiveStyle.transform =
        "perspective(500px) rotateX(45deg) rotateZ(45deg)";
  }

  return (
    <div className={styles.container}>
      <form onChange={handleChange}>
        <label className={styles.label} htmlFor="left">
          Left
          <input
            className={styles.input}
            type="radio"
            id="left"
            name="rotate"
            value={"left"}
          />
        </label>
        <label className={styles.label} htmlFor="reset">
          Reset
          <input
            className={styles.input}
            type="radio"
            id="reset"
            name="rotate"
            value={"reset"}
          />
        </label>
        <label className={styles.label} htmlFor="right">
          Right
          <input
            className={styles.input}
            type="radio"
            id="right"
            name="rotate"
            value={"right"}
          />
        </label>

        <label className={styles.label} htmlFor="up">
          Up
          <input
            className={styles.input}
            type="radio"
            id="up"
            name="rotate"
            value={"up"}
          />
        </label>

        <label className={styles.label} htmlFor="down">
          Down
          <input
            className={styles.input}
            type="radio"
            id="down"
            name="rotate"
            value={"down"}
          />
        </label>
      </form>

      <div className={styles.perspective} style={perspectiveStyle}>
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
        <div className={styles.cube} />
      </div>
    </div>
  );
};

export default Project02;
