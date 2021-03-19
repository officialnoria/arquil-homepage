import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function FreeVideos() {
  return (
    <Center className="free-videos-container">
      <Box className="free-videos-box">
        <Text className="free-videos-title">Videos Gratis</Text>
        <Flex className="free-videos-flex">
          <Box className="free-videos-inner-box">
            <Image src="https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg" />
          </Box>
          <Box className="free-videos-inner-inner-box">
            <Text className="free-videos-inner-inner-title">Videos y Tutoriales</Text>
            <Text className="free-videos-inner-inner-text">
              Quod culpa quis omnis similique libero nam placeat id et. Numquam culpa sit corrupti provident blanditiis. Est error qui officiis error
              et voluptas quibusdam. Similique natus doloribus ex similique voluptatum. Nam aut modi nobis excepturi architecto veniam et eos.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}

export default FreeVideos;
