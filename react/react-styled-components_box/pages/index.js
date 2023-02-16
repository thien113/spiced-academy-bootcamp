import styled from "styled-components";
import BoxWithClassName from "../components/BoxWithClassName/BoxWithClassName.js";
import BoxWithStyledComponents from "../components/BoxWithStyledComponents.js";
export default function HomePage() {
  return (
    <HorizontalBoxes>
      <BoxWithClassName />
      <BoxWithClassName isBlack />
      <BoxWithStyledComponents />
      <BoxWithStyledComponents isBlack />
    </HorizontalBoxes>
  );
}
const HorizontalBoxes = styled.div`
  display: flex;
`;
