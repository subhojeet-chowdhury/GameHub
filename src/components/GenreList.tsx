import { List, ListItem, HStack, Image, Text } from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";
import cropURL from "../services/image-url";

const GenreList = () => {
  const { data, error, loading } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

  if (error) return null;

  return (
    <List>
      {loading &&
        skeletons.map((skeleton) => (
          <ListItem key={skeleton} paddingBottom="10px">
            <GenreSkeleton />
          </ListItem>
        ))}
      {data.map((genre) => (
        <ListItem key={genre.id} paddingBottom="10px">
          <HStack>
            <Image boxSize="36px" src={cropURL(genre.image_background)} borderRadius={6} />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
