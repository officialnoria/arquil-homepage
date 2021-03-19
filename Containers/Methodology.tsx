import { Box, Center, Flex, List, ListItem, ListIcon, HStack, Image, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';

const methodologies = ['Kanban', 'Scrum', 'XP'];

function Methodology() {
  return (
    <Center boxSize={'100%'}>
      <Box className='methodology-container'>
        <Text className='methodology-title'>Metodología</Text>
        <Flex className='methodology-container-2'>
          <Box className='methodology-box'>
            <Text className='methodology-box-title'>Procedimientos eficientes</Text>
            <Text className='methodology-box-content'>Nos adaptamos más a metodologías ágiles dependiendo del proyecto</Text>
            <List spacing={3} mt="20px">
              <HStack justifyContent="center" w="100%">
                {methodologies.map((m) => (
                  <ListItem className='methodology-list-item' key={nanoid()}>
                    <ListIcon as={MdCheckCircle} color="#384086" />
                    {m}
                  </ListItem>
                ))}
              </HStack>
            </List>
          </Box>
          <Box className='methodology-image-container'>
            <Image src="https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg" />
          </Box>
        </Flex>
      </Box>
    </Center>
  );
}

export default Methodology;
