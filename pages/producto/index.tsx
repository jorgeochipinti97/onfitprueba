import { useState,  } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";

import { CartContext } from "../../context/cart/CartContext";
import { ShopLayout } from "../../components/layouts";
import { ProductSlideshow } from "../../components/products";
import { IProduct, ICartProduct } from "../../interfaces";
import { capitalizarPrimeraLetraPalabras, currency } from "../../utils";
import NextLink from "next/link";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CurrencyBitcoinIcon from "@mui/icons-material/CurrencyBitcoin";
import { tesloApi } from "../../api";
import { isValidEmail } from "../../utils/validations";
import Image from "next/image";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

import FavoriteIcon from "@mui/icons-material/Favorite";
import { players } from "../../utils/players";
import { RemoveCircleOutline, AddCircleOutline } from "@mui/icons-material";
import FormQuery from "../../components/FormQuery";
import { constants } from "http2";

const ProductPage = () => {
  const product = {
    description: '',
    images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678770982/stainless-steel-water-bottle-black-17oz-front-640d672f77c6b_gxmaz7.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770983/stainless-steel-water-bottle-black-17oz-front-640d670f8245a_lj8ojc.jpg'],
    price: 100,
    slug: 'botella_onfit',
    title: 'Botella Onfit',
    type: 'accesorios',
  }

  const [currentValue, setCurrentValue] = useState(0);
  const addOrRemove = (value: number) => {
    value == -1 && currentValue == 0 ? setCurrentValue(0) : null;
    value == -1 && setCurrentValue(currentValue - 1);
    value == +1 && setCurrentValue(currentValue + 1);
  };

  const [isNoSize, setIsNoSize] = useState<boolean>();
  const [discountPrice, setDiscountPrice] = useState<number>(product.price);
  const [title_, setTitle] = useState<string>("");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isInFavorites, setIsInFavorites] = useState<Boolean>();
  const [playerSelect, SetPlayerSelect] = useState("");

  const [cartNumber, setCartNumber] = useState(0);

  return (
    <ShopLayout title={product.title} pageDescription={product.description}>
      <Box sx={{ mb: 2 }} display="flex" justifyContent={"space-between"}>
        <Box sx={{ m: 2 }}>
          <NextLink href="/productos" passHref>
            <Button color="secondary">Volver</Button>
          </NextLink>
        </Box>
        <Box sx={{ m: 2 }}>
          {isInFavorites ? (
            <FavoriteIcon
              color="error"
              onClick={() => setIsInFavorites(true)}
            />
          ) : (
            <FavoriteBorderIcon
              color="error"
              onClick={() => setIsInFavorites(false)}
            />
          )}
        </Box>
      </Box>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={7}>
          <ProductSlideshow
            images={product.images}
            seconds={7000}
            height={600}
            width={600}
          />
        </Grid>

        <Grid item xs={12} sm={5}>
          <Box display="flex" flexDirection="column">
            {/* titulos */}
            <Box display="flex" justifyContent="center">
              <Typography variant="h1" textAlign={"center"} sx={{ width: 300 }}>
                {capitalizarPrimeraLetraPalabras(product.title)}
              </Typography>
            </Box>

            <Box display="flex" justifyContent="space-around" sx={{ m: 3 }}>
              <NextLink href={`#`} passHref prefetch={false}>
                <Button
                  color="primary"
                  onClick={() => console.log()}
                  sx={{
                    width: "163px",
                    m: 2,
                    pt: 1,
                    pb: 1,
                    textDecoration: "none",
                  }}
                >
                  <Typography variant="button">
                    {`${currency.formattwo(product.price)}`}
                  </Typography>
                </Button>
              </NextLink>
            </Box>
            <Divider sx={{ my: 1 }} />
            <Box sx={{ my: 2 }}>
              <Typography variant="subtitle2" sx={{ m: 2 }}>
                Cantidad
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Box display="flex" alignItems="center">
                  <IconButton onClick={() => addOrRemove(-1)}>
                    <RemoveCircleOutline />
                  </IconButton>
                  <Typography sx={{ width: 40, textAlign: "center" }}>
                    {" "}
                    {currentValue}{" "}
                  </Typography>
                  <IconButton onClick={() => addOrRemove(+1)}>
                    <AddCircleOutline />
                  </IconButton>
                </Box>
              </Box>
            </Box>
            {/* Descripción */}
            <Box sx={{ m: 1 }} display="flex" justifyContent="justify" >
              <Typography variant="subtitle2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum itaque nulla delectus, minima fuga, consequatur vitae esse quaerat nam, provident minus libero. Molestiae nisi voluptatum recusandae vero ducimus, modi non veritatis fugiat veniam fugit odit illo molestias facere dolore soluta nobis placeat repellendus doloremque praesentium optio. Praesentium libero accusamus voluptatibus.</Typography>
            </Box>

            <Box sx={{ mt: 3 }} display="flex" justifyContent="center">
              <Typography variant="body2" align="justify" sx={{ width: 300 }}>
                {product.description}
              </Typography>
            </Box>
          </Box>
          <Box display='flex' justifyContent='center'>
            <Button color="success" size="large">
              Agregar al carrito
            </Button>
          </Box>
        </Grid>
      </Grid>
    </ShopLayout>
  );
};

export default ProductPage;
