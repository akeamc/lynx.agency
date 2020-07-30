import styled from "styled-components";
import Layout from "../components/containers/Layout";
import Hero from "../components/containers/Hero";
import { SmallTitle, BigTitle } from "../components/atomics/typography";

const Center = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  justify-content: center;
`;

export default function Home() {
  return (
    <Layout>
      <Hero>
        <Center>
          <BigTitle>Yet another software agency.</BigTitle>
          <SmallTitle>
            Founded in 2015, Lynx designs, develops and deploys software
            solutions for everyone.
          </SmallTitle>
        </Center>
      </Hero>
      {/* <Title>A software agency.</Title> */}
    </Layout>
  );
}
