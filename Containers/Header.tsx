import { Box, Button, Center, Text } from '@chakra-ui/react';
import React from 'react';

const Header = () => {
  return (
    <Center className="header-container">
      <Box className="header-content-box">
        <Text className="header-content-title">Transformación digital</Text>
        <Text className="header-content-subtitle">Software eficientes</Text>
        <Text className="header-content-text">Ayudamos a concretar tus necesidades de software</Text>
        <Button mt="40px" bg="#4189BA" color="white">
          Contacto
        </Button>
      </Box>
    </Center>
  );
};

export default Header;
