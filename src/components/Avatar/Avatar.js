import React from "react";
import styled from "styled-components";
import { Box } from "../Box/Box";

const AvatarStyled = styled(Box)`
  background-image: url(${(props) => props.img});
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
`;

export const Avatar = ({ img, ...props }) => {
  return <AvatarStyled {...props} style={{ backgroundImage: `url(${img})` }} />;
};
