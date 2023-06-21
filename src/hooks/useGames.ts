import useData from "./useData";
import { Genre } from "./useGenres";

interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGamges = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, parent_platforms: selectedPlatform?.id } },
    [selectedGenre, selectedPlatform]
  );

export default useGamges;
