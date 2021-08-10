import './App.css';
import Poster from './Poster';
import './index.css'
import { Container, Flex } from '@chakra-ui/react';

function App() {
  return (
    <Container mt="8rem">
      <Flex h="60vh" justify="center" align="center" bg="black" borderRadius="10px">
      <Poster post={post} />
      </Flex>
    </Container>
  );
}

let post = {
  image: "https://rawgit.com/gorangajic/react-icons/master/react-icons.svg",
  title: 'React',
  text: 'The best thing since jQuery, probably'
}

export default App;
