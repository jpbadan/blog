import { AppProps } from 'next/app';
import Head from 'next/head';
import { Box, ChakraProvider } from "@chakra-ui/react";
import Header from '../components/Header';


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // <ChakraProvider theme={customTheme}>
    <ChakraProvider >
      <Head>
        <title>Chupa</title>
      </Head>
      {/* <Header /> */}
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
