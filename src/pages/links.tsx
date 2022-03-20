import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Button from "@components/data-display/especificElements/pageLinks/Button";
import Text from "@components/data-display/especificElements/pageLinks/Text";
import { styled } from "@mui/material/styles";

const DivHeader = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  border-bottom: 10px ${({ theme }) => theme.palette.primary.dark} solid;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  position: relative;
  max-width: 1600px;
  min-height: 245px;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    min-height: 180px;
  }

  margin: 0 auto;

  z-index: 1;
  display: flex;
  flex-wrap: wrap;
`;

const DivFooter = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  position: relative;
  max-width: 1600px;

  margin: 0 auto;

  display: flex;
  flex-wrap: wrap;
`;

const DivContent = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;

  position: relative;
  max-width: 1600px;
  min-height: 400px;

  padding-top: 180px;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding-top: 150px;
  }
`;

const H2 = styled("h2")`
  font-size: 1.5em;
  color: ${({ theme }) => theme.palette.primary.main};

  text-transform: uppercase;
  align-items: center;
  text-align: center;

  margin: 40px auto;

  @media (max-width: 768px) {
    font-size: 1.3em;
  }
`;

const Img = styled("img")`
  width: 400px;
  height: 400px;

  @media (max-width: 768px) {
    width: 260px;
    height: 260px;
  }

  border-radius: 100%;

  position: absolute;

  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
`;

const Links: NextPage = () => {
  return (
    <div>
      <Range />
      <DivHeader>
        <Img src="/images/logoGabi.png" alt="" />
      </DivHeader>

      <DivContent>
        <Text
          h1={"Gabi Designs"}
          h3={"designer gráfica"}
          p={
            "Seja bem-vinda(o) ao meu cantinho, vocês está um passo a frente para realizar seu sonho de identidade visual. Meus links estão aqui embaixo esperando por você."
          }
        />
        <Button href={"https://google.com"} text={"Whatsapp"} />
        <Button href={"https://google.com"} text={"E-mail"} />
        <Button href={"https://google.com"} text={"Pinterest"} />
        <Button href={"https://google.com"} text={"Behance"} />
      </DivContent>
      <DivFooter>
        <H2>MAKE YOUR DREAMS COME TRUE</H2>
      </DivFooter>
      <Range />
    </div>
  );
};

export default Links;
