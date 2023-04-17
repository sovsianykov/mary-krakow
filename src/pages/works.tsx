import React from 'react';
import Layout from "@/components/Layout/Layout";
import WorksGrid from "@/components/Works/WorksGrid";

export async function getStaticProps() {
    return {
        props: {},
    }
}

const Works = () => {
    return (
        <Layout pageTitle="Art Works">
          <WorksGrid/>
        </Layout>
    );
};

export default Works;
