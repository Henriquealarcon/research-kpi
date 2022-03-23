import React from 'react';
import { NavHeader, Image, TextKpi } from '../styles/navBar.styles';

export default function NavBar() {
  return (
    <NavHeader>
      <Image src="https://www.kpis.tech/assets/images/logo.svg" />
      <TextKpi>Key People Insights</TextKpi>
    </NavHeader>

  );
}
