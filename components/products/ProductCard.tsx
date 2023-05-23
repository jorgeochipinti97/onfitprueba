import { FC, useMemo, useState, useEffect } from "react";
import NextLink from "next/link";
import {
  Grid,
  Card,
  CardActionArea,
  CardMedia,
  Box,
  Typography,
  Link,
  Divider,
  Button,
  Chip,
  capitalize,
} from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { IProduct } from "../../interfaces";
import Image from "next/image";
import { currency } from "../../utils";
import { capitalizarPrimeraLetraPalabras } from "../../utils/sort";
import { useRouter } from 'next/router';

interface Props {
  product: IProduct;
}

export const ProductCard: FC<Props> = ({ product }) => {
  const [isInFavorites, setIsInFavorites] = useState<Boolean>();
  const [isHovered, setIsHovered] = useState(false);
  const router = useRouter()



  const productImage = useMemo(() => {
    try {
      return isHovered ? product.images[1] : product.images[0];
    } catch (err) {
      console.log(err);
    }
  }, [isHovered, product.images]);

  const handlePrice = (precio: number, descuento: number) => {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
  };




  return (
    <Grid
      item
      xs={12}
      sm={4}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      sx={{ cursor: 'pointer',overflow:'hidden' }}
    >
      <Box data-aos="flip-left" onClick={()=> router.push('/producto')}   sx={{overflow:'hidden'}}>
        <Box sx={{ m: 1,overflow:'hidden' }}>
          <Link>
            <Box display="flex" justifyContent="center" sx={{overflow:'hidden'}}>
              <CardMedia
                component="div"
                className="fadeIn"
                sx={{overflow:'hidden'}}
              // onLoad={() => setIsImageLoaded(true)}
              >
                <Image
                  width={400}
                  height={400}
                  alt={product.title}
                  src={productImage || ""}
                />
              </CardMedia>
            </Box>
          </Link>
        </Box>
        <Box
          sx={{
            // display: isImageLoaded ? "block" : "none",
            position: "relative",overflow:'hidden'
          }}

        >
          <Box display="flex" justifyContent="center" sx={{overflow:'hidden'}}>
            <Typography
              variant="subtitle1"
              textAlign={"center"}
              fontWeight={700}
              color='primary'
              sx={{}}
            >
              {capitalizarPrimeraLetraPalabras(`${product.title}`)}
            </Typography>
          </Box>
          <Box sx={{overflow:'hidden'}}>
            <Box display="flex" justifyContent="center" sx={{ mb: 1, mt: 2,overflow:'hidden' }}>
              <Link sx={{overflow:'hidden'}}>
                <Button color="primary" sx={{ width: "130px" }}>
                  <Typography
                    variant="body2"
                    textAlign={"center"}
                    fontWeight={700}
                  >
                    {`${currency.formattwo(product.price)}`}
                  </Typography>
                </Button>
              </Link>
            </Box>{" "}
          </Box>
        </Box>

        <Divider sx={{ my: 2 }} />
      </Box>
    </Grid>
  );
};
