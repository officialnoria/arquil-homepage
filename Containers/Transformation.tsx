import { Box, Center, Text, Flex, WrapItem } from '@chakra-ui/react';
import React from 'react';
import TransformationItem from '../Components/TransformationItem';
import { GiTeacher } from 'react-icons/gi';
import { MdComputer, MdFormatPaint, MdSettings, MdSmartphone } from 'react-icons/md';
import { RiChatSmile2Line } from 'react-icons/ri';
import { nanoid } from 'nanoid';

const content = [
  {
    title: 'Web',
    icon: MdComputer,
  },
  {
    title: 'Apps',
    icon: MdSmartphone,
  },
  {
    title: 'Diseño',
    icon: MdFormatPaint,
  },
  {
    title: 'Chatbots',
    icon: RiChatSmile2Line,
  },
  {
    title: 'APIs',
    icon: MdSettings,
  },
  {
    title: 'Cursos',
    icon: GiTeacher,
  },
];

const Transformation = () => {
  return (
    <Center className="transformation-container">
      <Box className="transformation-box">
        <Text className="transformation-title">Transformación digital</Text>
        <Center>
          <Text className="transformation-subtitle">
            In modi non. Natus quia sit sed eum. Deserunt aspernatur rerum. Similique at dignissimos officiis consectetur ipsa quos assumenda quidem.
          </Text>
        </Center>

        <Text className="transformation-desarrollo">Desarrollo</Text>
        <Center mt="30px">
          <Flex wrap="wrap" justifyContent="space-around" alignItems="center" alignContent="center">
            {content.map((item) => (
              <TransformationItem title={item.title} icon={item.icon} />
            ))}
          </Flex>
        </Center>
      </Box>
    </Center>
  );
};

export default Transformation;
