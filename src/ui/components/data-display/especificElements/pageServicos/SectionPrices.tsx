import React from "react";
import { styled } from "@mui/material/styles";
import {
  H1White,
  H2White,
  H2Black,
} from "@components/data-display/text/Tittle";
import {
  ParagraphWhite,
  ParagraphBlack,
} from "@components/data-display/text/Paragraph";
import { ButtonUm } from "@components/data-display/button/Button";

const DivUm = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: 100%;
  width: 100%;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

const DivDois = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  flex-direction: row-reverse;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.palette.secondary.light};
`;
const DivTres = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  max-width: 100%;
  width: 100%;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.palette.secondary.dark};
`;

const DivText2 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;
  padding: 65px 70px;
  background: transparent;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;

    padding: 65px 35px;
  }
`;

const DivImgUm = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  background-image: url(/images/pattern_rosa.svg);
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const DivImgDois = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  background-image: url(/images/camisa_mulheres.JPG);
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const DivImgTres = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 768px;

  background-image: url(/images/mockup_absorv.JPG);
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;
  }
`;

const DivList = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
  display: flex;
`;

const List = styled("ul")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 49, 9999%;
  flex: 0 0 49, 9999%;
  max-width: 49, 9999%;
  width: 49, 9999%;
  list-style-type: none;

  @media (max-width: 768px) {
    padding-left: 1.3rem;
  }
`;

const Paragraph = styled("p")`
  font-size: 1.1em;
  text-align: start;
  align-items: center;
  color: ${({ theme }) => theme.palette.primary.light};

  @media (max-width: 768px) {
    font-size: 0.9em;
  }
`;

const DivContain = styled("div")`
  padding-top: 6rem;
  margin: 0 auto;
  width: 820px;
  max-width: 820px;
`;

export const SectionPrice = () => {
  return (
    <>
      <DivUm>
        <DivText2>
          <H2White>PACOTE INICIO</H2White>
          <ParagraphWhite>
            Se você é uma pequena empresa que deseja estabelecer sua marca, este
            pacote é perfeito para você. Ele tem todos os fundamentos que você
            precisa para tornar sua identidade coerente. Vamos causar uma forte
            impressão e chamar a atenção de seus clientes
          </ParagraphWhite>
          <DivList>
            <List>
              <Paragraph>
                <li>Logo Primaria</li>
                <li>Variações da logo</li>
                <li>Marcas D’água</li>
                <li>Paleta de cores customizada</li>
              </Paragraph>
            </List>
            <List>
              <Paragraph>
                <li>Manual da marca</li>
                <li>Tipografia</li>
                <li>Pattern</li>
              </Paragraph>
            </List>
          </DivList>
          <ButtonUm href="https://google.com" text={"R$169,00"} />
        </DivText2>
        <DivImgUm />
      </DivUm>
      <DivDois>
        <DivText2>
          <H2White>
            BRANDiNG É <br /> MAiS QUE UMA LOGO
          </H2White>
          <ParagraphWhite>
            A marca de uma empresa é mais do que apenas o logotipo. Toda a
            identidade da sua marca faz com que você seja reconhecido e lembrado
            pelo seu público. Que tudo se soma para criar sua personalidade de
            negócios única. Vamos fazer sua marca se destacar com nosso Pacote
            de Branding Premium!
          </ParagraphWhite>
          <DivList>
            <List>
              <Paragraph>
                <li>O pacote iniciante +</li>
                <li>Submarca</li>
                <li>Icone</li>
                <li>Destaques instagram</li>
                <li>Design de cartões de visita ou sacolas</li>
              </Paragraph>
            </List>
            <List>
              <Paragraph>
                <li>Fundos story</li>
                <li>Criativos feed</li>
                <li>Patterns</li>
                <li>Mockups</li>
              </Paragraph>
            </List>
          </DivList>
          <ButtonUm href="https://google.com" text={"R$358,00"} />
        </DivText2>
        <DivImgDois />
      </DivDois>
      <DivTres>
        <DivText2>
          <H2White>
            BRANDiNG É <br /> MAiS QUE UMA LOGO
          </H2White>
          <ParagraphWhite>
            Nossa marca constitui o que somos e o que queremos que a nossa
            empresa seja ou represente dentro do mercado, hoje em dia no mundo
            digital você precisa de uma marca que lembre a todos quem você e sua
            empresa signiﬁcam. Por isso criamos esse pacote PREMIUM!
          </ParagraphWhite>
          <DivList>
            <List>
              <Paragraph>
                <li>O pacote iniciante +</li>
                <li>Submarca</li>
                <li>Icone</li>
                <li>Destaques instagram</li>
                <li>Design ﬂyers</li>
                <li>Design cartões de visita</li>
                <li>Embalagens e Cartões obrigado</li>
              </Paragraph>
            </List>
            <List>
              <Paragraph>
                <li>Fundos story</li>
                <li>Criativos feed</li>
                <li>Patterns</li>
                <li>Mockups</li>
                <li>Tudo enviado em 5 formatos (PNG,JPG,PDF,AI e SVG)</li>
              </Paragraph>
            </List>
          </DivList>
          <ButtonUm href="https://google.com" text={"R$589,00"} />
        </DivText2>
        <DivImgTres />
      </DivTres>
    </>
  );
};
