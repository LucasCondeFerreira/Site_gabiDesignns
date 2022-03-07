import React from "react";
import { styled } from "@mui/material/styles";

const TT1 = styled("h1")`
  color: ${({ theme }) => theme.palette.primary.main};
  text-transform: uppercase;
  font-size: ${({ theme }) => theme.typography.h1.fontSize};
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TT2 = styled("h2")`
  color: white;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TT3 = styled("h3")`
  color: white;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TT4 = styled("h4")`
  color: white;
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

/* const DivTittle = styled("div")`
  background-color: pink;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 60px;

  transform: translate(0, -20px);
  padding: 0.7rem 0 0;
`;*/

interface TittleProps {
  h1?: string;
  h2?: string;
  h3?: string;
  h4?: string;
}

export const H1: React.FC<TittleProps> = (props) => {
  return (
    //<DivTittle>
    <TT1>{props.children}</TT1>
    //</DivTittle>
  );
};

export const H2: React.FC<TittleProps> = (props) => {
  return (
    //<DivTittle>
    <TT2>{props.children}</TT2>
    //</DivTittle>
  );
};

export const H3: React.FC<TittleProps> = (props) => {
  return (
    //<DivTittle>
    <TT3>{props.children}</TT3>
    //</DivTittle>
  );
};

export const H4: React.FC<TittleProps> = (props) => {
  return (
    //<DivTittle>
    <TT4>{props.children}</TT4>
    //</DivTittle>
  );
};
