import React from "react";

import { Flex } from "components/Flex";
import { Text } from "components/Text";

import { useHistory } from "react-router";

export const Navbar = () => {
  const history = useHistory();

  return (
    <Flex
      flexDirection={{ _: "row-reverse", tablet: "row" }}
      justifyContent="space-between"
      margin={0}
      px={0}
      height={56}
      width={1}
      position="absolute"
      bg="white"
      borderBottom="1px solid lightGray"
    >
      <Flex px={10} alignItems="center" justifyContent="space-between" flex={2}>
        <Text
          onClick={() => history.push("/home")}
          fontSize="large"
          color="black"
          textTransform="uppercase"
          fontWeight={2}
        >
          HOME
        </Text>
      </Flex>
    </Flex>
  );
};

Navbar.defaultProps = {
  navigation: true,
};
