import React from "react";
import { styled } from "@mui/material/styles";

const SpanWhite = styled("span")`
  > h1 {
    color: ${({ theme }) => theme.palette.primary.light};
  }
  > h2 {
    color: ${({ theme }) => theme.palette.primary.light};
  }
  > h3 {
    color: ${({ theme }) => theme.palette.primary.light};
  }
  > h4 {
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;
const SpanBlack = styled("span")`
  > h1 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  > h2 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  > h3 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
  > h4 {
    color: ${({ theme }) => theme.palette.primary.dark};
  }
`;
const TT1 = styled("h1")`
  text-transform: uppercase;
  font-size: 5em;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TT2 = styled("h2")`
  color: white;
  font-size: ${({ theme }) => theme.typography.h3.fontSize};
  text-transform: uppercase;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TT3 = styled("h3")`
  color: white;
  font-size: ${({ theme }) => theme.typography.h4.fontSize};
  text-transform: uppercase;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const TT4 = styled("h4")`
  color: white;
  font-size: ${({ theme }) => theme.typography.h5.fontSize};
  font-weight: 400;
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

export const H1White: React.FC<TittleProps> = (props) => {
  return (
    <SpanWhite>
      <TT1>{props.children}</TT1>
    </SpanWhite>
  );
};

export const H2White: React.FC<TittleProps> = (props) => {
  return (
    <SpanWhite>
      <TT2>{props.children}</TT2>
    </SpanWhite>
  );
};

export const H3White: React.FC<TittleProps> = (props) => {
  return (
    <SpanWhite>
      <TT3>{props.children}</TT3>
    </SpanWhite>
  );
};

export const H4White: React.FC<TittleProps> = (props) => {
  return (
    <SpanBlack>
      <TT4>{props.children}</TT4>
    </SpanBlack>
  );
};

export const H1Black: React.FC<TittleProps> = (props) => {
  return (
    <SpanBlack>
      <TT1>{props.children}</TT1>
    </SpanBlack>
  );
};

export const H2Black: React.FC<TittleProps> = (props) => {
  return (
    <SpanBlack>
      <TT2>{props.children}</TT2>
    </SpanBlack>
  );
};

export const H3Black: React.FC<TittleProps> = (props) => {
  return (
    <SpanBlack>
      <TT3>{props.children}</TT3>
    </SpanBlack>
  );
};

export const H4Black: React.FC<TittleProps> = (props) => {
  return (
    <SpanBlack>
      <TT4>{props.children}</TT4>
    </SpanBlack>
  );
};
