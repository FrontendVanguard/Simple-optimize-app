import React from "react";

import { TilesContainer, Title } from "./App.styles";

import { colorNames } from "../../constants";
import { Tile } from "../Tile/Tile";

const App: React.FC = () => {
  const [selectedTiles, setSelectedTiles] = React.useState<string[]>([]);

  const handleSelectColor = (
    selectedImageColor: string,
    isSelected: boolean
  ): void => {
    if (isSelected) {
      setSelectedTiles((prev) =>
        prev.filter((color) => color !== selectedImageColor)
      );
    } else {
      setSelectedTiles((prev) => [...prev, selectedImageColor]);
    }
  };

  return (
    <div>
      <Title>Selected tiles: {selectedTiles.join(", ")}</Title>
      <TilesContainer>
        {colorNames.map((color) => {
          return (
            <Tile
              color={color}
              handleSelectColor={handleSelectColor}
              isSelected={selectedTiles?.includes(color)}
            />
          );
        })}
      </TilesContainer>
    </div>
  );
};

export default App;
