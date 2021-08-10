import React from 'react'
import PropTypes from 'prop-types'
import { Box, Flex, Image } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const MotionImage = motion(Image);
const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

const Poster = ({ post}) => {
  const { image, title, text } = post
  return (
    <Box>
    <Flex border="2px" borderColor="blue.400" mt="2rem" h="9rem" justifyContent="center" alignItems="center" borderRadius="10px">
      <MotionImage
        initial={{ x: -200, opacity: 0 }} 
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 1.1 }}
        whileTap={{ scale: 1.2 }}
        whileHover={{ scale: 1.0 }}
        alt= "Avatar"
        src= {image}
        boxSize= "100px"
        objectFit="cover"
      />
    </Flex>
    <MotionFlex justifyContent="center" alignItems="center" alignContent="center" whileHover={{ scale: 1.3 }} whileTap={{ scale: 1.0 }}>
      <Flex color="blue.400" textTransform="uppercase" fontSize="50px" fontFamily="sans-serif, Helvetica, Arial">
      {title.substring(0,1)}
    </Flex>
    <Flex color="blue.400" textTransform="uppercase" fontSize="40px" fontFamily="sans-serif, Helvetica, Arial">
      {title.substring(1, title.length - 1)}
    </Flex>
    <Flex color="blue.400" textTransform="uppercase" fontSize="50px" fontFamily="sans-serif, Helvetica, Arial">
      {title.substring(title.length - 1)}
    </Flex>
    </MotionFlex>
    <MotionBox color="white" fontFamily="sans-serif, Helvetica, Arial" fontSize="18px" letterSpacing="2px" m="10px" 
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}>
      {text}
    </MotionBox>
    </Box>
  )
}

Poster.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    image: PropTypes.string
  }).isRequired,
}


export default Poster
