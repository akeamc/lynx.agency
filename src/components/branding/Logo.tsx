import React from "react";
import styled from "styled-components";

const LogoText = styled.p`
  color: #000000;
  font-weight: 700;
`;

const Logo: React.FunctionComponent<{
  color?: string;
}> = ({ color }) => {
  return <LogoText>Lynx</LogoText>;
};

export default Logo;
