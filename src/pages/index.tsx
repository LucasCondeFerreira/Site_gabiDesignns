import type { NextPage } from "next";
import Range from "@components/esthetic/range/Range";
import Header from "@components/surface/header/Header";
import SectionHome from "@components/surface/sectionHome/SectionHome";

const Home: NextPage = () => {
  return (
    <div>
      <Range text={"Um texto para experimentação"} />
      <Header />
      <SectionHome />
      <Range />
    </div>
  );
};

export default Home;
