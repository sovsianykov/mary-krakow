import React, { FC, memo } from "react";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { ImageItem } from "@/components/Works/models";

interface Props {
  image: ImageItem;
}

const Wrapper = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 450px;
  padding: 0;
  background-color: #f1f1f1;

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
`;
const ImageFrame = styled(Box)`
  height: 350px;
  width: 350px;
  overflow: hidden;
  .image {
    width: 350px;
    height: 350px;
  }
`;

const WorksItem: FC<Props> = ({ image }) => {
  return (
    <Wrapper>
      <ImageFrame>
        <Image src={image.src} alt="img1" className="image" />
      </ImageFrame>
      <Box className="text">
        <Typography align="center" className="title">
          {`"\n` + image.title + `"\n`}
        </Typography>
        <Typography variant="subtitle1" align="center" className="desc">
          {image.desc}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default memo(WorksItem);
