import React, { memo } from "react";
import HeroPhoto from "../../components/HeroPhoto/HeroPhoto";
import {Box, Button, Divider, Grid, styled, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/system";

const Wrapper = styled(Grid)<Pick<styleProps, "matches">>`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #763209;
  padding-bottom: 20px;
  .image {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  .text {
    padding: 0 16px;


    .title {
      margin-top: 20px;
      text-align: center;
      font-size: ${({matches}) => matches ? "25px" : "40px"};
      letter-spacing: 0.2rem;
      //font-family: "Chilanka", serif;
    }
    .divider {
      margin-top: 20px;
      background-color: brown;
    }
    .description {
      margin-top: 20px;
      font-size: ${({matches}) => matches ? "18px" : "25px"};
      font-weight: 400;
      letter-spacing: 0.1rem;
    }
    .tel {
      margin-top: 20px;
      text-align: center;
      align-self: center;
      color: brown;
    }
  }
`
interface styleProps {
    matches: boolean;
}

const HomePage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(isMobile)
  return (
    <Wrapper matches={isMobile} container >
      <Grid item xs={12}  className='image'>
        <HeroPhoto />
      </Grid>
      <Grid item xs={12} sm={7} className='text'>
        <Box  className="title">Hello, I'm Mariia! </Box>
          <Divider className='divider'/>
          <p className="description">
              My name is Mariia Ovsianykova. Im illustrator from
              Ukraine. I am a student at the National Academy of Fine
              Arts and Architecture.
          </p>
          <Divider className='divider'/>
      </Grid>
        <Button  style={{ color:"brown" ,marginTop: 10,fontSize:16}} >
            <a href="tel:+48788414264" className='tel'>+48 788-414-264</a >
        </Button>
        <Button  style={{ color:"brown" ,marginTop: 10,fontSize:16}} >
           < a href="mailto:molbert2014@gmail.com">molbert2014@gmail.com</a>
        </Button>
    </Wrapper>
  );
};

export default memo(HomePage);
