import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header.jsx";
import { SectionTextoDez } from "@components/surface/SectionText/SectionText";
import Form from "@components/data-display/forms/form.jsx";

const Briefing: NextPage = () => {
  return (
    <div>
      <Range />
      <Header />
      <SectionTextoDez />
      <Form />
    </div>
  );
};

export default Briefing;
