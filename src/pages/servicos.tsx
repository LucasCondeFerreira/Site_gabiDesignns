import type { NextPage } from "next";
import { SectionIcon } from "@components/surface/SectionIcon/SectionIcon";
import {
  SectionTextoOito,
  SectionTextoNove,
} from "@components/surface/SectionText/SectionText";
import { SectionPrice } from "@components/data-display/especificElements/pageServicos/SectionPrices";

const Servicos: NextPage = () => {
  return (
    <div>
      <SectionTextoNove />
      <SectionPrice />
      <SectionTextoOito />
      <SectionIcon />
    </div>
  );
};

export default Servicos;
