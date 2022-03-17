import React from "react";
import { styled } from "@mui/material/styles";

const DivHeader = styled("div")`
  display: flex;
  z-index: 4;
  background: transparent;
  width: 100%;
  right: 0;
  margin: 0;
  padding: 0 3.5rem;
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
  -ms-flex: 0 0 60%;
  flex: 0 0 60%;
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
  -ms-flex: 0 0 40%;
  flex: 0 0 40%;
`;

const Img = styled("img")`
  margin: 18px 0 0;
  height: 65px;
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
            <A href={"/"}>HOME</A>
          </li>
          <li>
            <A href={"/infos"}>INFOS</A>
          </li>
          <li>
            <A href={"/servicos"}>SERVIÇOS </A>
          </li>
          <li>
            <A href={"/termos"}> TERMOS</A>
          </li>
        </Ul>
      </Nav>
    </DivHeader>
  );
};

export default Header;

// HeaderWhite Style

const DivHeaderWhite = styled("div")`
  display: flex;
  width: 100%;
  margin: 0 auto;
  padding: 40px 0;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
`;

const Navigation = styled("nav")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
`;

const List = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  background: transparent;
  margin: 0;
  padding: 0;
  justify-content: center;
  list-style: none;

  gap: 2rem;
`;

const Item = styled("li")`
  display: inline-block;
  border-color: ${({ theme }) => theme.palette.primary.dark};
  border-style: solid;
  border-width: 1px;
  border-radius: 60px;
  padding: 0.5rem 2.5rem;
`;

const Link = styled("a")`
  text-decoration: none;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: 600;
  color: ${({ theme }) => theme.palette.primary.light};
  -webkit-text-stroke: 1px ${({ theme }) => theme.palette.primary.dark};
`;

export const HeaderWhite: React.FC = () => {
  return (
    <DivHeaderWhite>
      <Navigation>
        <List>
          <Item>
            <Link href={"/termos"}>TERMOS</Link>
          </Item>
          <Item>
            <Link href={"/infos"}>INFOS</Link>
          </Item>
          <Item>
            <Link href={"/servicos"}>PACOTES</Link>
          </Item>
          <Item>
            <Link href={"/"}>CONTATO</Link>
          </Item>
        </List>
      </Navigation>
    </DivHeaderWhite>
  );
};
