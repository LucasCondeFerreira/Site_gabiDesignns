import React from "react";
import { styled } from "@mui/material/styles";

const DivButton = styled("a")`
  font-size: 18px;
  display: block;

  width: 380px;
  height: 70px;
  margin: 25px auto;

  border: 1px ${({ theme }) => theme.palette.primary.dark} solid;
  border-radius: 50px;
  text-shadow: 0px 1px 0px #4e6079;

  background: ${({ theme }) => theme.palette.primary.dark};

  @media (max-width: 560px) {
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
    text-align: center;
    align-items: center;
    color: #fff;
  }
`;

interface ButtonProps {
  href: string;
  text?: string;
}

export const Button: React.FC<ButtonProps> = (props) => {
  return (
    <DivButton href={props.href}>
      <h4>{props.text}</h4>
    </DivButton>
  );
};

export default Button;
