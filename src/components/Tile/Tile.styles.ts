import styled from "styled-components";

interface TileProps {
  color: string;
  isSelected: boolean;
}
export const TileContainer = styled.div<TileProps>`
  aspect-ratio: 1;

  background-color: ${({ color }) => color};
  opacity: ${({ isSelected }) => (isSelected ? "0.9" : "1")};
  border: ${({ isSelected }) => (isSelected ? "2px solid gray" : "none")};
`;
