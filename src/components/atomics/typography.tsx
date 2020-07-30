import styled from "styled-components";

export const BigTitle = styled.h1`
  font-size: calc(36px + 31 * ((100vw - 320px) / 680));
  letter-spacing: -0.04em;
  line-height: 100%;
  margin: 0 0 1em;
`;

export const SmallTitle = styled.p`
  font-size: 0.8125rem;
  letter-spacing: 0.02em;
  line-height: 180%;
  max-width: 350px;
  margin: 0;
`;
