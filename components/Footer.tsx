import CopyrightIcon from "@mui/icons-material/Copyright";
import { Box, Button, Divider, Link, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

import Social from "./Social";
import CodeIcon from "@mui/icons-material/Code";
import NextLink from "next/link";
export const Footer = () => {
  const { asPath } = useRouter();
  return (
    <footer>
      <Box>
        <Divider sx={{ my: 1 }} />
        {asPath == "/contacto" ? null : (
          <Box display="flex" justifyContent="center">
            <Social sizeFont={25} />
          </Box>
        )}
        <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
          {/* <NextLink href='/Terms'> */}
          <Box display="flex" justifyContent="center">
            <Button>
              <Typography
                component="h5"
                sx={{ textDecoration: "underline black" }}
              >
                Terminos de servicio
              </Typography>
            </Button>
          </Box>
          {/* </NextLink> */}
        </Box>
        <Box display="flex" justifyContent="center" sx={{ mt: 3 }}>
          <CopyrightIcon sx={{ fontSize: 14 }} />{" "}
          <Typography component="h5"> all rights reserved. Onfit</Typography>
        </Box>
      </Box>
    </footer>
  );
};
