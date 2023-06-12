import { HStack, Image, Button, useColorMode } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
      <Button onClick={toggleColorMode}>Toggle {colorMode === "light" ? "Dark" : "Light"}</Button>
    </HStack>
  );
};

export default NavBar;
