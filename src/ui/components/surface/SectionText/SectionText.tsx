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

const Div = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  display: flex;
  max-width: 100%;
  width: 100%;
  margin: 0 auto;
`;

const DivText1 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  margin: 0;
  min-height: 320px;

  background-color: ${({ theme }) => theme.palette.primary.main};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivText2 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 560px;

  padding: 65px 70px;

  background-color: ${({ theme }) => theme.palette.primary.light};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivText3 = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;
  padding-top: 3rem;
  min-height: 320px;

  background-color: ${({ theme }) => theme.palette.secondary.main};
  background-size: contain;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivImg = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 50%;
  flex: 0 0 50%;
  max-width: 50%;
  width: 50%;
  margin: 0;
  min-height: 560px;

  background-image: url(/images/cool_aid.JPG);
  background-size: cover;
  background-position: top left;
  background-repeat: no-repeat;
`;

const DivContain = styled("div")`
  padding-top: 6rem;
  margin: 0 auto;
  width: 820px;
  max-width: 820px;
`;

export const SectionTextoUm = () => {
  return (
    <>
      <DivText1>
        <DivContain>
          <H2White>DESIGN PODEROSO</H2White>
          <ParagraphWhite>
            Todo negócio precisa de uma marca. E não se trata apenas de ter uma
            boa aparência. Queremos contar a sua história; o que você faz, o que
            você ama, o que você acredita e o que você alcançará. Então, vamos
            destacar sua marca e mostrar exatamente quem você é.
          </ParagraphWhite>
        </DivContain>
      </DivText1>
    </>
  );
};

export const SectionTextoDois = () => {
  return (
    <Div>
      <DivText2>
        <H2Black>
          BRANDiNG É <br /> MAiS QUE UMA LOGO
        </H2Black>
        <ParagraphBlack>
          Trata-se de tornar o seu negócio memorável e coerente. Uma grande
          marca tem a capacidade de fazer com que seus clientes confiem no que
          você tem a oferecer - então dê o salto e vamos renomear sua empresa.
          Em Minha promessa para você é tornar esse processo de branding livre
          de estresse e uma experiência agradável do início ao fim.
        </ParagraphBlack>
      </DivText2>
      <DivImg />
    </Div>
  );
};

export const SectionTextoTres = () => {
  return (
    <>
      <DivText3>
        <H1White>
          VOCÊ ESTÁ PRONTO <br /> PARA TER A MELHOR LOGO?
        </H1White>
      </DivText3>
    </>
  );
};
