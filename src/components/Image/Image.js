import React from "react";
import styled from "styled-components";

const ImageStyled = styled.img`
  width: 100%;
`;

export const Image = ({ img, ...props }) => {
  return <ImageStyled src={img} {...props} />;
};
