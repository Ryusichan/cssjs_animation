import React from "react";
import ProjectLayout from "../layouts/ProjectLayout";
import styled from "styled-components";
import styles from "./Project02.module.css";

// const Perspective = styled.div`
//   background-color: hsla(0, 0%, 0%, 0.1);
//   background-image: linear-gradient(
//       hsla(0, 0%, 0%, 0.1) 2.5%,
//       transparent 2.5%,
//       transparent 97.5%,
//       hsla(0, 0%, 0%, 0.1) 97.5%
//     ),
//     linear-gradient(
//       90deg,
//       hsla(0, 0%, 0%, 0.1) 2.5%,
//       transparent 2.5%,
//       transparent 97.5%,
//       hsla(0, 0%, 0%, 0.1) 97.5%
//     );
//   background-size: 3em 3em;
//   box-shadow: 0 0 0 0.25em hsla(0, 0%, 0%, 0.2);
//   height: 9em;
//   left: 50%;
//   margin: -7.5em;
//   padding: 3em;
//   position: absolute;
//   top: 50%;
//   transform: perspective(500px) rotateX(45deg) rotateZ(45deg);
//   transform-style: preserve-3d;
//   transition: 1s;
//   width: 9em;
// `;

// const Cube = styled.div`
//   box-shadow: inset 0 0 0 0.25em hsla(0, 0%, 0%, 0.1);
//   content: "";
//   float: left;
//   height: 3em;
//   position: absolute;
//   width: 3em;
//   :after {
//     box-shadow: inset 0 0 0 0.25em hsla(0, 0%, 0%, 0.1);
//     content: "";
//     float: left;
//     height: 3em;
//     position: absolute;
//     width: 3em;
//   }
//   :before {
//     box-shadow: inset 0 0 0 0.25em hsla(0, 0%, 0%, 0.1);
//     content: "";
//     float: left;
//     height: 3em;
//     position: absolute;
//     width: 3em;
//   }

//   /* Top */
//   background-color: #f66;
//   position: relative;
//   transform: rotateZ(0deg) translateZ(3em);
//   transform-style: preserve-3d;
//   transition: 0.25s;
//   /* Left */
//   :after {
//     background-color: #e55;
//     transform: rotateX(-90deg) translateY(3em);
//     transform-origin: 100% 100%;
//   }
//   /* Right */
//   :before {
//     background-color: #d44;
//     transform: rotateY(90deg) translateX(3em);
//     transform-origin: 100% 0;
//   }
//   /* Alternate Color */
//   :nth-child(even) {
//     background-color: #fc6;
//   }
//   :nth-child(even):after {
//     background-color: #eb5;
//   }
//   :nth-child(even):before {
//     background-color: #da4;
//   }

//   /* Animation */
//   @keyframes wave {
//     50% {
//       transform: translateZ(4.5em);
//     }
//   }
//   :nth-child(1) {
//     animation: wave 2s 0.1s ease-in-out infinite;
//   }
//   :nth-child(2) {
//     animation: wave 2s 0.2s ease-in-out infinite;
//   }
//   :nth-child(3) {
//     animation: wave 2s 0.4s ease-in-out infinite;
//   }
//   :nth-child(4) {
//     animation: wave 2s 0.3s ease-in-out infinite;
//   }
//   :nth-child(5) {
//     animation: wave 2s 0.5s ease-in-out infinite;
//   }
//   :nth-child(6) {
//     animation: wave 2s 0.7s ease-in-out infinite;
//   }
//   :nth-child(7) {
//     animation: wave 2s 0.6s ease-in-out infinite;
//   }
//   :nth-child(8) {
//     animation: wave 2s 0.8s ease-in-out infinite;
//   }
//   :nth-child(9) {
//     animation: wave 2s 0.9s ease-in-out infinite;
//   }
// `;

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
    <>
      {/* <input type="radio" id="left" name="rotate">
<label for="left">Left</label>
<input type="radio" id="reset" name="rotate" checked>
<label for="reset">Reset</label>
<input type="radio" id="right" name="rotate">
<label for="right">Right</label>
<input type="radio" id="up" name="rotate">
<label for="up">Up</label>
<input type="radio" id="down" name="rotate">
<label for="down">Down</label> */}

      <form onChange={handleChange}>
        <label htmlFor="left">
          Left
          <input type="radio" id="left" name="rotate" value={"left"} />
        </label>
        <label htmlFor="reset">
          Reset
          <input type="radio" id="reset" name="rotate" value={"reset"} />
        </label>
        <label htmlFor="right">
          Right
          <input type="radio" id="right" name="rotate" value={"right"} />
        </label>

        <label htmlFor="up">
          Up
          <input type="radio" id="up" name="rotate" value={"up"} />
        </label>

        <label htmlFor="down">
          Down
          <input type="radio" id="down" name="rotate" value={"down"} />
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
    </>
  );
};

export default Project02;
