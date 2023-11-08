import About from "../../components/home/about";
import Feature from "../../components/home/feature";
import Intro from "../../components/home/intro";
import Partner from "../../components/home/partner";
import Layout from "../../components/shared/layout";

export default function Home() {
  return (
    <Layout>
      <Intro />
      <Partner />
      <About />
      <Feature />
    </Layout>
  );
}
