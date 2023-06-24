import { Button, HStack, Image, List, ListItem, Spinner} from "@chakra-ui/react";
import useGenre, { Genre } from "../hooks/useGenre";

interface Props {
  onSelectGerne: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenreList = ({selectedGenre, onSelectGerne}: Props) => {
  const { data, isLoading, error } = useGenre();
  if(error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={genre.image_background}
              boxSize={"32px"}
              borderRadius={8}
            />
            <Button fontWeight={genre.id === selectedGenre?.id ? 'bold' : 'normal' } fontSize="lg" variant={'link'} onClick={() => onSelectGerne(genre)}>{genre.name} </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
