import { Text } from "@chakra-ui/react";
import useGamges from "../hooks/useGames";

const GameGrid = () => {
  const { games, error } = useGamges();
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
