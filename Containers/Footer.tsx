import React from 'react';
import { Box, Center, Flex, IconButton, Tooltip } from '@chakra-ui/react';
import { FaInstagram, FaFacebookSquare, FaYoutube } from 'react-icons/fa';
import { nanoid } from 'nanoid';

const icons = [
  {
    name: 'Facebook',
    icon: FaFacebookSquare,
    color: '#4267B2',
  },
  {
    name: 'Instagram',
    icon: FaInstagram,
    color: '#E1306C',
  },
  {
    name: 'YouTube',
    icon: FaYoutube,
    color: '#FF0000',
  },
];

function Footer() {
  return (
    <Center className="footer-container">
      <Box className="footer-wrapper">
        <Flex className="footer-flex">
          {icons.map((i) => (
            <Box className="footer-icons-box" key={nanoid()}>
              <Tooltip hasArrow label={i.name} bg="gray.300" color="black">
                <IconButton colorScheme="white" aria-label="social-icon" fontSize="32px" size="lg" icon={<i.icon color={i.color} />} />
              </Tooltip>
            </Box>
          ))}
        </Flex>
      </Box>
    </Center>
  );
}

export default Footer;
