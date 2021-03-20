import React from 'react';
import styled from 'styled-components';
import Burger from '../Components/Burger';

const Nav = styled.nav`
  width: 100%;
  position: absolute;
  background-color: transparent;
  height: 55px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  .logo {
    padding: 15px 0;
  }
`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo" />
      <Burger />
    </Nav>
  )
}

export default Navbar