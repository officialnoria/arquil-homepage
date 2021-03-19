import { Box, Center, Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

function About() {
  return (
    <Center className='about-container'>
      <Box className='about-box'>
        <Text className='about-box-title'>Acerca</Text>
        <Box className='about-box-inner-box'>
          <Flex className='about-box-inner-flex extra-flex'>
            <Center className='about-box-inner-image'>
              <Image w='80%' src='https://images.all-free-download.com/images/graphicthumb/teamwork_painting_working_people_workplace_icons_cartoon_design_6837960.jpg' />
            </Center>
            <Box className='about-box-inner-container'>
              <Text className='about-box-inner-title'>Misión</Text>
              <Text className='about-box-inner-p'>Soluta quia et sit asperiores quasi ab cupiditate officiis velit. Repudiandae consequatur sint. Voluptatem et illum sit ab veritatis dolorum alias.</Text>
            </Box>
          </Flex>
        </Box>

        <Box className='about-box-inner-box'>
          <Flex className='about-box-inner-flex'>
          <Box className='about-box-inner-container'>
              <Text className='about-box-inner-title'>Visión</Text>
              <Text className='about-box-inner-p'>In est perspiciatis repellendus in aut eligendi ad molestiae. Nesciunt molestiae repellat sed mollitia assumenda doloribus. Aliquam quam eum eum illum nihil ut et maxime. Vel fugiat dolores tempore omnis. Est odit officiis aspernatur et. Sed asperiores ducimus cupiditate quo quaerat nobis nostrum necessitatibus.</Text>
            </Box>
            <Center className='about-box-inner-image'>
              <Image w='80%' src='https://images.all-free-download.com/images/graphicthumb/teamwork_painting_working_people_workplace_icons_cartoon_design_6837960.jpg' />
            </Center>
          </Flex>
        </Box>
      </Box>
    </Center>
  );
}

export default About;
