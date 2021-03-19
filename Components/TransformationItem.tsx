import { Box, Center, Icon, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { FcGlobe } from 'react-icons/fc';

const TransformationItem = ({ title, icon }) => {
  return (
    <Box w="100px" h='130px'  m='0 25px'>
      <Box position="relative">
        <Icon as={FcGlobe} boxSize="100px" />
        <Box position="absolute" top="50%" left="50%" style={{ transform: 'translate(-50%, -50%)' }}>
          <Icon as={icon} boxSize="50px" color={'#ffffff'} />
        </Box>
      </Box>
      <Text>{title}</Text>
    </Box>
  );
};

export default TransformationItem;
