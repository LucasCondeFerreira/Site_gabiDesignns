import type { NextPage } from "next";

import {
  SectionTextoCinco,
  SectionTextoQuatro,
} from "@components/surface/SectionText/SectionText";

const Infos: NextPage = () => {
  return (
    <div>
      <SectionTextoQuatro />
      <SectionTextoCinco />
    </div>
  );
};

export default Infos;
