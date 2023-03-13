import React, { FC } from "react";
import Head from "next/head";
import Navbar from "@/components/Navigation/Navbar";
import {Container, styled} from "@mui/system";

interface Props {
  children: JSX.Element | JSX.Element [];
  pageTitle: string;
}


const Wrapper = styled(Container)`
   max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0;
  margin: 0 auto;
`




const Layout: FC<Props> = ({ children,pageTitle }) => {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Mary Ovsianykova artist illustrator" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/public/assets/favicon.ico" />
      </Head>
      <main>
        <Navbar />
        <Wrapper>{children}</Wrapper>
      </main>
    </>
  );
};

export default Layout;
