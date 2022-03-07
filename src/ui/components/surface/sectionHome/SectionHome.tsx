import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";
import { H1 } from "@components/data-display/text/Tittle";
import { Paragraph } from "@components/data-display/text/Paragraph";

const DivHome = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-left: 90px;

  min-height: 820px;

  background-image: url("/images/background.jpg");
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivTexto = styled("div")`
  width: 50%;
  margin: 0 auto;
  padding-top: 12rem;
  justify-content: end;
`;

interface HomeProps {}

const Home: React.FC<HomeProps> = (props) => {
  return (
    <DivHome>
      <DivTexto>
        <H1>heyy heyy</H1>
        <Paragraph>
          AQUI TRABALHAMOS COM MUITA QUALIDADE E AMOR PELO QUE É FEITO,
          ATUALMENTE TEMOS TRÊS PACOTES DE IDENTIDADE VISUAL. CADA UM DELES TEM
          SEUS PROPRIOS ITENS PARA TORNAR SUA MARCA NOTAVEL DENTRO DO MERCADO.
          PARA NÓS VOCÊ É ESPECIAL E SUA MARCA É RELEVANTE, ENTAO APÓS SOLICITAR
          ALGUM DOS PACOTES ABAIXO VOCE IRA PARA O NOSSO WHATSAPP E LÁ
          CONVERSAREMOS SOBRE TODAS AS SUAS DUVIDAS.
        </Paragraph>
      </DivTexto>
    </DivHome>
  );
};

export default Home;
