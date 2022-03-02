import React from "react";
import { styled } from "@mui/material/styles";
import { Container } from "@mui/material";

const Text = styled("h2")``;

const DivRange = styled("div")`
  background-color: pink;

  -webkit-box-flex: 0;
  -ms-flex: 0 0 100%;
  flex: 0 0 100%;
  max-width: 100%;
  min-height: 20px;
`;

interface RangeProps {
  text?: string;
}

const Range: React.FC<RangeProps> = (props) => {
  return (
    <DivRange>
      <Container>
        <Text>{props.text}</Text>
      </Container>
    </DivRange>
  );
};

export default Range;
