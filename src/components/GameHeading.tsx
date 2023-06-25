import { Heading } from '@chakra-ui/react'
import { Platform } from '../hooks/useGames'
import { Genre } from '../hooks/useGenre';

interface Props {
    selectedPlatform: Platform | null;
    selectedGenre: Genre | null;
}

const GameHeading = ({selectedGenre, selectedPlatform}: Props) => {
  return (
    <Heading marginY={3} fontSize='5xl'>{selectedPlatform?.name} {selectedGenre?.name} Games</Heading>
  )
}

export default GameHeading