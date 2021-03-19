import React from 'react';
import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';

interface Props {
  image: string;
  title: string;
  subtitle: string;
}

const CardItem = ({ title, image, subtitle }: Props) => (
  <Center m="20px" bg={'#F4F8FD'} width="350px" boxShadow="0px 0px 20px 5px rgba(0,0,0,0.3);" borderRadius="10px">
    <Box w="90%" textAlign="center">
      <Text fontSize="2xl" m="10px 0" color="#4367A3">
        {title}
      </Text>
      <Center>
        <Image w="70%" src="https://image.shutterstock.com/image-vector/computer-logo-260nw-432379006.jpg" alt="computer" />
      </Center>
      <Text fontSize="1em" m="10px 0" textAlign="justify" fontWeight="300">
        {subtitle}
      </Text>
    </Box>
  </Center>
);

export default CardItem;
