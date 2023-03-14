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
    <AppBar sx={{ textDecoration: "none" }}>
      <Toolbar sx={{ textDecoration: "none" }}>
        <Box sx={{ mt: 2, mb: 2 }}>
          {/* <Typography variant="h6">Onfit |</Typography> */}
          <Image src="/logo.png" width={180} height={70} alt="" />
        </Box>

        <Box flex={1} />

        <Box
          sx={{
            display:  { xs: "none", sm: "block" },
          }}
          className="fadeIn"
        >
          <NextLink href="/" passHref>
            <Button
              sx={{ textDecoration: "none" }}
              color={asPath === "/" ? "primary" : "info"}
            >
              Inicio
            </Button>
          </NextLink>
          <NextLink href="/productos" passHref>
            <Button color={asPath === "/productos" ? "primary" : "info"}>
              Productos
            </Button>
          </NextLink>
          <NextLink href="/contacto" passHref>
            <Button color={asPath === "/contacto" ? "primary" : "info"}>
              Contacto
            </Button>
          </NextLink>
          <NextLink href="/faqs" passHref>
            <Button color={asPath === "/faqs" ? "primary" : "info"}>
              FAQS
            </Button>
          </NextLink>
        </Box>

        <Box flex={1} />

        {/* Pantallas pantallas grandes */}
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

        <Button onClick={toggleSideMenu}>Menu</Button>
      </Toolbar>
    </AppBar>
  );
};
