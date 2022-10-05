import React from "react";
import styled from "styled-components";

const ProjectContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #000;
  color: #fff;
  font-size: 2em;
`;

const ProjectLayout = ({ children }: any) => {
  return <ProjectContainer>{children}</ProjectContainer>;
};

export default ProjectLayout;
