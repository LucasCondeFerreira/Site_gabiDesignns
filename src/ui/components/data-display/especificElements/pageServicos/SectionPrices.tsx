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
  flex-wrap: wrap;

  flex-direction: row;
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
  padding: 65px 3rem;
  background: transparent;

  @media (max-width: 768px) {
    flex: 0 0 100%;
    max-width: 100%;
    width: 100%;

    padding: 65px 3rem;

    > span > h2 {
      font-size: 2em;
    }
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

  background-image: url(/images/BoxMockup.png);
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
  justify-content: space-between;
`;

const List = styled("ul")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 49, 9999%;
  flex: 0 0 49, 9999%;
  max-width: 49, 9999%;
  width: 49, 9999%;
  list-style-type: none;
  padding: 0;
`;

const Paragraph = styled("p")`
  display: inline-block;
  display: flex;
  flex-flow: column nowrap;
  font-size: 1.1em;
  text-align: start;
  color: ${({ theme }) => theme.palette.primary.light};

  > li {
    display: inline-block;
  }
  @media (max-width: 768px) {
    font-size: 1em;
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
          <H2White>PACOTE STARTUP</H2White>
          <ParagraphWhite>
            Se voc?? ?? uma pequena empresa que deseja estabelecer sua marca, este
            pacote ?? perfeito para voc??. Ele tem todos os fundamentos que voc??
            precisa para tornar sua identidade coerente. Vamos causar uma forte
            impress??o e chamar a aten????o de seus clientes
          </ParagraphWhite>
          <DivList>
            <List>
              <Paragraph>
                <li>Logo Primaria</li>
                <li>Varia????es da logo</li>
                <li>Marcas D?????gua</li>
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
          <ButtonUm
            href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1.%20Me%20interessei%20pelo%20pacote%20STARTUP%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
            text={"R$115,00"}
          />
        </DivText2>
        <DivImgUm />
      </DivUm>
      <DivDois>
        <DivText2>
          <H2White>PACOTE MICRO-EMPRESA</H2White>
          <ParagraphWhite>
            A marca de uma empresa ?? mais do que apenas o logotipo. Toda a
            identidade da sua marca faz com que voc?? seja reconhecido e lembrado
            pelo seu p??blico. Em que tudo se soma para criar sua personalidade
            de neg??cios ??nica. Vamos fazer sua marca se destacar com nosso
            Pacote de Branding Micro-Empresa!
          </ParagraphWhite>
          <DivList>
            <List>
              <Paragraph>
                <li>O pacote iniciante +</li>
                <li>Submarca</li>
                <li>Icone</li>
                <li>Destaques instagram</li>
                <li>Design de cart??es de visita ou sacolas</li>
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
          <ButtonUm
            href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1.%20Me%20interessei%20pelo%20pacote%20MICROEMPRESA%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
            text={"R$230,00"}
          />
        </DivText2>
        <DivImgDois />
      </DivDois>
      <DivTres>
        <DivText2>
          <H2White>PACONTE ENTERPRISE</H2White>
          <ParagraphWhite>
            Nossa marca constitui o que somos e o que queremos que a nossa
            empresa seja ou represente dentro do mercado, hoje em dia no mundo
            digital voc?? precisa de uma marca que lembre a todos quem voc?? e sua
            empresa signi???cam. Por isso criamos esse pacote Enterprise!
          </ParagraphWhite>
          <DivList>
            <List>
              <Paragraph>
                <li>O pacote iniciante +</li>
                <li>Submarca</li>
                <li>Icone</li>
                <li>Destaques instagram</li>
                <li>Design ???yers</li>
                <li>Design cart??es de visita</li>
                <li>Embalagens e Cart??es obrigado</li>
              </Paragraph>
            </List>
            <List>
              <Paragraph>
                <li>Fundos story</li>
                <li>Criativos feed</li>
                <li>Patterns</li>
                <li>Mockups</li>
                <li>
                  Tudo enviado em <br /> 5 formatos <br /> (PNG,JPG,PDF,AI e
                  SVG)
                </li>
              </Paragraph>
            </List>
          </DivList>
          <ButtonUm
            href="https://api.whatsapp.com/send?phone=5551990186409&text=Ol%C3%A1%20Gabi.%20%F0%9F%A7%A1.%20Me%20interessei%20pelo%20pacote%20ENTERPRISE%2C%20e%20gostaria%20de%20saber%20mais%20informa%C3%A7%C3%B5es%3A%20(*INSIRA%20AQUI%20o%20que%20gostaria%20de%20saber*)"
            text={"R$328,00"}
          />
        </DivText2>
        <DivImgTres />
      </DivTres>
    </>
  );
};
