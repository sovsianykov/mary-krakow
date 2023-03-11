import React from 'react';
import hero from '../../assets/maryHero.jpg'
import Image from "next/image";
import {Box, styled} from "@mui/material";

const Frame = styled(Box)`
  width: 350px;
  border-radius: 5px;
  border: 2px solid #763209;
  padding: 5px;
  .img {
    width: 100%;
    height: fit-content;
  }
`




const HeroPhoto = () => {
    return (
        <Frame>
            <Image src={hero} alt="hero" className='img'/>
        </Frame>
    );
};

export default HeroPhoto;
