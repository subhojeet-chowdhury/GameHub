import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}
const GameHeading = ({ gameQuery }: Props) => {
  return (
    <Heading
      as="h1"
      marginBottom={4}
      sx={{
        fontSize: ["2xl", "3xl", "4xl", "5xl"],
      }}
    >
      {gameQuery.platform?.name} {gameQuery.genre?.name} Games
    </Heading>
  );
};

export default GameHeading;
