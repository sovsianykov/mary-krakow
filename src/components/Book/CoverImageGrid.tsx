import React, { FC, memo } from "react";
import {Grid, styled, Typography} from "@mui/material";
import {coverImages} from "@/static_data/book_covers_static";
import CoverImageItem from "@/components/Book/CoverImageItem";

const PageTitle= styled(Typography)`
  font-size: 24px;
  letter-spacing: 0.1rem;
  margin: 10px auto;
`


const CoverImageGrid: FC = () => {
  return (<>
        <PageTitle>Book illustration</PageTitle>
    <Grid container spacing={2}  style={{ width: "100%" }}>
      {coverImages.map((el) => (
        <Grid item xs={12} sm={6} lg={4} key={el.id}>
          <CoverImageItem image={el} />
        </Grid>
      ))}
    </Grid>
      </>
  );
};

export default memo(CoverImageGrid);
