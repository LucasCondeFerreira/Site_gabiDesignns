import React from "react";
import { styled } from "@mui/material/styles";
import Icon from "@components/data-display/iconText/IconText";

const Div = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  display: flex;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  padding: 6rem 0 2rem;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    padding: 4rem 0 0;
  }
`;

const DivContain = styled("div")`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  min-height: 320px;
`;

export const SectionIcon = () => {
  return (
    <Div>
      <DivContain>
        <Icon
          src={"/images/icone-criacao.png"}
          alt={"imagem de design"}
          title={"Criação"}
        />
        <Icon
          src={"/images/icone-briefing.png"}
          alt={"imagem de design"}
          title={"Briefing"}
        />
        <Icon
          src={"/images/icone-batepapo.png"}
          alt={"imagem de design"}
          title={"Bate-papo"}
        />
      </DivContain>
    </Div>
  );
};
