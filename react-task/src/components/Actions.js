import { Flex, Heading } from "@chakra-ui/react";

const Actions = ({ title, disabled }) => {
  return (
    <Flex
      direction="column"
      border="1px solid black"
      m="1"
      p="5"
      w="200px"
      height="70px"
      justifyContent="center"
      alignItems="center"
      bgColor={disabled ? "gray.300" : "gray.800"}
      _hover={{ bgColor: "gray.600" }}
    >
      <Heading fontSize="lg" color="white">
        {title}
      </Heading>
    </Flex>
  );
};

export { Actions };
