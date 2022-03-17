import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header";
import { SectionIcon } from "@components/surface/SectionIcon/SectionIcon";
import {
  SectionTextoOito,
  SectionTextoNove,
} from "@components/surface/SectionText/SectionText";
import { SectionPrice } from "@components/data-display/especificElements/pageServicos/SectionPrices";

const Home: NextPage = () => {
  return (
    <div>
      <Range />
      <Header />
      <SectionTextoNove />
      <SectionPrice />
      <SectionTextoOito />
      <SectionIcon />
      <Range />
    </div>
  );
};

export default Home;
