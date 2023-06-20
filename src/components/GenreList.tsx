import { List, ListItem, HStack, Image, Button } from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import GenreSkeleton from "./GenreSkeleton";
import cropURL from "../services/image-url";

interface Props {
  setGenre: (genre: Genre) => void;
}

const GenreList = ({ setGenre }: Props) => {
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
            <Button fontSize="lg" variant="link" onClick={() => setGenre(genre)}>
              {genre.name.split(" ")[genre.name.split(" ").length - 1]}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
