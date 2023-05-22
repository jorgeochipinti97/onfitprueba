import { FC } from 'react';
import Head from 'next/head';

import { Box } from '@mui/system';
import { Navbar } from '../navbar';
import { SideMenu } from '../SideMenu';
import { Footer } from '../Footer';


interface Props {
    title: string;
    pageDescription: string;
    imageFullUrl?: string;
    children:any
}

export const ShopLayout: FC<Props> = ({children, title, pageDescription, imageFullUrl }) => {
    return (
        <>
            <Head>
                <title>{title}</title>

                <meta name="description" content={pageDescription} />
                <meta name="og:title" content={title} />
                <meta name="og:description" content={pageDescription} />

                {
                    imageFullUrl && (
                        <meta name="og:image" content={imageFullUrl} />
                    )
                }

            </Head>

            <nav>
                <Navbar />
            </nav>

            <SideMenu />
            {/* <Box display='flex' jusitfyContent='center'> */}

                <main style={{
                    marginTop: '80px',
                    padding: '0px 0px',
    
                }}>
                    {children}
                </main>
            {/* </Box > */}

            {/* Footer */}
            <Footer />

        </>
    )
}


