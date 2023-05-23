import React from 'react';
import Layout from "@/components/Layout/Layout";
import WorksGrid from "@/components/Works/WorksGrid";
import CoverImageGrid from "@/components/Book/CoverImageGrid";

export async function getStaticProps() {
    return {
        props: {},
    }
}

const Works = () => {
    return (
        <Layout pageTitle="Book Illustration">
            <CoverImageGrid/>
        </Layout>
    );
};

export default Works;
