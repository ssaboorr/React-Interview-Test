import { Flex, Heading, Link, Box } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const SideBarTabs = ({ url, children }) => {
  return (
    <Flex
      m="5"
      p="5"
      borderBottom="2px"
      borderColor="white"
      justifyContent="center"
      alignItems="center"
    >
      <Link
        as={RouterLink}
        to={`${url}`}
        color="white"
        _hover={{ textDecor: "none", color: "teal" }}
      >
        <Heading as="h3" fontSize="xl">
          {children}
        </Heading>
      </Link>
    </Flex>
  );
};

const StatusTabs = ({ num, title, status }) => {

  return (
    <Link _hover={{ textDecor: "none" }}>
      <Flex
        direction="column"
        border="1px solid black"
        m="4"
        p="5"
        w="200px"
        height="100px"
        justifyContent="center"
        alignItems="center"
        bgColor="gray.800"
        _hover={{ bgColor: "gray.600" }}
      >
        <Box
          bgColor={
            num === "1"
              ? "red"
              : num === "2"
              ? "yellow.300"
              : num === "3"
              ? "yellow.600"
              : "green.400"
          }
          px="5"
          py="3"
          rounded="3xl"
        >
          {num}
        </Box>
        <Heading color="white">{title}</Heading>
      </Flex>
    </Link>
  );
};

export { SideBarTabs, StatusTabs };
