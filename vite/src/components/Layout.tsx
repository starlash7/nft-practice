import { Flex } from "@chakra-ui/react";
import { FC, useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import { JsonRpcSigner } from "ethers";
import { Contract } from "ethers";

export interface OutletContext {
  mintContract: Contract;
}

const Layout: FC = () => {
  const [signer, setSigner] = useState<JsonRpcSigner | null>(null);
  const [mintContract, setMintContract] = useState<Contract | null>(null);

  return (
    <Flex maxW={768} mx="auto" minH="100vh" flexDir="column">
      <Header
        signer={signer}
        setSigner={setSigner}
        setMintContract={setMintContract}
      />
      <Flex flexGrow={1}>
        <Outlet context={{ mintContract }} />
      </Flex>
    </Flex>
  );
};

export default Layout;
