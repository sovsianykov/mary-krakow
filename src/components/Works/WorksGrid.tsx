import React, { FC, memo } from "react";
import { Grid } from "@mui/material";
import { images } from "@/assets/mock";
import WorksItem from "@/components/Works/WorksItem";

const WorksGrid: FC = () => {
  return (
    <Grid container spacing={2} mt={2} style={{ width: "100%" }}>
      {images.map((el) => (
        <Grid item xs={12} sm={6} lg={4} key={el.id}>
          <WorksItem image={el} />
        </Grid>
      ))}
    </Grid>
  );
};

export default memo(WorksGrid);
