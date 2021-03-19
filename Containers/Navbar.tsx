import { HamburgerIcon, SearchIcon } from '@chakra-ui/icons';
import { Box, Center, Flex, Tooltip } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';

const sections = ['home', 'servicios', 'contacto', 'cursos'];

const Navbar = () => {
  return (
    <Center w={'100%'} h={'100px'} position="absolute">
      <Flex wrap={'wrap'} justifyContent={'space-around'} alignItems={'center'} w={'80%'} maxW={'1200px'}>
        {sections.map((item) => (
          <Box _hover={{ cursor: 'pointer', textDecoration: 'underline' }} key={nanoid()} color="#4367A3" fontWeight="200">
            {item.toUpperCase()}
          </Box>
        ))}
        <Flex wrap={'wrap'} justifyContent={'space-between'} alignItems={'center'} w={'10%'}>
          <Tooltip label="Search" aria-label="search button">
            <Box as={'button'} bg={'#DCE9FB'} w={'40px'} h="40px" style={{ borderRadius: '50%' }}>
              <SearchIcon color={'#1877B8'} />
            </Box>
          </Tooltip>

          <Box as={'button'} bg={'#DCE9FB'} w={'40px'} h="40px" style={{ borderRadius: '50%' }}>
            <HamburgerIcon color={'#1877B8'} />
          </Box>
        </Flex>
      </Flex>
    </Center>
  );
};

export default Navbar;
