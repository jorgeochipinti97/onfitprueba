import React from "react";
import { Card, Box, Typography, Button } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { FC } from "react";
import Image from "next/image";

interface Props {
  name: string;
  address: string;
}

export const CardSede: FC<Props> = ({ name, address }) => {
  return (
    <Card sx={{ width: 300, p: 1, height: 235,overflowY:'hidden',my:1 }}>
        <Box display='flex' justifyContent='center' sx={{overflowY:'hidden'}}>
            <Image src='/icon.png' height={100} width={100} alt='logo'/>
        </Box>
      <Box display="flex" justifyContent="center" sx={{overflowY:'hidden'}}>
        <Box display="flex" sx={{ mt: 1 }}>
          <LocationOnIcon sx={{color:'red'}} />
          <Typography variant="h5">{name}</Typography>
        </Box>
      </Box>
      <Typography variant="subtitle1" sx={{ textAlign: "center",overflowY:'hidden' }}>
        {address}
      </Typography>
    </Card>
  );
};
