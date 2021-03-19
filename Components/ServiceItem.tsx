import React from 'react';
import { Box, Image, Flex, Text } from '@chakra-ui/react';

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const ServiceItem = ({ image, title, subtitle }: Props) => (
  <Flex wrap="wrap" justifyContent="space-around">
    <Box>
      <Image w="400px" src="https://itworkswilmington.com/wp-content/uploads/2018/02/virtual-workspaces.jpg" alt="work" />
    </Box>
    <Box className='service-item-container'>
      <Box className='service-item-title'>
        <Text fontSize={'3xl'}>{title}</Text>
      </Box>
      <Text align={'justify'} width={'100%'} fontSize='1.2em' fontWeight='200'>
        {subtitle}
      </Text>
    </Box>
  </Flex>
);

export default ServiceItem;
