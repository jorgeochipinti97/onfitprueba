import { useState, useEffect } from "react";
// import { FullScreenLoading } from '../../components/ui';

import {
  capitalize,
  Box,
  Button,
  Divider,
  InputLabel,
  Select,
  MenuItem,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import { IProduct } from "../../interfaces";
import { sortHigh, sortLow } from "../../utils/sort";
import { ProductCard, ProductList } from ".";
import { ClickHere } from "./Clickhere";
import { useRouter } from "next/router";
import { productos } from "../../utils/productos";






export const ProductFilterPage = () => {
  const products = productos;
  const { asPath } = useRouter();
  const [_productsFiltered, setProductsFiltered] = useState<IProduct[]>([]);
  const [subtype_, setSubtype_] = useState('all')
  const [type_, setType_] = useState('')


  useEffect(() => {
    const allProductos = products.filter(e => e.type == asPath.replace('/', ''))
    setProductsFiltered(allProductos)
    setType_(asPath.replace('/', ''))
    asPath == '/hombre' && setCategories(todasCategoriasHombre)
    asPath == '/mujer' && setCategories(todasCategoriasMujer)
    asPath == '/suplementos' && setCategories(todasCategoriasSuplementos)
    asPath == '/equipamiento' && setCategories(todasCategoriasMaquinas)
    asPath == '/accesorios' && setCategories(todasCategoriasAccesorios)
    console.log(asPath.replace('/', ''))
  }, [])



  const onChangeSubType = (subType__: string) => {
    const subtypeFilter = products.filter(e => e.subtype == subType__ && e.type == type_)
    setProductsFiltered(subtypeFilter)
    setSubtype_(subType__)
  }

  const todasCategoriasHombre = ['remera oversize', 'remera deportiva', 'musculosa', 'buzo', 'short', 'pantalon','medias'];
  const todasCategoriasMujer = ['remera oversize', 'remera deportiva', 'top', 'buzo', 'calza', 'short','medias']
  const todasCategoriasSuplementos = ['proteina', 'creatina', 'quemadores', 'vitaminas',]
  const todasCategoriasMaquinas = ['mancuernas', 'maquinas', 'home']
  const todasCategoriasAccesorios = ['gorros', 'straps', 'cinturones', 'guantes', 'botellas', 'shakers']

  const [categories, setCategories] = useState<string[]>([]);
  const [select_, setSelect_] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <Box sx={{ mt: 7 }}>
        <Box>
          <Divider sx={{ my: 1 }} />
          <Box flex={1} />
        </Box>
        <Box display='flex' justifyContent='center' sx={{ flexWrap: { xs: 'wrap', sm: 'wrap' }, }}>
          {
            categories.map(e => (
              // eslint-disable-next-line react/jsx-key
              <Box key={e} color={subtype_ === e ? 'primary' : 'info'} >
                <Button color={subtype_ === e ? 'secondary' : 'info'} onClick={() => onChangeSubType(e)} >{capitalize(e)}</Button>
              </Box>
            )
            )
          }
        </Box>
        <Box display="flex" justifyContent="space-around">
          <Box>
            <FormControl sx={{ m: 3, minWidth: 120 }}>
              <InputLabel id="select-label">Sort By</InputLabel>
              <Select
                labelId="select-label"
                id="select"
                label="sort by"
                value={select_}
              // onChange={(e) => handleSelectChange(e.target.value)}
              >
                <MenuItem value={"low"}>Price: low to high </MenuItem>
                <MenuItem value={"high"}>Price: high to low </MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box>
            <Input
              sx={{ mt: 5 }}
              className="fadeIn"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Search..."
            />
          </Box>
        </Box>
      </Box>

      <>


        <ProductList products={_productsFiltered} />
      </>
    </>
  );
};
