import { FaWindows, FaPlaystation, FaXbox, FaApple, FaLinux, FaAndroid } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { MdPhoneIphone } from "react-icons/md";
import { IconType } from "react-icons/lib/esm/iconBase";
import { HStack, Icon } from "@chakra-ui/react";
import { Platform } from "../hooks/useGames.ts";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    xbox: FaXbox,
    nintendo: SiNintendo,
    mac: FaApple,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
    web: BsGlobe,
  };

  return (
    <HStack>
      {platforms.map((platform) => (
        <Icon as={iconMap[platform.slug]} color="gray.500" marginY={1} key={platform.id} /> // 1 => 4px in chakra
      ))}
    </HStack>
  );
};

export default PlatformIconList;
