import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header";
import {
  SectionTextoSeis,
  SectionTextoSete,
} from "@components/surface/SectionText/SectionText";

const Home: NextPage = () => {
  return (
    <div>
      <Range />
      <Header />
      <SectionTextoSeis />
      <SectionTextoSete />
      <Range />
    </div>
  );
};

export default Home;
