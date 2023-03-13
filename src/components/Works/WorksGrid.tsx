import React, { FC, memo } from "react";
import {Grid, styled, Typography} from "@mui/material";
import { images } from "@/art_works/art_works_static";
import WorksItem from "@/components/Works/WorksItem";

const PageTitle= styled(Typography)`
  font-size: 24px;
  letter-spacing: 0.1rem;
  margin: 10px auto;
`


const WorksGrid: FC = () => {
  return (<>
        <PageTitle>Art Works</PageTitle>
    <Grid container spacing={2}  style={{ width: "100%" }}>
      {images.map((el) => (
        <Grid item xs={12} sm={6} lg={4} key={el.id}>
          <WorksItem image={el} />
        </Grid>
      ))}
    </Grid>
      </>
  );
};

export default memo(WorksGrid);
