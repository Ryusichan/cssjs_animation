import React, { useEffect } from "react";
import ProjectLayout from "../layouts/ProjectLayout";

const Project01 = () => {
  useEffect(() => {
    const svgNode = document.getElementById("svg-project02");

    const fePointLightNode = svgNode?.querySelector("fePointLight");
    svgNode?.addEventListener("mousemove", handleMove);
    svgNode?.addEventListener("touchmove", handleMove);
    function handleMove(event: any) {
      fePointLightNode?.setAttribute("x", event.clientX);
      fePointLightNode?.setAttribute("y", event.clientY);
    }
  }, []);

  return (
    // <ProjectLayout>
    <svg
      width="100%"
      height="100%"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
      }}
      id="svg-project02"
    >
      <filter id="light">
        {/* <!-- blur the source image to make bump map less sharp --> */}
        <feGaussianBlur stdDeviation="3" result="blurred"></feGaussianBlur>
        {/* <!-- create bump map based on alpha channel --> */}
        <feColorMatrix
          in="blurred"
          type="luminanceToAlpha"
          result="bumpMap"
        ></feColorMatrix>
        {/* <!-- use bump map for lighting filter --> */}
        <feDiffuseLighting in="bumpMap" surfaceScale="3" result="light">
          <fePointLight x="225" y="150" z="30"></fePointLight>
        </feDiffuseLighting>
        {/* <!-- compose the lighting result with source image using multiplication --> */}
        <feComposite
          in="light"
          in2="SourceGraphic"
          operator="arithmetic"
          k1="1"
          k2="0"
          k3="0"
          k4="0"
        ></feComposite>
      </filter>
      <pattern
        id="pattern1"
        width="450"
        height="300"
        patternUnits="userSpaceOnUse"
      >
        <image
          href="https://res.cloudinary.com/alvov/image/upload/v1484667915/codepen-lighting-experiment_jxj0pq.jpg"
          width="450"
          height="300"
        ></image>
      </pattern>
      <rect
        width="100%"
        height="100%"
        fill="url(#pattern1)"
        filter="url(#light)"
      ></rect>
    </svg>
    // </ProjectLayout>
  );
};

export default Project01;
