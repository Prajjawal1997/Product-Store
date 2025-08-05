import { Button, Container, Flex, HStack, Text ,useColorMode} from "@chakra-ui/react";
import { Link } from "react-router-dom";

import { CiSquarePlus } from "react-icons/ci";
import { GoMoon } from "react-icons/go";
import { IoSunny } from "react-icons/io5";

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4} >
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          bgClip="text"
          fontSize="4xl"
          fontWeight="extrabold"
        >
          <Link to={"/"}>Product Store🛒</Link>
        </Text>

        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <CiSquarePlus fontSize={20} />
            </Button>
            </Link>
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? <GoMoon /> : <IoSunny /> }
            </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default NavBar;
