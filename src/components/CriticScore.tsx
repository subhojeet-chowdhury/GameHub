import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "red" : "";
  return (
    <Badge paddingX={2} fontSize="14px" colorScheme={color} borderRadius={5}>
      {score}
    </Badge>
  );
};

export default CriticScore;
