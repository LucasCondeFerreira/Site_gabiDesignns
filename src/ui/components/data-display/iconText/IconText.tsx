import React from "react";
import { styled } from "@mui/material/styles";
import { H2Black, H4Black } from "@components/data-display/text/Tittle";
import { ParagraphBlack } from "@components/data-display/text/Paragraph";

const DivIcones = styled("div")`
  display: flex;
  flex-direction: column;
  padding: 0 20px;
  width: 340px;
  min-height: 270px;

  justify-content: center;
  align-items: center;
  text-align: center;

  columns: 1;

  > span > h2 {
    -webkit-text-stroke: 2px ${({ theme }) => theme.palette.primary.main};
    color: transparent;
  }
  @media (max-width: 768px) {
    margin-top: 3rem;
    margin-bottom: 5rem;
    min-height: 1px;

    > span > p {
      display: none;
    }
  }

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
  max-height: 190px;
  min-height: 190px;
  margin-bottom: 1rem;
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
      <ParagraphBlack>{props.text}</ParagraphBlack>
    </DivIcones>
  );
};

export default Icon;
