import { Box, Grid, Link } from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { FC, useEffect } from "react";
import { Slide } from "react-slideshow-image";

import "react-slideshow-image/dist/styles.css";
import styles from "./ProductSlideshow.module.css";

interface Props {
  images: string[];
  seconds: number;
  height: number;
  width: number;
}

export const ProductSlideshow: FC<Props> = ({
  images,
  seconds,
  height,
  width,
}) => {
  return (
    <Slide easing="ease" duration={seconds}>
      {images.map((image) => {
        return (
          <div className={styles["each-slide"]} key={image}>
            <Grid container>
              <Grid item justifyContent="center">
                <Image width={width} height={height} src={image} alt={image} />
              </Grid>
            </Grid>
          </div>
        );
      })}
    </Slide>
  );
};
