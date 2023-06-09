import React, {FC, memo, useMemo} from "react";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { ImageItem } from "@/components/Works/models";

interface Props {
  image: ImageItem;
}

const Wrapper = styled(Box)`
  width: 350px;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  height: 450px;
  margin: 0 auto 10px auto;
  padding: 0;

  .text {
    width: 100%;
    height: 100px;
    background-color: #f1f1f1;


    .title {
      padding-top: 15px;
      font-size: 16px;
      letter-spacing: 0.06rem;
      font-weight: 600;
    }

    .desc {
      margin-top: 10px;
      font-size: 12px;
      letter-spacing: 0.07rem;
    }
  }
`;
const ImageFrame = styled(Box)`
  margin: 0 auto;
  height: 350px;
  width: 350px;
  overflow: hidden;
  .image {
    width: 350px;
    height: 350px;
  }
`;

const WorksItem: FC<Props> = ({ image }) => {
    const q = useMemo(()=> `"`,[])
  return (
    <Wrapper>
      <ImageFrame>
        <Image src={image.src} alt="img1" className="image" />
      </ImageFrame>
      <Box className="text">
        <Typography align="center" className="title">
          {  `${q}${image.title}${q}`}
        </Typography>
        <Typography variant="subtitle1" align="center" className="desc">
          {`/${image.desc}/`}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default memo(WorksItem);
