import React from "react";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";

import Navbar from "./Navbar";

// ----------------------------------------------------------------------

const RootStyle = styled.div`
  display: flex;
  min-height: 100%;
  overflow: hidden;
`;

const MainStyle = styled.div`
  width: 100%;
  height: 100%;
`;

// ----------------------------------------------------------------------

export default function DashboardLayout() {
  return (
    <RootStyle>
      <MainStyle>
        <Outlet />
      </MainStyle>
      <Navbar />
    </RootStyle>
  );
}
