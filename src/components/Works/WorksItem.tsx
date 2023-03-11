import React from 'react';
import {Box, styled, Typography} from "@mui/material";
import Image from "next/image";
import image1 from '../../assets/images/image1.jpg'

const Wrapper = styled(Box)`
 align-self: center; 
 width: 100%;
 height: 450px;
  margin: 5px auto;
  padding:  0;
  background-color: #f1f1f1;
  
  .image {
    width: 350px;
    height: 350px;
  }
  
  .text {
    width: 100%;
    height: 100px;
    .title {
      margin-top: 15px;
      font-size: 16px;
    }
    .desc {
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 0.07rem;
    }
    
    
    
  }
  
  
`


const WorksItem = () => {
    return (
        <Wrapper>
            <Image src={image1} alt="img1" className='image'/>
             <Box className='text'>
                 <Typography  align='center' className="title">
                     {"Mother Of Perpetual.Help Church in Krakow"}
                 </Typography>
                 <Typography variant='subtitle1' align='center' className='desc'>
                     45/28sm, paper, drypoint
                 </Typography>
             </Box>
        </Wrapper>
    );
};

export default WorksItem;
