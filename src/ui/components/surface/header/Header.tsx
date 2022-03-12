import React from "react";
import { styled } from "@mui/material/styles";

const DivHeader = styled("div")`
  display: flex;
  z-index: 4;
  background: transparent;
  width: 100%;
  right: 0;
  margin: 0;
  padding: 0;
  float: right;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const Nav = styled("nav")`
  padding-top: 20px;
  background: transparent;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 74.9999%;
  flex: 0 0 74.9999%;
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

const DivImg = styled("div")`
  padding-left: 45px;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 24.9999%;
  flex: 0 0 24.9999%;
`;

const Img = styled("img")`
  width: 90px;
  height: 90px;
`;

const A = styled("a")`
  text-decoration: none;
  background: transparent;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 0;
  padding: 0;
`;

const Header: React.FC = () => {
  return (
    <DivHeader>
      <DivImg>
        <Img src="/images/logoGabi.png" alt="Logo do site de design" />
      </DivImg>
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
