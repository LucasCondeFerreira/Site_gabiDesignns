import type { NextPage } from "next";
import {
  SectionTextoSeis,
  SectionTextoSete,
} from "@components/surface/SectionText/SectionText";

const Termos: NextPage = () => {
  return (
    <div>
      <SectionTextoSeis />
      <SectionTextoSete />
    </div>
  );
};

export default Termos;
