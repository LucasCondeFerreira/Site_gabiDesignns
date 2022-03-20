import React from "react";
import { styled } from "@mui/material/styles";

const DivButtonUm = styled("a")`
  font-size: 18px;
  display: block;

  width: 380px;
  height: 70px;
  margin: 25px auto;

  border: 1px ${({ theme }) => theme.palette.primary.light} solid;
  border-radius: 50px;

  background: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 768px) {
    width: 240px;
    height: 65px;
  }

  :hover {
    transform: translate(0, 5px);
  }

  > h4 {
    width: 100%;
    margin-top: 1.4rem;
    color: ${({ theme }) => theme.palette.primary.main};

    font-size: 1.3em;
    text-align: center;
    align-items: center;
  }
`;

interface ButtonUmProps {
  href: string;
  text?: string;
}

export const ButtonUm: React.FC<ButtonUmProps> = (props) => {
  return (
    <DivButtonUm href={props.href}>
      <h4>{props.text}</h4>
    </DivButtonUm>
  );
};

// Div Button Dois

const DivButtonDois = styled("a")`
  display: block;

  width: 380px;
  height: 70px;
  margin: 25px auto;

  border: 1px ${({ theme }) => theme.palette.primary.light} solid;
  border-radius: 50px;

  background: transparent;

  @media (max-width: 768px) {
    width: 240px;
    height: 65px;
  }

  :hover {
    transform: translate(0, 5px);
  }

  > h4 {
    width: 100%;
    margin-top: 1.4rem;

    font-size: 1.3em;
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.primary.light};
    color: ${({ theme }) => theme.palette.secondary.main};
    text-align: center;
    align-items: center;
  }
`;
interface ButtonDoisProps {
  href: string;
  text?: string;
}

export const ButtonDois: React.FC<ButtonDoisProps> = (props) => {
  return (
    <DivButtonDois href={props.href}>
      <h4>{props.text}</h4>
    </DivButtonDois>
  );
};

// Div button três

const DivButtonTres = styled("a")`
  display: block;

  width: 260px;
  height: 70px;
  margin: 25px auto;
  position: absolute;
  top: 2rem;
  right: 95%;

  border: 1px ${({ theme }) => theme.palette.primary.main} solid;
  border-radius: 50px;

  transform: rotate(-90deg);
  background: transparent;

  @media (max-width: 768px) {
    width: 240px;
    height: 65px;
    top: 2rem;
    left: -30%;
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }

  > h4 {
    width: 100%;
    margin-top: 1.4rem;

    font-size: 1.3em;
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.primary.main};
    color: transparent;
    text-align: center;
    align-items: center;
  }
`;

interface ButtonTresProps {
  href: string;
  text?: string;
}

export const ButtonTres: React.FC<ButtonTresProps> = (props) => {
  return (
    <DivButtonTres href={props.href}>
      <h4>{props.text}</h4>
    </DivButtonTres>
  );
};

// Div button Quatro

const DivButtonQuatro = styled("a")`
  display: block;

  width: 260px;
  height: 70px;
  margin: 25px auto;
  position: absolute;
  top: 15%;
  right: 95%;

  border: 1px ${({ theme }) => theme.palette.primary.main} solid;
  border-radius: 50px;

  transform: rotate(-90deg);
  background: transparent;

  @media (max-width: 768px) {
    width: 240px;
    height: 65px;
  }

  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
    transform: rotate(-90deg) translate(0, -5px);
  }

  > h4 {
    width: 100%;
    margin-top: 1.4rem;

    font-size: 1.3em;
    -webkit-text-stroke: 1px ${({ theme }) => theme.palette.primary.main};
    color: transparent;
    text-align: center;
    align-items: center;
  }
`;

interface ButtonQuatroProps {
  href: string;
  text?: string;
}

export const ButtonQuatro: React.FC<ButtonQuatroProps> = (props) => {
  return (
    <DivButtonQuatro href={props.href}>
      <h4>{props.text}</h4>
    </DivButtonQuatro>
  );
};
