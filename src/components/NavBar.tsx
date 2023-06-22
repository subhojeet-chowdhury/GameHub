import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  setSearchText: (searcText: string) => void;
}

const NavBar = ({ setSearchText }: Props) => {
  return (
    <HStack padding="10px">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput setSearchText={setSearchText} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
