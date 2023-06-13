import { Switch, Text, useColorMode, HStack } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <HStack>
      <Switch isChecked={colorMode === "dark"} onChange={toggleColorMode} colorScheme="green" />
      <Text>{colorMode.charAt(0).toUpperCase() + colorMode.slice(1)} Mode</Text>;
    </HStack>
  );
};

export default ColorModeSwitch;
