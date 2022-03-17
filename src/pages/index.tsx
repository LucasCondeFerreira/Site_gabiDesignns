import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header, { HeaderWhite } from "@components/surface/header/Header";
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
      <Range />
      <Header />
      <SectionHome />
      <SectionTextoUm />
      <HeaderWhite />
      <SectionTextoDois />
      <SectionTextoTres />
      <SectionIcon />
      <Range />
    </div>
  );
};

export default Home;
