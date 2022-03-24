import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header.jsx";
import {
  SectionTextoSeis,
  SectionTextoSete,
} from "@components/surface/SectionText/SectionText";
import Form from "@components/data-display/forms/form.jsx";

const Briefing: NextPage = () => {
  return (
    <div>
      <Range />
      <Header />
      <SectionTextoSeis />
      <Form />
    </div>
  );
};

export default Briefing;
