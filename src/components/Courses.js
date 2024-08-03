import React from 'react';
import { Box, Wrap, } from '@chakra-ui/react';

import MenuBar from './MenuBar';
import CardCourses from './Card';
import Footer from './Footer';
import FooterForm from './FixedFooterForm';

import '../App.css';

import { loadJsonFiles } from '../utils/loadJsonFiles';

const Courses = () => {
  const jsonData = loadJsonFiles();
  return (
    <Box>
      <MenuBar />

      {/* Card Courses */}
      <div>
        <Box px="8" py="6">
          <Wrap spacing='30px'>
            {jsonData.map((data, index) => (
              <Box boxShadow='dark-lg'>
                <CardCourses index={index} />
              </Box>
            ))}
          </Wrap>
        </Box>
      </div>

      {/* Footer */}
      <Footer />

      {/* Footer Form */}
      <FooterForm />
    </Box>
  );
};

export default Courses;