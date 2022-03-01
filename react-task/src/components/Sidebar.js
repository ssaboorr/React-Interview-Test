import { Link, Flex, Heading } from "@chakra-ui/react";
import { SideBarTabs } from "./NavTabs";

const Sidebar = () => {
  return (
      <Flex
        direction="column"
        gap="3"
        justifyContent="center"
        bgColor="gray.800"
        h="full"
        justifyContent="flex-start"
        alignItems="center"
        p="3"
      >
        <Flex
          mt="6"
          mx="7"
          justifyContent="center"
          alignItems="center"
          borderBottom="1px"
          borderColor="white"
          mb="2"
          py="3"
        >
          <Heading color="white" fontSize="2xl">Agri-Purchase Management</Heading>
        </Flex>
        <SideBarTabs url="/agrimaster">
          Agri-Input Master Maintainance
        </SideBarTabs>
        <SideBarTabs url="/supplier">Supplier Master Maintainance</SideBarTabs>
        <SideBarTabs url="/purchase-request">
          Agri-Input Purchase Request
        </SideBarTabs>
      </Flex>
  );
};

export default Sidebar;
