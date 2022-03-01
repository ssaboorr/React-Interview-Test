import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Icon,
  Flex,
  Heading,
  Image,
  Text,
  Link,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
} from "@chakra-ui/react";

import { Actions } from "./Actions";
import { assignSupplier } from "../Actions/productActions";
import ProductTable from "./ProductTable";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import products from "../data/productData";

function AssignModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const assignProduct = useSelector((state) => state.assignProduct);

  const { loading, error, products: prod } = assignProduct;

  return (
    <>
      <Link _hover={{ textDecor: "none" }} onClick={onOpen}>
        <Actions title="Assign Supplier" />
      </Link>
      <Modal size="6xl" isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Assign Supplier</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex>
              <ProductTable />
            </Flex>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AssignModal;
