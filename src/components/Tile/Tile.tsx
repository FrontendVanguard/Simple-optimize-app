import React from "react";

import { TileContainer } from "./Tile.styles";

interface TileProps {
  color: string;
  handleSelectColor: (color: string, isSelected: boolean) => void;
  isSelected: boolean;
}

export const Tile: React.FC<TileProps> = React.memo(
  ({ color, handleSelectColor, isSelected }) => {
    React.useEffect(() => {
      console.log("tile rerender");
    });

    return (
      <TileContainer
        key={color}
        onClick={handleSelectColor.bind(this, color, isSelected)}
        color={color}
        isSelected={isSelected}
      />
    );
  },
  (prevProps: TileProps, nextProps: TileProps) => {
    return prevProps.isSelected === nextProps.isSelected;
  }
);
