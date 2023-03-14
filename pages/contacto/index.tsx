import { ShopLayout } from "../../components/layouts"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import MailIcon from '@mui/icons-material/Mail';
import { Box, Divider, Link } from "@mui/material";
import NextLink from 'next/link';
import Social from "../../components/Social";
import FormQuery from "../../components/FormQuery";

const index = () => {
  return (
    <ShopLayout title='Contact Us' pageDescription="page contact">
      <FormQuery product_="" />
      <Divider sx={{ my: 1 }} />
      <Box display='flex' justifyContent='center'  sx={{mt:7}}>
        <Social sizeFont={30}/>
      </Box>
    </ShopLayout>
  )
}

export default index