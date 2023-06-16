import { Switch, Text, useColorMode, HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme="green" />
      <Text>{colorMode === "dark" ? "Light Mode" : "Dark Mode"}</Text>;
    </HStack>
  );
};

export default ColorModeSwitch;
