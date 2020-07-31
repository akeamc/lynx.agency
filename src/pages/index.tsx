import Layout from "../components/containers/Layout";
import Hero from "../components/containers/Hero";
import { SmallTitle, BigTitle } from "../components/atomics/typography";

export default function Home() {
  return (
    <Layout>
      <Hero>
        <BigTitle>Yet another software agency.</BigTitle>
        <SmallTitle>
          Founded in 2015, Lynx designs, develops and deploys software solutions
          for everyone.
        </SmallTitle>
      </Hero>
    </Layout>
  );
}
