import { FC, ReactNode } from 'react';
import { Container } from '@chakra-ui/react';
import { Footer, Header2 } from 'components/modules';
import Head from 'next/head';

const Default: FC<{ children: ReactNode; pageName: string }> = ({ children, pageName }) => (
  <>
    <Head>
      <title>{`${pageName} | Cryptolancer`}</title>
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header2 />
    <Container maxW="full" p={0} marginTop={0} as="main" minH="70vh">
      {children}
    </Container>
    <Footer />
  </>
);

export default Default;
