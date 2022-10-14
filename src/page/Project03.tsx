import React from "react";
import "./Project03.css";

const Project03 = () => {
  const [checked, setChecked] = React.useState(false);

  console.log("checked", checked);

  return (
    <div className="container">
      <div className="wrapper">
        <input
          type="checkbox"
          className={`toggleMe ${checked ? "checked" : ""}`}
          onClick={() => setChecked(!checked)}
        />
        <div className={"circle"}></div>
        <div className={"circleOther"}></div>
        <div className={"flexDiv"}>
          <div></div>
          <div style={{ transitionDelay: "20ms" }}></div>
          <div style={{ transitionDelay: "40ms" }}></div>
          <div style={{ transitionDelay: "60ms" }}></div>
          <div style={{ transitionDelay: "80ms" }}></div>
          <div style={{ transitionDelay: "100ms" }}></div>
          <div style={{ transitionDelay: "120ms" }}></div>
          <div style={{ transitionDelay: "140ms" }}></div>
          <div style={{ transitionDelay: "160ms" }}></div>
          <div style={{ transitionDelay: "180ms" }}></div>
        </div>
      </div>
    </div>
  );
};

export default Project03;
