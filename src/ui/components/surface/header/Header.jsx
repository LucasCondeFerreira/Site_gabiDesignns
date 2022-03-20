import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Hamburguer from "@components/data-display/especificElements/haburguerMenu/HamburguerMenu.jsx";

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

  @media (max-width: 768px) {
    padding: 0;
    padding-right: 3rem;
  }
`;

const Nav = styled("nav")`
  padding-top: 20px;
  background: transparent;
  -webkit-box-flex: 0;
  -ms-flex: 0 0 59%;
  flex: 0 0 59%;
  width: 59%;
  display: flex;

  @media (max-width: 768px) {
    justify-content: flex-end;

    > ul.sumir {
      display: none;
    }
  }
  @media (min-width: 769px) {
    > ul.list {
      display: none;
    }
    > ul.sumir {
      width: 100%;
    }
  }
`;

const Ul = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  float: right;
  background: transparent;
  margin: 2rem 0;
  padding: 0 25px;
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

const DivHamburguer = styled("div")`
  display: none;

  @media (max-width: 768px) {
    display: fixed;
    margin-top: 10px;
    margin-left: 10px;
    z-index: 10;
    justify-content: flex-end;
    padding-top: 1rem;
  }
`;

export default function Header() {
  const [hamburguerOpen, setHamburguerOpen] = useState(false);

  const toggleHamburguer = () => {
    setHamburguerOpen(!hamburguerOpen);
  };
  return (
    <DivHeader>
      <DivImg>
        <Img src="/images/logoGabi.png" alt="Logo do site de design" />
      </DivImg>
      <Nav>
        <Ul className="sumir">
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
        <Ul className="list">
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
        <style>{`
          .list {
            display: ${hamburguerOpen ? "flex" : "none"};
          }
            @media (max-width: 768px) {
              .sumir{
                display:none;
              }
            }
        `}</style>

        <DivHamburguer onClick={toggleHamburguer}>
          <Hamburguer isOpen={hamburguerOpen} />
        </DivHamburguer>
      </Nav>
    </DivHeader>
  );
}

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

export const HeaderWhite = () => {
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
