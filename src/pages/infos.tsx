import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header";
import {
  SectionTextoCinco,
  SectionTextoQuatro,
} from "@components/surface/SectionText/SectionText";

const Home: NextPage = () => {
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

export default Home;
