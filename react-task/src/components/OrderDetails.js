import { Flex, Heading, Box, Icon, Image, Text } from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import Orders from "./Orders";
import { CSVLink, CSVDownload } from "react-csv";
import { AiOutlineDownload } from "react-icons/ai";

const OrderDetails = ({ order }) => {
  const [show, setShow] = useState(false);
  const [download, setDownload] = useState(false);

  const downloadHandler = () => {
    setDownload(!download);
  };
  const showDetails = () => {
    setShow(!show);
  };

  return (
    <Flex w="full" direction="column">
      <Flex direction="column" gap="5">
        <Flex
          mt="3"
          p="3"
          bgColor="gray.300"
          w="full"
          direction="row"
          justifyContent="space-between"
        >
          <Flex
            onClick={showDetails}
            justifyContent="space-between"
            alignItems="center"
            mx="4"
          >
            <Heading mx="6" fontSize="lg">
              {order.id}
            </Heading>
            <Icon
              as={show ? AiOutlineCaretUp : AiOutlineCaretDown}
              w="5"
              h="5"
            />
          </Flex>
          <Flex justifyContent="center" alignItems="center" gap="2">
            <Heading fontSize="lg">{order.name}</Heading>
            <Image src={order.image} w="50px" h="70px" />
          </Flex>
          <Flex justifyContent="center" alignItems="center" gap="2">
            <Text>Download</Text>
            <Icon
              onClick={downloadHandler}
              as={AiOutlineDownload}
              w="7"
              h="7"
            />
          </Flex>
        </Flex>
        {download && <CSVDownload data={order.orderDetails} target="_blank" />}

        <Flex>{show && <Orders show data={order.orderDetails} />}</Flex>
      </Flex>
    </Flex>
  );
};

export default OrderDetails;
