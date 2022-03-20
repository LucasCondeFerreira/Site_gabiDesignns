import React from "react";
import { styled } from "@mui/material/styles";

const DivHamburguer = styled("div")`
  width: 2rem;
  max-width: 2rem;
  height: 2rem;
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-around;
`;

const DivUm = styled("div")`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  transform-origin: 1px;
`;

const DivDois = styled("div")`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

const DivTres = styled("div")`
  width: 2rem;
  height: 0.25rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme.palette.primary.main};
  transform-origin: 1px;
  transition: all 0.3s linear;
`;

export default function Hamburguer({ isOpen }) {
  return (
    <>
      <DivHamburguer>
        <DivUm className="divum" />
        <DivDois className="divdois" />
        <DivTres className="divtres" />

        <style>{`
          .divum {
            transform: ${isOpen ? "rotate(45deg)" : "rotate(0)"};
            transition: all 0.3s linear;
          }
          .divdois {
            transform: ${isOpen ? "translateX(100%)" : "translateX(0)"};
            opacity: ${isOpen ? 0 : 1};
            transition: all 0.3s linear;
          }
          .divtres {
            transform: ${isOpen ? "rotate(-45deg)" : "rotate(0)"};
            transition: all 0.3s linear;
          }
          @media (max-width: 768px){
          .list {

            flex-flow: column nowrap;
            margin-top: -4.1rem;
            margin-right: -3.5rem;
            padding-top: 10rem;
            padding-bottom: 15rem;
            background-color: rgb( 246, 176 ,188);
            height: 100vh;
            width: 80%;
            float: right;
            position: absolute;
          }
        }
        `}</style>
      </DivHamburguer>
    </>
  );
}
