
import Layout from "@/components/Layout/Layout";
import HomePage from "@/components/Home/HomePage";

export async function getStaticProps() {
    return {
        props: {},
    }
}


export default function Home() {
  return (
    <Layout pageTitle="Ovsianykowa">
      <HomePage/>
    </Layout>
  )
}
