import { nanoid } from 'nanoid';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
  list-style: none;
  color: white;
  display: flex;
  flex-flow: row nowrap;
  z-index: 3;
  li {
    padding: 18px 10px;
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #0D2538;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    transition: transform 0.3s ease-in-out;
    li {
      color: #fff;
    }
  }
`;

const items = ['home', 'servicios', 'contacto', 'cursos']
const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      {
        items.map(i => <li key={nanoid()}><a href={`#${i}`}>{i.toUpperCase()}</a></li>)
      }
    </Ul>
  )
}

export default RightNav