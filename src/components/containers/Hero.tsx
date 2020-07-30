import React from "react";
import Section from "./Section";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
`;

const Hero: React.FunctionComponent<{
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}> = ({ children }) => {
  return (
    <HeroWrapper>
      <Section>{children}</Section>
    </HeroWrapper>
  );
};

export default Hero;
