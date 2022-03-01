import { Flex, Heading, Icon, Modal, useDisclosure } from "@chakra-ui/react";
import { Table, Thead, Tbody, Image, Tr, Th, Td } from "@chakra-ui/react";
import DeatilsModal from "./Modal";

const Orders = ({ show, data }) => {
  return (
    <Flex w="full">
      {show && (
        <Table variant="striped" colorScheme="gray" size="sm">
          <Thead>
            <Tr>
              <Th></Th>
              <Th>Agri-Input Category</Th>
              <Th>Product Image</Th>
              <Th>Product Description</Th>
              <Th>Order Quantity</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((order) => (
              <Tr key={order.id}>
                <Td>{order.id}</Td>

                <Td>{order.category}</Td>
                <Td>
                  <Image src={order.product_image} w="50px" h="70px" />
                </Td>
                <Td>{order.product_description}</Td>
                <Td>{order.quantity}</Td>
                <Td>
                  <DeatilsModal data={order} />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      )}
    </Flex>
  );
};

export default Orders;
