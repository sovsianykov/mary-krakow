import React from "react";
import Layout from "@/components/Layout/Layout";
import { Grid, styled, Typography } from "@mui/material";
import { SocialIcon } from "react-social-icons";

const Wrapper = styled(Grid)`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 10px;
  .item {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 10px 0;
  }
`;

const Contact = () => {
  return (
    <Layout pageTitle="Contacts">
      <Typography variant="h6" letterSpacing={"0.1rem"} mt={2}>
        Contacts
      </Typography>
      <Wrapper container spacing={2}>
        <Grid item xs={3} className='item'>
          <SocialIcon
              target='_blank'
            url="https://www.linkedin.com/in/mary-ovsianykova-64b777211/"
            style={{ height: 50, width: 50 }}
          />
        </Grid>
        <Grid item xs={3} className='item'>
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100008529724244"
            style={{ height: 50, width: 50 }}
          />
        </Grid>
        <Grid item xs={3} className='item'>
          <SocialIcon
            url="https://www.instagram.com/marikartist/?fbclid=IwAR2BlmkhtKUmjWFFrdATMbe6DxxZzPWx1_ZDh-OfxWgJpYWnnrdXREByVDc"
            style={{ height: 50, width: 50 }}
          />
        </Grid>
          <Grid item xs={3} className='item'>
              <SocialIcon
                  url="https://behance.com/in/jaketrent"
                  style={{ height: 50, width: 50 }}
              />
          </Grid>
          <Grid item xs={3} className='item'>
              <SocialIcon
                  url="https://twitter.com/in/jaketrent"
                  style={{ height: 50, width: 50 }}
              />
          </Grid>
          <Grid item xs={3} className='item'>
              <SocialIcon
                  url="https://mailto.com/in/jaketrent"
                  style={{ height: 50, width: 50 }}
              />
          </Grid>
          <Grid item xs={3} className='item'>
              <SocialIcon
                  url="https://whataup.com/in/jaketrent"
                  style={{ height: 50, width: 50 }}
              />
          </Grid>
          <Grid item xs={3} className='item'>
              <SocialIcon
                  url="https://telegram.com/in/jaketrent"
                  style={{ height: 50, width: 50 }}
              />
          </Grid>
      </Wrapper>
    </Layout>
  );
};

export default Contact;
