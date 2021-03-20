import { Box, Center, Image, Flex, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';
import ServiceItem from '../Components/ServiceItem';

const services = [
  {
    image: '',
    title: 'Software eficientes',
    subtitle:
      'Generar valor a nuestros clientes mediante una experiencia ágil e innovadora en sus operaciones de identificación de sus clientes e intercambio. Siempre utilizando los más altos estándares de calidad.',
  },
];

const Services = () => {
  return (
    <Center boxSize="100%" id='servicios'>
      <Box w="80%" maxW="1200px" textAlign="center" m={'50px 0'}>
        <Text color="#4367A3" fontSize="4xl" fontWeight="500" mb="30px">
          Servicios
        </Text>
        {services.map((s) => (
          <ServiceItem {...s} key={nanoid()} />
        ))}
      </Box>
    </Center>
  );
};

export default Services;
