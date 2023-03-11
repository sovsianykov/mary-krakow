import React, {FC, memo} from 'react';
import {Box, styled, Typography} from "@mui/material";
import Image from "next/image";
import {ImageItem} from "@/components/Works/models";


interface Props {
    image: ImageItem;
}


const Wrapper = styled(Box)`
 align-self: center; 
 width: 100%;
 height: 450px;
  margin: 5px;
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


const WorksItem:FC<Props> = ({image}) => {
    return (
        <Wrapper>
            <Image src={image.src} alt="img1" className='image'/>
             <Box className='text'>
                 <Typography  align='center' className="title">
                     {`"` + image.title + `"` }
                 </Typography>
                 <Typography variant='subtitle1' align='center' className='desc'>
                     {image.desc}
                 </Typography>
             </Box>
        </Wrapper>
    );
};

export default memo(WorksItem)
