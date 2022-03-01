import { Flex, Grid, Heading } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";
import { Route, Routes } from "react-router-dom";
import AgriInputMaster from "./MasterMaintainance";
import SuplierMaintainance from "./SuplierMaintainance";
import PurchaseRequestScreen from "./PurchaseRequestScreen";

const MainScreen = () => {
  return (
    <Flex>
      <Grid templateColumns="1fr 6fr">
        {/* Column 1 side bar */}

        <Sidebar />

        {/* Column 2 */}
        <Flex direction="column">
          <Flex m="5=2" p="2" justifyContent="center">
            <Heading>Agri-Purchase Management</Heading>
          </Flex>
          <Routes>
            <Route path="/agrimaster" element={<AgriInputMaster />} />
            <Route path="/supplier" element={<SuplierMaintainance />} />
            <Route
              path="/purchase-request"
              element={<PurchaseRequestScreen />}
            />
          </Routes>
        </Flex>
      </Grid>
    </Flex>
  );
};

export default MainScreen;
