import React, { useState } from 'react';
import { Box, VStack, Text, Spacer, Button, Container } from '@chakra-ui/react';

import MenuBar from './MenuBar';


const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
    <MenuBar/>
    <Container mt='4'> 
      {!isOpen && (
        <Button onClick={toggleSidebar} position="fixed" left="4" top="4" zIndex="999">
          Open Sidebar
        </Button>
      )}
      <Box
        w="250px"
        bg="gray.800"
        color="white"
        p="4"
        h="100vh"
        position="fixed"
        left={isOpen ? '0' : '-250px'}
        top="0"
        boxShadow="lg"
        transition="left 0.3s ease"
      >
        {isOpen && (
          <>
            <VStack align="flex-start" spacing="4">
              <Button onClick={toggleSidebar} alignSelf="flex-end">
                Close Sidebar
              </Button>
              <Text fontSize="xl">Sidebar</Text>
              <Text>Link 1</Text>
              <Text>Link 2</Text>
              <Text>Link 3</Text>
              <Spacer />
              <Text>Footer</Text>
            </VStack>
          </>
        )}
      </Box>
    </Container>
    </>
  );
};

export default Sidebar;
