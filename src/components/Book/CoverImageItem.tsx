import React, { FC, memo, useMemo } from "react";
import { Box, styled, Typography } from "@mui/material";
import Image from "next/image";
import { CoverBookImage } from "@/components/Book/models";

interface Props {
  image: CoverBookImage;
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
    display: flex;
    align-items: center;
    justify-content: center;
    .title {
      font-size: 18px;
      letter-spacing: 0.06rem;
      font-weight: 600;
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

const CoverImageItem: FC<Props> = ({ image }) => {
  const q = useMemo(() => `"`, []);
  return (
    <Wrapper>
      <ImageFrame>
        <Image src={image.src} alt={image.title} className="image" />
      </ImageFrame>
      <Box className="text">
        <Typography align="center" className="title">
          {`${q}${image.title}${q}`}
        </Typography>
      </Box>
    </Wrapper>
  );
};

export default memo(CoverImageItem);
