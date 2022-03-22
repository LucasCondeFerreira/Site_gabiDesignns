import type { NextPage } from "next";
import { HeaderWhite } from "@components/surface/header/Header.jsx";
import SectionHome from "@components/surface/sectionHome/SectionHome";
import { SectionIcon } from "@components/surface/SectionIcon/SectionIcon";
import {
  SectionTextoUm,
  SectionTextoDois,
  SectionTextoTres,
} from "@components/surface/SectionText/SectionText";

const Home: NextPage = () => {
  return (
    <div>
      <SectionHome />
      <SectionTextoUm />
      <HeaderWhite />
      <SectionTextoDois />
      <SectionTextoTres />
      <SectionIcon />
    </div>
  );
};

export default Home;
