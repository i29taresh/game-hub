import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaApple,
  FaLinux,
  FaAndroid,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Platform } from "../hooks/useGames";
import { HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMaps = {
    pc: FaWindows,
    xbox: FaXbox,
    playstation: FaPlaystation,
    nintendo: SiNintendo,
    apple: FaApple,
    ios: MdPhoneIphone,
    web: BsGlobe,
    linux: FaLinux,
    android: FaAndroid,
  };
  return (
    <HStack marginY={'10px'}>
      {platforms.map((platform) => (
        <Icon as={iconMaps[platform.slug as keyof IconType]} color={'gray.500'} />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
