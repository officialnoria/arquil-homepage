import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function Clients() {
  return (
    <Center className="clients-container">
      <Box className="clients-box">
        <Text className="clients-title">Clientes</Text>
        <Flex className="clients-flex">
          <Box className="clients-inner-box">
            <Image src="https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg" />
          </Box>
          <Box className="clients-inner-inner-box">
            <Text className="clients-inner-inner-title">Encontrar un Software Amigable</Text>
            <Text className="clients-inner-inner-text">
              Qui numquam ut magni voluptatem. Dolores vitae et. Rem doloremque vitae ab quibusdam sit unde laudantium nobis aperiam. Tempora deserunt
              quo eaque enim quis ab ab.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}

export default Clients;
