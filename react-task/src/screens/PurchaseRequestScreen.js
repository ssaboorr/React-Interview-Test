import { Flex, Heading, Text, Box, Link } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Actions } from "../components/Actions";
import AssignModal from "../components/AssignModal";
import { StatusTabs } from "../components/NavTabs";
import OrderDetails from "../components/OrderDetails";
import orderData from "../data/orderData";
import products from "../data/productData";
import { useDispatch } from "react-redux";
import { PRODUCT_ASSIGN_SUPPLIER_RESET } from "../Constants/productConstants";

const PurchaseRequestScreen = () => {
  const [status, setStatus] = useState("Pending");
  const dispatch = useDispatch();
 
  const onclickHanlder = () => {
    dispatch({ type: PRODUCT_ASSIGN_SUPPLIER_RESET });
  };
  return (
    <Flex direction="column" w="full">
      <Flex m="2" p="4" justifyContent="center" w="full">
        <Heading fontSize="2xl">Agri-Input Purchase Request</Heading>
      </Flex>
      <Flex
        direction="row"
        justifyContent="center"
        w="full"
        mb="1"
        borderBottom="2px"
        p="4"
      >
        <Box onClick={() => setStatus("Pending")}>
          <StatusTabs title="Pending" num="1" status={status} />
        </Box>
        <Box onClick={() => setStatus("Executing")}>
          <StatusTabs title="Executing" num="2" status={status} />
        </Box>
        <Box onClick={() => setStatus("Executed")}>
          <StatusTabs title="Executed" num="3" status={status} />
        </Box>
        <Box onClick={() => setStatus("Completed")}>
          <StatusTabs title="Completed" num="4" status={status} />
        </Box>
      </Flex>
      <Flex justifyContent="flex-start" p="10">
        {status === "Pending" && <Heading>Pending...</Heading>}
        {status === "Executing" && (
          <Flex w="full" direction="column">
            <Flex
              direction="row"
              justifyContent="center"
              w="full"
              mb="5"
              borderBottom="2px"
              p="4"
              mb="7"
            >
              <Link onClick={onclickHanlder}>
                <Actions title="Undo Batch" />
              </Link>
              <AssignModal data={products} title="Assign Supplier" />
              <Link _hover={{ textDecor: "none" }}>
                <Actions disabled title="Generate PO" />
              </Link>
            </Flex>

            <Flex gap="60">
              <Heading fontSize="xl">Executing Agri-Input Orders</Heading>
              <Heading fontSize="xl">Batched By</Heading>
            </Flex>

            {orderData.map((order) => (
              <OrderDetails order={order} />
            ))}
          </Flex>
        )}
        {status === "Executed" && <Heading>Executed</Heading>}
        {status === "Completed" && <Heading>Completed</Heading>}
      </Flex>
    </Flex>
  );
};

export default PurchaseRequestScreen;
