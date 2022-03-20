import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header.jsx";

import {
  SectionTextoCinco,
  SectionTextoQuatro,
} from "@components/surface/SectionText/SectionText";

const Infos: NextPage = () => {
  return (
    <div>
      <Range />
      <Header />
      <SectionTextoQuatro />
      <SectionTextoCinco />
      <Range />
    </div>
  );
};

export default Infos;
