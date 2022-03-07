import React from "react";
import { styled } from "@mui/material/styles";

const P = styled("p")`
  color: black;
  text-transform: uppercase;
  font-size: 1em;
  text-align: center;
  align-items: center;
`;

interface ParagraphProps {
  text?: string;
}

export const Paragraph: React.FC<ParagraphProps> = (props) => {
  return (
    //<DivParagraph>
    <P>{props.children}</P>
    //</DivParagraph>
  );
};
