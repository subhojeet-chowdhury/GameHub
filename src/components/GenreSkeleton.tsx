import { HStack, Skeleton, VStack } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <HStack>
      <Skeleton boxSize="36px" borderRadius={6} />
      <VStack align="start" spacing={1}>
        <Skeleton h="12px" w="100px" />
        <Skeleton h="10px" w="80px" />
      </VStack>
    </HStack>
  );
};

export default GenreSkeleton;
