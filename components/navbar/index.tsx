import { useContext, useState } from "react";
import NextLink from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";

import {
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  Input,
  InputAdornment,
  Link,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  ClearOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import { UiContext } from "../../context";

export const Navbar = () => {
  const { asPath, push } = useRouter();

  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const { toggleSideMenu } = useContext(UiContext);
  //   const { numberOfItems } = useContext(CartContext);

  const onSearchTerm = () => {
    if (searchTerm.trim().length === 0) return;
    push(`/search/${searchTerm}`);
  };

  return (
    <AppBar sx={{ textDecoration: "none", overflow: 'hidden' }}>
      <Toolbar sx={{ textDecoration: "none", overflow: 'hidden', }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
          <Box sx={{ mt: 2, mb: 2 }}>
            {/* <Typography variant="h6">Onfit |</Typography> */}
            <Image src="/logo.png" width={180} height={70} alt="" />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
            className="fadeIn"
            alignSelf='center'
          >
            <NextLink href="/" passHref>
              <Button
                sx={{ textDecoration: "none" }}
                color={asPath === "/" ? "secondary" : "info"}>
                Inicio
              </Button>
            </NextLink>
            <NextLink href="/hombre" passHref>
              <Button color={asPath === "/hombre" ? "secondary" : "info"}>
                Hombres
              </Button>
            </NextLink>
            <NextLink href="/mujer" passHref>
              <Button color={asPath === "/mujer" ? "primary" : "info"}>
                Mujeres
              </Button>
            </NextLink>
            <NextLink href="/suplementos" passHref>
              <Button color={asPath === "/suplemento" ? "secondary" : "info"}>
                Suplementos
              </Button>
            </NextLink>
            <NextLink href="/equipamiento" passHref>
              <Button color={asPath === "/equipamiento" ? "secondary" : "info"}>
                Equipamiento
              </Button>
            </NextLink>
            <NextLink href="/accesorios" passHref>
              <Button color={asPath === "/accesorios" ? "secondary" : "info"}>
                Accesorios
              </Button>
            </NextLink>
            <NextLink href="#" passHref>
              <Button color={asPath === "/medias" ? "secondary" : "info"}>
                Medias
              </Button>
            </NextLink>
            <NextLink href="/faqs" passHref>
              <Button color={asPath === "/faqs" ? "secondary" : "info"}>
                FAQS
              </Button>
            </NextLink>
          </Box>



          {/* Pantallas pantallas grandes */}
          <Box display='flex'>

            {isSearchVisible ? (
              <Input
                sx={{ display: { xs: "none", sm: "flex" } }}
                className="fadeIn"
                autoFocus
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyPress={(e) => (e.key === "Enter" ? onSearchTerm() : null)}
                type="text"
                placeholder="Buscar..."
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton onClick={() => setIsSearchVisible(false)}>
                      <ClearOutlined />
                    </IconButton>
                  </InputAdornment>
                }
              />
            ) : (
              <IconButton
                onClick={() => setIsSearchVisible(true)}
                className="fadeIn"
                sx={{ display: { xs: "none", sm: "flex" } }}
              >
                <SearchOutlined />
              </IconButton>
            )}

            <IconButton>
              <Badge
                // badgeContent={ numberOfItems > 9 ? '+9': numberOfItems  }
                color="secondary"
              >
                <ShoppingCartOutlined />
              </Badge>
            </IconButton>
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
