import React from "react";

import styled from "styled-components";

import { Flex } from "components/Flex";
import { Text } from "components/Text";
import { Loading } from "components/Loading";

const StyledButton = styled(Flex)`
  :hover {
    opacity: 100%;
  }
`;

export const Button = ({
  onClick = () => {},
  buttonColor,
  borderColor,
  children,
  loading,
  ...props
}) => {
  return (
    <StyledButton
      onClick={onClick}
      border={`2px solid ${borderColor}`}
      bg={buttonColor}
      height={10}
      py={6}
      px={15}
      justifyContent="center"
      alignItems="center"
      {...props}
    >
      {loading ? (
        <Loading />
      ) : (
        <Text color="white" fontWeight="medium">
          {children}
        </Text>
      )}
    </StyledButton>
  );
};

Button.defaultProps = {
  buttonColor: "black",
  textColor: "white",
  borderColor: "white",
};
