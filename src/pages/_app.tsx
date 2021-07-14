import { AppProps } from 'next/app';
import Head from 'next/head';
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider theme={customTheme}>
    <ChakraProvider >
      <Head>
        <title>Chupa</title>
      </Head>
      {/* <Header /> */}
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
