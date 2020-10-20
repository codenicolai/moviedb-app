import React from "react";

import { useHistory } from "react-router";

import { Flex } from "components/Flex";
import { Text } from "components/Text";
import { Avatar } from "components/Avatar";

import logo from "assets/logo.svg";

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
      <Flex px={10} alignItems="center" flex={2}>
        <Text
          onClick={() => history.push("/home")}
          fontSize="large"
          color="black"
          textTransform="uppercase"
          fontWeight={1}
          fontFamily=""
        >
          <Avatar img={logo} height="45px" width="45px" />
        </Text>
      </Flex>
    </Flex>
  );
};

Navbar.defaultProps = {
  navigation: true,
};
