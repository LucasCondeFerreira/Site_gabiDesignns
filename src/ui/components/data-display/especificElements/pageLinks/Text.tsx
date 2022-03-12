import React from "react";
import { styled } from "@mui/material/styles";

const DivText = styled("div")`
  display: block;
`;

const H1 = styled("h1")`
  font-size: 3.2em;
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  align-items: center;
  text-align: center;

  @media (max-width: 560px) {
    font-size: 2.8em;
  }

  margin: 15px 0;
  width: 100%;
`;

const H3 = styled("h3")`
  font-size: 1.5em;
  color: ${({ theme }) => theme.palette.text.primary};

  text-transform: uppercase;
  align-items: center;
  text-align: center;

  margin-bottom: 15px;
  width: 100%;
`;

const P = styled("p")`
  font-size: 1.2em;

  ${({ theme }) => theme.palette.text.primary}

  align-items: center;
  text-align: center;

  margin: 15px auto;
  max-width: 420px;

  @media (max-width: 560px) {
    width: 340px;
    height: 65px;

    margin-bottom: 90px;
  }
`;

interface TextProps {
  h1: string;
  h3: string;
  p: string;
}

export const Text: React.FC<TextProps> = (props) => {
  return (
    <DivText>
      <H1>{props.h1}</H1>
      <H3>{props.h3}</H3>
      <P>{props.p}</P>
    </DivText>
  );
};

export default Text;
