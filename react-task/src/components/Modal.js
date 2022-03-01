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
} from "@chakra-ui/react";
import { BiLinkExternal } from "react-icons/bi";

function DeatilsModal({ data }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Icon onClick={onOpen} as={BiLinkExternal} w="7" h="7" />

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order Details</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Flex
              direction="column"
              justifyContent="center"
              alignItems="center"
            >
              <Heading mb="3" fontSize="lg">
                {data.category}
              </Heading>
              <Image mb="3" src={data.product_image} w="200px" h="200px" />
              <Text fontSize="lg" mb="2">
                {data.product_description}
              </Text>
              <Text mb="2"> Quantity : {data.quantity}</Text>
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

export default DeatilsModal;
