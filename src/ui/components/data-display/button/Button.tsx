import React from "react";
import { styled } from "@mui/material/styles";

const DivButtonUm = styled("a")`
  font-size: 18px;
  display: block;

  width: 70%;
  height: 70px;
  margin: 25px auto;

  border: 1px ${({ theme }) => theme.palette.primary.light} solid;
  border-radius: 50px;

  background: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 768px) {
    width: 60%;
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
    width: 65%;
    height: 65px;
  }

  :hover {
    transform: translate(0, 5px);
  }

  > h4 {
    width: 100%;
    margin-top: 1.1rem;

    font-size: 1.3em;
    color: ${({ theme }) => theme.palette.primary.light};
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
  width: 340px;
  height: 70px;
  margin: 3rem auto;
  position: absolute;
  top: 2rem;
  right: 92%;

  border: 1px ${({ theme }) => theme.palette.primary.main} solid;
  border-radius: 50px;

  transform: rotate(-90deg);
  background: transparent;

  :hover {
    background-color: ${({ theme }) => theme.palette.secondary.light};
  }

  > h4 {
    width: 100%;
    margin-top: 1.4rem;

    font-size: 1.3em;
    color: ${({ theme }) => theme.palette.primary.main};
    text-align: center;
    align-items: center;
  }

  @media (max-width: 370px) {
    display: none;
  }

  @media (min-width: 371px) and (max-width: 768px) {
    display: block;
    width: 160px;
    height: 70px;
    margin: 0;
    padding-top: 0.2rem;
    position: absolute;
    top: 16rem;
    left: 0%;

    > h4 {
      width: 100%;
      margin-top: 1.4rem;

      font-size: 0.9em;
      color: ${({ theme }) => theme.palette.primary.main};
      text-align: center;
      align-items: center;
    }
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
    color: ${({ theme }) => theme.palette.primary.main};
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
