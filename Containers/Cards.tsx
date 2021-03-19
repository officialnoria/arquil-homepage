import { Box, Center, Flex, Image, Text } from '@chakra-ui/react'
import { nanoid } from 'nanoid';
import React from 'react'
import CardItem from '../Components/CardItem';

const cards = [
  {
    title: "Desarrollo Web",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Desarrollo de APIs y Microservicios",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Desarrollo Movil Android e iOS",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Capacitaciones",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Desarrollo de Chatbots",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Cursos",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Desarrollo de Interfaces de Usuario UI/UX",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
  {
    title: "Consultoría",
    image: "",
    subtitle: "Tecnologia de Bloques es una empresa 100% mexicana, dedicada al desarrollo y comercialización de servicios."
  },
]

const Cards = () => (
  <Center boxSize={"100%"}>
    <Flex width="80%" maxW="1200px" wrap="wrap" justifyContent="space-around" p='0 20px'>
      {
        cards.map(c => <CardItem {...c} key={nanoid()} />)
      }
    </Flex>
  </Center>
)

export default Cards;