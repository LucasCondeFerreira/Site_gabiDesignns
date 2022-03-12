import React from "react";
import { styled } from "@mui/material/styles";

const DivHome = styled("div")`
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  width: 100%;

  min-height: 820px;

  background-image: url("/images/background.JPG");
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

interface HomeProps {}

const SectionHome: React.FC<HomeProps> = (props) => {
  return <DivHome />;
};

export default SectionHome;
