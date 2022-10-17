import { ReactElement } from 'react';
import { Box, SimpleGrid, Icon, Text, Stack, Flex } from '@chakra-ui/react';
import { FcAssistant, FcDonate, FcApproval } from 'react-icons/fc';

interface FeatureProps {
  title: string;
  text: string;
  icon: ReactElement;
}

const Feature = ({ title, text, icon }: FeatureProps) => {
  return (
    <Stack>
      <Flex w={16} h={16} align={'center'} justify={'center'} color={'white'} rounded={'full'} bg={'gray.100'} mb={1}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{title}</Text>
      <Text color={'gray.600'}>{text}</Text>
    </Stack>
  );
};

export default function Features() {
  return (
    <Box p={4} bg={'blue.50'} shadow="sm" rounded={'md'} padding={'3rem'}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
        <Feature
          icon={<Icon as={FcAssistant} w={10} h={10} />}
          title={'List your services'}
          text={'list your services, chat with clients send your proposal'}
        />
        <Feature
          icon={<Icon as={FcDonate} w={10} h={10} />}
          title={'Use our escrow and get paid'}
          text={
            'We are building a decentralized platform where you dont have to trust anyone, just understand the code.'
          }
        />
        <Feature
          icon={<Icon as={FcApproval} w={10} h={10} />}
          title={'Get your work done'}
          text={'Find and hire a professional and get your work done'}
        />
      </SimpleGrid>
    </Box>
  );
}
