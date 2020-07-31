import React from "react";
import Section from "./Section";
import styled from "styled-components";

const HeroWrapper = styled.div`
  position: relative;
  overflow: hidden;
`;

const HeroContent = styled(Section)`
  margin-top: var(--section-spacing);
`;

const Hero: React.FunctionComponent<{
  children: JSX.Element | JSX.Element[] | (JSX.Element | JSX.Element[])[];
}> = ({ children }) => {
  return (
    <HeroWrapper>
      <HeroContent>{children}</HeroContent>
    </HeroWrapper>
  );
};

export default Hero;
