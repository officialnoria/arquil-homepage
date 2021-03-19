import React from 'react';
import { Box, Center, Image, Text } from '@chakra-ui/react';

interface Props {
  name: string;
  image: string;
  text: string;
}

const CourseItem = ({ name, image, text }: Props) => (
  <Box className='course-item-container'>
    <Text className='course-item-title'>{name}</Text>
    <Center className='course-item-image-container'>
      <Image src={image} w="80%" />
    </Center>
    <Text className='course-item-text' >{text}</Text>
  </Box>
);

export default CourseItem