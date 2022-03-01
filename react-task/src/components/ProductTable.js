import {
  Button,
  Flex,
  Image,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { assignSupplier } from "../Actions/productActions";

import data from "../data/products";
const ProductTable = () => {
  const [supplier, setSupplier] = useState("");
  const dispatch = useDispatch();
  const [prods, setProds] = useState();
  const assignProduct = useSelector((state) => state.assignProduct);
  const { products: newProd } = assignProduct;

  console.log(newProd);

  useEffect(() => {}, [dispatch, newProd]);

  const assingSupplier = (e, id) => {
    e.preventDefault();

    dispatch(assignSupplier(supplier, id));
  };

  return (
    <>
      <Table variant="striped" colorScheme="gray" size="sm">
        <Thead>
          <Tr>
            <Th></Th>
            <Th>Product Category</Th>
            <Th>Product Image</Th>
            <Th>Product Description</Th>
            <Th>Order Quantity</Th>
            <Th>Supplier</Th>
            <Th></Th>
          </Tr>
        </Thead>
        <Tbody>
          {newProd.length < 1
            ? data.map((data) => (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.category}</Td>
                  <Td>
                    <Image src={data.product_image} w="50px" h="70px" />
                  </Td>
                  <Td>{data.product_description}</Td>
                  <Td>{data.quantity}</Td>
                  <Td>
                    <form onSubmit={(e) => assingSupplier(e, data.id)}>
                      <Flex direction="row" gap="2">
                        <Select
                          placeholder={
                            data.supplier === ""
                              ? "Assign Supplier"
                              : data.supplier
                          }
                          onChange={(e) => setSupplier(e.target.value)}
                        >
                          <option value="Alex Lee">Alex Lee</option>
                          <option value="Alex Lee 2">Alex Lee 2</option>
                        </Select>
                        <Button type="submit">Assign</Button>
                      </Flex>
                    </form>
                  </Td>
                </Tr>
              ))
            : newProd.map((data) => (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>{data.category}</Td>
                  <Td>
                    <Image src={data.product_image} w="50px" h="70px" />
                  </Td>
                  <Td>{data.product_description}</Td>
                  <Td>{data.quantity}</Td>
                  <Td>
                    <form onSubmit={(e) => assingSupplier(e, data.id)}>
                      <Flex direction="row" gap="2">
                        <Select
                          placeholder={
                            data.supplier === ""
                              ? "Assign Supplier"
                              : data.supplier
                          }
                          onChange={(e) => setSupplier(e.target.value)}
                        >
                          <option value="Alex Lee">Alex Lee</option>
                          <option value="Alex Lee 2">Alex Lee 2</option>
                        </Select>
                        <Button type="submit">Assign</Button>
                      </Flex>
                    </form>
                  </Td>
                </Tr>
              ))}
        </Tbody>
      </Table>
    </>
  );
};

export default ProductTable;
