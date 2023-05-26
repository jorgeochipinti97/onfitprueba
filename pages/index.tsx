import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Head from "next/head";
import { ProductList } from "../components/products";
import { ShopLayout } from "../components/layouts";
import { SliderKeen } from "../components/SliderKeen";
import { IProduct } from "../interfaces";
import { CardSede } from "../components";
import Image from "next/image";
import { useRouter } from 'next/router';

export default function Home() {
  const router = useRouter()


  let populares: IProduct[] = [
    {
      description: '',
      images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678770982/stainless-steel-water-bottle-black-17oz-front-640d672f77c6b_gxmaz7.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770983/stainless-steel-water-bottle-black-17oz-front-640d670f8245a_lj8ojc.jpg'],
      price: 100,
      slug: 'botella_onfit',
      title: 'Botella Onfit',
      type: 'accesorios',
    }, {
      description: '',
      images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678771025/AnyConv.com__D_NQ_NP_960149-MLA53279087293_012023-O_ezgqcy.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678771025/AnyConv.com__D_NQ_NP_960149-MLA53279087293_012023-O_ezgqcy.jpg'],
      price: 100,
      slug: 'caminadora',
      title: 'Caminadora',
      type: 'accesorios',
    }, {
      description: '',
      images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-right-front-640d69387424b_fv2stz.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-left-front-640d6938741ee_tpl9t0.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-back-640d693874322_mqann7.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770960/all-over-print-longline-sports-bra-white-front-640d693874177_rrrvw9.jpg'],
      price: 100,
      slug: 'corpiño_onfit',
      title: 'corpiño onfit',
      type: 'accesorios',
    }, {
      description: '',
      images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678770735/classic-dad-hat-white-front-640d61cc7646a_c94xtv.png', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770732/classic-dad-hat-white-front-640d61cc7637e_bpo49l.png', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770733/classic-dad-hat-black-front-640d61cc7617d_kxghde.png'],
      price: 100,
      slug: 'gorra_onfit',
      title: 'gorra onfit',
      type: 'accesorios',
    }, {
      description: '',
      images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678770971/all-over-print-minimalist-backpack-white-right-640d60e9dfb83_1_wiw9vg.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770971/all-over-print-minimalist-backpack-white-left-640d60e9dfae1_i9xmyt.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770971/all-over-print-minimalist-backpack-white-right-640d60e9dfb83_ooyce4.jpg'],
      price: 100,
      slug: 'mochila_onfit',
      title: 'mochila onfit',
      type: 'accesorios',
    },
    {
      description: '',
      images: ['https://res.cloudinary.com/dcvieavco/image/upload/v1678770993/shaker_gqwwuu.jpg', 'https://res.cloudinary.com/dcvieavco/image/upload/v1678770993/shaker_gqwwuu.jpg'],
      price: 100,
      slug: 'shaker',
      title: 'shaker',
      type: 'accesorios',
    },

  ]
  return (
    <>
      <Head>
        <title>Onfit Ecommerce</title>
      </Head>
      <ShopLayout title="Onfit Ecommerce" pageDescription="">

        <SliderKeen />
        <div data-aos="fade-up">
          <Box sx={{ textAlign: 'center', mb: 5 }} display='flex' justifyContent='center' flexDirection='column' alignItems='center'>
            <Typography sx={{ mt: 4, width: '80%' }} variant='subtitle1'>Descubre los Mejores Productos Fitness de OnFit, la Cadena de Gimnasios Líder en Buenos Aires </Typography>
            <Typography sx={{ mt: 1, width: '80%', fontSize: 15 }} variant='body1'>¡Bienvenido la tienda en línea de OnFit! Te presentamos  nuestra selección de productos de calidad que te ayudarán a alcanzar tus metas  y mantener un estilo de vida saludable.</Typography>
          </Box>
        </div>

        <ProductList products={populares} />


        <Grid container sx={{ mt: 5 }}>
          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-right">


              <Box sx={{ textAlign: 'center' }} display='flex' justifyContent='center' >
                <Image src='https://res.cloudinary.com/dcvieavco/image/upload/v1678770903/all-over-print-recycled-unisex-sports-jersey-white-front-640d682e0e707_fxbjod.png' width={500} height={500} alt='asd' />
              </Box>
            </div>
          </Grid>
          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-left" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <Typography sx={{ mt: 1, width: '80%' }} variant='subtitle1'>Calidad Garantizada por OnFit</Typography>
              <Typography sx={{ mt: 1, width: '80%' }} variant='body1'>Nos comprometemos a ofrecerte la más alta calidad. Trabajamos con proveedores confiables y seleccionamos cada artículo de nuestra tienda con atención para garantizar tu satisfacción y mejorar tu experiencia de entrenamiento.</Typography>
            </div>
          </Grid>

          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-right" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <Typography sx={{ mt: 1, width: '80%' }} variant='subtitle1'>Equipamiento de Última Generación</Typography>
              <Typography sx={{ mt: 1, width: '80%' }} variant='body1'>Descubre nuestra variedad de equipos de vanguardia para entrenamiento funcional, cardio y fuerza. Confía en la calidad y el respaldo de OnFit para disfrutar de una experiencia de gimnasio excepcional.</Typography>
              <Box sx={{ mt: 5 }} justifyContent='center'>
                <Button color='secondary' size='large' onClick={() => router.push('/equipamiento')}>Explora nuestro catálogo</Button>
              </Box>
              <Box sx={{ mt: 5 }}>
                <Button color='secondary' size='large' onClick={() => router.push('/hombre')}>¡Explorar ya!</Button>
              </Box>
            </div>
          </Grid>
          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-left">
              <Box sx={{ textAlign: 'center' }} display='flex' justifyContent='center' >
                <Image src='https://res.cloudinary.com/dcvieavco/image/upload/v1678771084/AnyConv.com__D_NQ_NP_984611-MLA31466353739_072019-O_plmihi.jpg' width={500} height={500} alt='asd' />
              </Box>
            </div>
          </Grid>
          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-right">
              <Box sx={{ textAlign: 'center' }} display='flex' justifyContent='center' >
                <Image src='https://res.cloudinary.com/dcvieavco/image/upload/v1678770982/stainless-steel-water-bottle-black-17oz-front-640d672f77c6b_gxmaz7.jpg' width={500} height={500} alt='asd' />
              </Box>
            </div>
          </Grid>
          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-left" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <Typography sx={{ mt: 1, width: '80%' }} variant='subtitle1'>Accesorios de Alto Rendimiento para Potenciar Tu Entrenamiento</Typography>
              <Typography sx={{ mt: 1, width: '80%' }} variant='body1'>Descubre nuestra amplia gama de accesorios de alta calidad que complementarán y potenciarán tu rutina de ejercicios. En OnFit, la cadena de gimnasios líder en Buenos Aires, te ofrecemos una cuidada selección de accesorios diseñados para ayudarte a alcanzar tus metas de acondicionamiento físico de manera efectiva y cómoda.</Typography>
              <Box sx={{ mt: 5 }}>
                <Button color='secondary' size='large' onClick={() => router.push('/accesorios')}>Descubre nuestros accesorios</Button>
              </Box>
            </div>
          </Grid>
          <Grid item sm={6} lg={6} xl={6} >
            <div data-aos="fade-right" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center' }}>
              <Typography sx={{ mt: 1, width: '80%' }} variant='subtitle1'>Suplementos de Calidad para Potenciar Tu Entrenamiento</Typography>
              <Typography sx={{ mt: 1, width: '80%' }} variant='body1'>Descubre nuestra selección de suplementos de alta calidad diseñados para optimizar tu rendimiento y maximizar los resultados de tu entrenamiento. Te ofrecemos una amplia gama de suplementos esenciales, desde proteínas hasta pre-work y más, para ayudarte a alcanzar tus metas fitness de manera efectiva. </Typography>
              <Box sx={{ mt: 5 }}>
                <Button color='secondary' size='large' onClick={() => router.push('/suplementos')}>¡Potenciarme ahora!</Button>
              </Box>
            </div>

          </Grid>
          <Grid item sm={6} lg={6} xl={6} >


            <Box sx={{ textAlign: 'center' }} display='flex' justifyContent='center' >
              <div data-aos="fade-left">
                <Image src='https://res.cloudinary.com/dcvieavco/image/upload/v1678771074/AnyConv.com__colageno_ex4c02.jpg' width={500} height={500} alt='asd' />
              </div>
            </Box>
          </Grid>
        </Grid>

        {/* <Divider sx={{ my: 1, mb: 5 }} />
        <div data-aos="fade-up" style={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100%', textAlign: 'center', }}>
          <Typography variant='h1'>El Lugar Perfecto para Tu Transformación Fitness</Typography>
          <Typography variant='body1' sx={{ width: '80%', mt: 1.5 }}>Nuestras sedes se encuentran quipadas con tecnología de vanguardia y supervisadas por expertos, nuestras instalaciones te brindan un ambiente inspirador para alcanzar tus metas. Únete a nosotros y experimenta el máximo rendimiento en nuestras sedes de OnFit.</Typography>
        </div> */}
        {/* 
        <Grid container spacing={2} sx={{ mt: 2 }} >

          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede name="OBELISCO" address="LAVALLE 925,CABA" />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede name="ALMAGRO" address="AV. CORRIENTES 4573,CABA" />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="COLEGIALES"
                  address="AV. ALVAREZ THOMAS 28,CABA"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="LOMAS DE ZAMORA"
                  address="AV. H. YRIGOYEN 9549"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="FLORES"
                  address="FRAY CAYETANO 53,
CABA"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="PLAZA DE MAYO"
                  address="ESMERALDA 33,
CABA"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="PILAR"
                  address="COL. ESTE PANAMERICANA KM 53,3,"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede name="OLIVOS" address="RICARDO GUTIÉRREZ 1681" />
              </div>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={3} xl={3} lg={3}>
            <Box
              display="flex"
              justifyContent="center"
              sx={{ overflowY: "hidden" }}
            >
              <div data-aos="flip-left">
                <CardSede
                  name="CONGRESO"
                  address="COMBATE DE LOS POZOS 61,
CABA"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede name="LA PLATA" address="C. 46 473" />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="QUILMES"
                  address="C. C. NUEVO QUILMES PLAZA L. 54"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="SAAVEDRA"
                  address="CRISÓLOGO LARRALDE 3929,CABA"
                />
              </div>
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={3}
            xl={3}
            lg={3}

          >
            <Box
              display="flex"
              justifyContent="center"

            >
              <div data-aos="flip-left">
                <CardSede
                  name="MASCHWITZ"
                  address="COL. ESTE, RAMAL ESCOBAR KM 44"
                />
              </div>
            </Box>
          </Grid>
        </Grid> */}
      </ShopLayout>
    </>
  );
}
