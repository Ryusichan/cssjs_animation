import React from 'react';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import Navbar from './Navbar';

// ----------------------------------------------------------------------

// const APP_BAR_MOBILE = 64;
// const APP_BAR_DESKTOP = 92;

const RootStyle = styled.div`
  display: flex;
  min-height: 100%;
  overflow: hidden;
`

const MainStyle = styled.div`
`;

// ----------------------------------------------------------------------

export default function DashboardLayout() {

  return (
    <RootStyle>
      <Navbar />
      <MainStyle>
        <Outlet />
      </MainStyle>
    </RootStyle>
  );
}
