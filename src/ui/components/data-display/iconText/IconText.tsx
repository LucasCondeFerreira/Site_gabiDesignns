import React from "react";
import { styled } from "@mui/material/styles";
import { H2Black, H4Black } from "@components/data-display/text/Tittle";

const DivIcones = styled("div")`
  display: flex;
  flex-direction: column;

  width: 340px;
  height: 120px;

  justify-content: center;
  align-items: center;
  text-align: center;

  columns: 1;

  :nth-child(even) {
    position: relative;

    ::after {
      content: " ";

      z-index: 1;
      position: absolute;
      right: 0;
      top: 25%;

      height: 37px;
      width: 0.6px;

      background-color: #828282;
    }

    ::before {
      content: " ";

      z-index: 1;
      position: absolute;
      left: 0;
      top: 25%;

      height: 37px;
      width: 0.6px;

      background-color: #828282;
    }
  }
`;
const ImgIcone = styled("img")`
  max-width: 90px;
  max-height: 90px;
`;

interface IconProps {
  src: string;
  alt: string;
  title?: string;
  text?: string;
}

export const Icon: React.FC<IconProps> = (props) => {
  return (
    <DivIcones>
      <ImgIcone src={props.src} alt={props.alt} />
      <H2Black>{props.title}</H2Black>
      <H4Black>{props.text}</H4Black>
    </DivIcones>
  );
};

export default Icon;
