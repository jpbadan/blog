import { Button } from "@chakra-ui/button";
import { Input } from "@chakra-ui/input";
import { Flex, Heading } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import Head from "next/head";

export default function pu(){
    return(
        <>  
            <Head>
                <title>YY</title>
            </Head>
            <Flex height='100vh' alignItems='center' justifyContent='center'>
                <Flex direction='column' background='gray.100' p={12} rounded={8}>
                    <Heading mb={6}>Entrar</Heading>
                    <Input placeholder='yy.com' type='email' />
                    <Tooltip hasArrow label='Pronto para vapetar??' fontSize='sm' color='white' bg='blue.400'>
                        <Button colorScheme='teal'>Log in</Button>
                    </Tooltip>

                </Flex>
            </Flex>
            <h1>Oi sou o putt</h1>
        </>
    )
}