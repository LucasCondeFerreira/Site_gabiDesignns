import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header.jsx";
import {
  SectionTextoSeis,
  SectionTextoSete,
} from "@components/surface/SectionText/SectionText";

const Termos: NextPage = () => {
  return (
    <div>
      <Range />
      <Header />
      <SectionTextoSeis />
      <SectionTextoSete />
    </div>
  );
};

export default Termos;
