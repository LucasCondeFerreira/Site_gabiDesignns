import React from "react";
import { styled } from "@mui/material/styles";

const DivHeader = styled("div")`
  float: right;
  z-index: 4;
  background: transparent;
  width: 70%;
  right: 0;
  margin: 0;
  padding: 0;

  transform: translate(0, 20px);

  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const Nav = styled("nav")`
  background: transparent;
`;

const Ul = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: transparent;
  margin: 0;
  padding: 0;
  justify-content: space-around;
  list-style: none;

  gap: 28px;
`;

const A = styled("a")`
  text-decoration: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.text.primary};
  margin: 0;
  padding: 0;
`;

const Header: React.FC = () => {
  return (
    <DivHeader>
      <Nav>
        <Ul>
          <li>
            <A href={"https://google.com"}>HOME</A>
          </li>
          <li>
            <A href={"https://google.com"}>SERVIÇOS </A>
          </li>
          <li>
            <A href={"https://google.com"}> POLITICAS </A>
          </li>
        </Ul>
      </Nav>
    </DivHeader>
  );
};

export default Header;
