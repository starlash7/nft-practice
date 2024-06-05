import { Button, Flex } from "@chakra-ui/react";
import { FC } from "react";
import { useOutletContext } from "react-router-dom";
import { OutletContext } from "../components/Layout";

const MintNft: FC = () => {
  const { mintContract } = useOutletContext<OutletContext>();
  const mintNft = async () => {
    try {
      const response = await mintContract.mintNft();
      const totalSupply = await mintContract.totalSupply();
      console.log(totalSupply);
      console.log(response);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <Flex
      bgColor="red.100"
      w="100%"
      justifyContent={"center"}
      alignItems={"center"}
    >
      <Button onClick={mintNft}>민팅하기</Button>
    </Flex>
  );
};

export default MintNft;
