import { Container, VStack } from '@chakra-ui/react';
import Features from './Features';
import HeroHeader from './Hero';

const Home = () => {
  return (
    <VStack w={'full'}>
      <HeroHeader />
      <Container maxW="7xl" py={'2rem'} as="section">
        <Features />
      </Container>
    </VStack>
  );
};

export default Home;
