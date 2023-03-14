import React from "react";
import Layout from "@/components/Layout/Layout";
import {Button, Grid, styled, Typography} from "@mui/material";
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
    .icon {
      width: 50px;
      height: 50px;
    }
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
            url="https://www.linkedin.com/in/mary-ovsianykova-64b777211/"
            className='icon'
          />
        </Grid>
        <Grid item xs={3} className='item'>
          <SocialIcon
            url="https://www.facebook.com/profile.php?id=100008529724244"
            className='icon'
          />
        </Grid>
        <Grid item xs={3} className='item'>
          <SocialIcon
            url="https://www.instagram.com/marikartist/?fbclid=IwAR2BlmkhtKUmjWFFrdATMbe6DxxZzPWx1_ZDh-OfxWgJpYWnnrdXREByVDc"
            className='icon'
          />
        </Grid>
          <Grid item xs={3} className='item'>
              <SocialIcon
                  url="https://www.behance.net/molbert201ffcf"
                  className='icon'
              />
          </Grid>
      </Wrapper>
        <Button  style={{ color:"brown" ,marginTop: 10,fontSize:16}} >
            <a href="tel:+48788414264" className='tel'>+48 788-414-264</a >
        </Button>
        <Button  style={{ color:"brown" ,marginTop: 10,fontSize:16}} >
            < a href="mailto:molbert2014@gmail.com">molbert2014@gmail.com</a>
        </Button>
    </Layout>
  );
};

export default Contact;
