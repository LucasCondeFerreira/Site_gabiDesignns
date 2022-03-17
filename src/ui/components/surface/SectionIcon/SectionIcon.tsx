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
  padding: 10rem 0 0;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivContain = styled("div")`
  display: flex;
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
          src={"/images/icone-teste.png"}
          alt={"imagem de design"}
          text={"Criação de identidade visual, com muita estrategia."}
        />
        <Icon
          src={"/images/icone-teste.png"}
          alt={"imagem de design"}
          text={"Estilo unico e identidade visual memorável."}
        />
        <Icon
          src={"/images/icone-teste.png"}
          alt={"imagem de design"}
          text={"Profissional disponivel durante a criação do seu branding."}
        />
      </DivContain>
    </Div>
  );
};
