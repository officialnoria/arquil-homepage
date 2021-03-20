import { Box, Center, Flex, List, ListItem, ListIcon, HStack, Image, Text } from '@chakra-ui/react';
import { nanoid } from 'nanoid';
import React from 'react';
import { MdCheckCircle } from 'react-icons/md';
import CourseItem from '../Components/CourseItem';

const courses = [
  {
    name: 'HTML / CSS',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Delectus pariatur quia pariatur dicta nobis. Quod alias sunt nam odio minus dolorum porro ullam. Omnis aut maiores pariatur atque a aperiam maiores. Suscipit voluptas libero rerum ipsam dolore quia deleniti nobis et.',
  },
  {
    name: 'React y TypeScript',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Exercitationem omnis veritatis veniam. Cum reiciendis aut nostrum doloribus distinctio. Provident ab id vero. A at aut velit voluptatem voluptatem facilis et qui.',
  },
  {
    name: 'Golang',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Laboriosam eos magni aut repudiandae. Quia ratione non. Saepe et aut ipsam qui veniam eveniet necessitatibus rem asperiores. Nemo itaque quia consequatur magnam sed nemo et. Et explicabo id accusamus quos corrupti dicta. Impedit distinctio voluptatem illo ut reiciendis.',
  },
  {
    name: 'Docker',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Perferendis quod accusantium asperiores culpa minima ex. Ut aut asperiores qui et rem. Laudantium sint sed. Vitae dignissimos ex deleniti. Tempore unde repudiandae. Quia non incidunt.',
  },
  {
    name: 'React Native',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Voluptatum reprehenderit dolores numquam inventore nesciunt aut et at quis. Corporis quos corrupti vel quae beatae alias quia. Reiciendis et molestiae doloribus et.',
  },
  {
    name: 'Kubernetes',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Vel dignissimos doloribus sit sequi excepturi est inventore modi at. Dolor dolore consequuntur aliquam laudantium tempora quaerat. Reiciendis tempore laboriosam dolorum nobis. Omnis inventore illo.',
  },
  {
    name: 'UML',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text: 'Quia voluptatum vero enim. Voluptatem et eaque nobis adipisci eius libero voluptatum dicta. Excepturi ut suscipit ea.',
  },
  {
    name: 'SSH',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Aut delectus sit enim harum praesentium dolore exercitationem expedita. Sunt distinctio nihil sed. Sapiente fugit deleniti laborum. Enim quis illo.',
  },
  {
    name: 'Git',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Modi voluptas odit dolores aut odit. Ipsam cum quis aspernatur autem soluta ut fugiat neque velit. Ab fuga temporibus sit officiis nostrum omnis. Quis consectetur libero.',
  },
  {
    name: 'CI / CD',
    image:
      'https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg',
    text:
      'Quibusdam iusto facere illo sed ea id aut. Voluptatem officiis iusto. Occaecati fugit voluptate eaque commodi sint. A eius impedit quis. Doloremque autem corporis a.',
  },
];

function Courses() {
  return (
    <Center boxSize={'100%'}>
      <Box className="courses-container">
        <Text className="courses-title">Cursos</Text>
        <Flex className="courses-container-2">
          <Box className="courses-image-container">
            <Image src="https://previews.123rf.com/images/gmast3r/gmast3r1608/gmast3r160800274/60632510-casual-business-people-group-presentation-flip-chart-finance-businesspeople-team-training-conference.jpg" />
          </Box>
          <Box className="courses-box">
            <Text className="courses-box-title">Aprende</Text>
            <Text className="courses-box-content">
              Et iure ipsam dicta mollitia ex architecto ducimus ratione. Iusto sed hic sequi non vel architecto. Earum ut nisi facilis ex aut
              voluptate blanditiis.
            </Text>
          </Box>
        </Flex>
        <Flex wrap="wrap" justifyContent="space-around">
          {courses.map((c) => (
            <CourseItem {...c} key={nanoid()} />
          ))}
        </Flex>
      </Box>
    </Center>
  );
}

export default Courses;
