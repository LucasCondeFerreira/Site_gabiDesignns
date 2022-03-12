import React from "react";
import { styled } from "@mui/material/styles";

const Text = styled("h3")`
  color: ${({ theme }) => theme.palette.primary.light};
  font-size: ${({ theme }) => theme.typography.h6.fontSize};
  text-transform: uppercase;
  text-align: center;
  align-items: center;
  margin: 0;
  padding: 0;
`;

const DivRange = styled("div")`
  background-color: ${({ theme }) => theme.palette.primary.main};
  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 45px;
  padding: 0.7rem 0 0;
`;

interface RangeProps {
  text?: string;
}

const Range: React.FC<RangeProps> = (props) => {
  return (
    <DivRange>
      <Text>{props.text}</Text>
    </DivRange>
  );
};

export default Range;
