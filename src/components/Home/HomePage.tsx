import React, { memo } from "react";
import HeroPhoto from "../../components/HeroPhoto/HeroPhoto";
import {Grid, styled, Typography, useMediaQuery} from "@mui/material";
import {useTheme} from "@mui/system";

const Wrapper = styled(Grid)`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #763209;
  .image {
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 100%;
  }
  .text {
    position: relative;
  
    .title {
      font-size: 40px;
      letter-spacing: 0.2rem;
      padding: 10px;
      font-family: "Chilanka", serif;
    }
    .description {
      font-size: 25px;
      font-weight: 400;
      width: 500px;
      height: 300px;
      letter-spacing: 0.1rem;
      text-shadow: 0 0 10px #ffffff;
      z-index: 5;
    }
  }

`


const HomePage = () => {
    const theme = useTheme()
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
    console.log(isMobile)
  return (
    <Wrapper container >
      <Grid item xs={12}  className='image'>
        <HeroPhoto />
      </Grid>
      <Grid item xs={12} sm={7} className='text'>
        <Typography className="title">Hello, I'm Mariia! </Typography>
      </Grid>
    </Wrapper>
  );
};

export default memo(HomePage);
