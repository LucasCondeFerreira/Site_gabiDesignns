import React from "react";
import { styled } from "@mui/material/styles";

const P1 = styled("p")`
  font-size: 1.5em;
  text-align: left;
  align-items: left;
  color: ${({ theme }) => theme.palette.primary.light};

  > .black {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;

const P2 = styled("p")`
  font-size: 1.8em;
  text-align: left;
  align-items: left;

  color: ${({ theme }) => theme.palette.primary.dark};
`;

interface ParagraphProps {
  text?: string;
}

export const ParagraphWhite: React.FC<ParagraphProps> = (props) => {
  return (
    //<DivParagraph>
    <P1>{props.children}</P1>
    //</DivParagraph>
  );
};

export const ParagraphBlack: React.FC<ParagraphProps> = (props) => {
  return (
    //<DivParagraph>
    <P2>{props.children}</P2>
    //</DivParagraph>
  );
};
