import React, { useState } from 'react';
import { Box, Text, Wrap, Divider, AbsoluteCenter, Heading } from '@chakra-ui/react';
import { Container } from 'react-bootstrap';


import MenuBar from './MenuBar';
import CardCourses from './Card';
import CarouselSlider from './Carousel';
import FeedbackCarousel from './FeedbackCarousel';
import Footer from './Footer';
import FooterForm from './FixedFooterForm';
import TechnologyCarousel from './TechnologyCarousel';
import Phases from './Phases';
// import CourseCarousel from './CourseCarousel';
// import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';



//import Carousel1 from '../public/Carousels/Carousel1.jpg'

const images = [
  {
    src: "Images/img_3.png",
    alt: 'First slide',
    caption: {
      title: "Real Programmers as Mentors",
      description: "Learn from experienced industry professionals who code every day, not just teach. Our offline classes ensure personalized attention, helping you master industry-ready technologies, craft a standout resume, and ace interviews."
    }
    
  },
  {
    src: 'Images/img_5.png',
    alt: 'Second slide',
    caption: {
      title: "Hands-On Learning Experience",
      description: "Join our offline institute, where real-world programmers mentor you. We focus on your individual progress, preparing you with the latest technologies, professional resume building, and interview skills for a successful career."
    }
  },
  {
    //src: 'https://via.placeholder.com/800x400?text=Third+slide',
    src: 'Images/img_4.png',
    alt: 'Third slide',
    caption: {
      title: "Get Industry-Ready",
      description: "At our offline coding institute, you're taught by real programmers. We provide hands-on training with cutting-edge technologies, personalized resume crafting, and intensive interview preparation to ensure you're industry-ready."
    }
  }
];

const feedbacks = [
  {
    text: "Forget just coding, SparkUp Solutions turns you into a problem-solving rockstar! They take complex challenges and make them sing. No more coding fears, just pure confidence!",
    user: "Priya Sharma"
  },
  {
    text: "Coding seemed like an overwhelming maze, but SparkUp Solutions made it a fun and clear journey. Their step-by-step approach and supportive community equipped me to conquer my fear and unleash my coding creativity.",
    user: "Riya Singh"
  },
  {
    text: "SparkUp Solutions isn't messing around! Their project-based learning helped me craft a portfolio that wowed employers. I landed my dream job fresh out of the program!",
    user: "Rohan Mehta"
  },
  {
    text: "Learning to code on my own felt like climbing a mountain blindfolded. SparkUp Solutions provided the map, guidance, and expert coaching I needed to finally grasp the concepts and make real progress.",
    user: "Aisha Kapoor"
  },
  {
    text: "SparkUp Solutions goes beyond code, they open the door to the entire industry. They connected me with potential employers and equipped me with interview skills to land my dream job!",
    user: "Vikram Patel"
  },
  {
    text: "I always knew I wanted to be in tech, but getting started felt impossible. SparkUp Solutions provided the foundation and skills to launch my career. I'm so grateful for their guidance!",
    user: "Sonia Mishra"
  },
  {
    text: "From day one, I felt SparkUp Solutions truly cared about my success. Their personalized approach and focus on individual growth made a world of difference in my learning experience.",
    user: "Kiara Joshi"
  },
  {
    text: "Learning at SparkUp Solutions is the best investment I've ever made. The skills and knowledge I gained not only opened doors in my career but also supercharged my problem-solving abilities.",
    user: "Aarti Shah"
  },
  {
    text: "As a busy professional, finding coding time was a struggle. SparkUp Solutions' flexible program allowed me to learn at my own pace and still achieve impressive results.",
    user: "Rajiv Gupta"
  },
  {
    text: "SparkUp Solutions is more than a course, it's a thriving community. I met so many amazing people with similar coding passions, and we continue to support and learn from each other even after graduating.",
    user: "Rahul Kumar"
  },
  {
  text: "SparkUp Solutions doesn't just teach you to code, they teach you to code like a machine! You'll write clean, efficient code that looks like a work of art. Get ready to impress future employers with your coding finesse.",
  user: "Dev Patel"
  },
  {
  text: "Tired of tutorials that leave you more confused than before? SparkUp Solutions breaks down complex concepts into bite-sized pieces, making coding click for everyone. No more frustration, just pure understanding and a newfound love for coding.",
  user: "Maya Singh"
  }
];

const LandingPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setActiveIndex(selectedIndex);
  };

  return (
    <Box>

      {/* Menu Bar */}
      <MenuBar />

      {/* Carousel Slider Bar */}
      <div>
        <CarouselSlider
          images={images}
          activeIndex={activeIndex}
          onSelect={handleSelect}
        />
      </div>

      {/* Divider with Heading */}
      <Box position='relative' >
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          <Text as='i'><b>Our Top Courses</b></Text>
        </AbsoluteCenter>
      </Box>

      {/* Card Courses */}
      {/* <CourseCarousel/> */}
      <div>
        <Box px="8" py="8">
          <Wrap spacing='30px'>
            <Box boxShadow='dark-lg'>
              <CardCourses index = {0}/>
            </Box>
            <Box boxShadow='dark-lg'>
              <CardCourses index = {1}/>
            </Box>
            <Box boxShadow='dark-lg'>
              <CardCourses index = {2}/>
            </Box>
            <Box boxShadow='dark-lg'>
              <CardCourses index = {3}/>
            </Box>
          </Wrap>
        </Box>
      </div>
      <Divider />
      <Container>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='md'
          boxShadow='md'
          rounded='md'
          bg='white'
        >
          <Heading fontSize='xl' m='4' align="center">Who we are ?</Heading>
          <Text m='4' pb="5">
            At SparkUp Solutions, we're not just code whisperers,
            we're problem-solving architects. We believe the magic of programming
            goes beyond syntax; it's about crafting logic and building solutions
            that bring ideas to life. Our software development program isn't just about
            becoming an IT pro, it's about being mentored by battle-tested developers
            who translate theory into real-world projects.
            We ignite your passion for programming and equip you with the
            skills to thrive in the ever-evolving tech landscape.
          </Text>
        </Box>
      </Container> <br />

      {/* Divider with Heading */}
      <Box position='relative'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          <Text as='i'><b>Technologies we are Working on</b></Text>
        </AbsoluteCenter>
      </Box>
      <TechnologyCarousel />

      <Divider />

      <Container>
        <Box
          color='gray.500'
          fontWeight='semibold'
          letterSpacing='wide'
          fontSize='md'
          boxShadow='md'
          rounded='md'
          bg='white'
        >
          <Heading fontSize='xl' m='4' align="center">Why should you join us ?</Heading>
            <Heading as='h6' size='xs' m='4'># Focus on Growth and Potential:</Heading>
              <Text m='4' pb='5'>
                Ever dreamt of transforming from a coding novice to a tech titan?
                At SparkUp Solutions, that's not a dream, it's our mission.
                We unlock your potential, not just teach you syntax.
                Join us and ignite your programming journey with the guidance of industry veterans.
              </Text>
            <Heading as='h6' size='xs' m='4'># Highlight Real-World Focus:</Heading>
              <Text m='4' pb='5'>
                Tired of textbooks that don't translate to the real world?
                SparkUp Solutions throws theory out the window and replaces
                it with hands-on projects.
                Learn from developers who have been in the trenches, building the
                software that powers today's world. Become a programmer, not just a coder.
              </Text>
            <Heading as='h6' size='xs' m='4'># Play on the Name "SparkUp":</Heading>
              <Text m='4' pb='5'>
                Don't let your programming dreams remain dormant.
                SparkUp Solutions ignites your passion for coding and equips you with the
                skills to thrive. Our immersive program takes you from spark to flame,
                ready to illuminate the tech industry. Join us and watch your potential ignite!
              </Text>
        </Box>
      </Container>

      {/* Divider with Heading */}
      <Box position='relative' mt='10'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          <Text as='i'><b>Your Learning Phases</b></Text>
        </AbsoluteCenter>
      </Box>
        <Container >
          <Heading as='h5' size='sm' m="6">
            SparkUp Solutions isn't just about coding; 
            it's about empowering you to become a problem-solving architect.
          </Heading>
          <Heading as='h5' size='sm'  m="6">
            Here's how our program transforms you:
          </Heading>
          </Container>
      <Phases />

      {/* Divider with Heading */}
      <Box position='relative'>
        <Divider />
        <AbsoluteCenter bg='white' px='4'>
          <Text as='i'><b>Learner Reviews</b></Text>
        </AbsoluteCenter>
      </Box>


      {/* Feedback Carousel Slider Bar */}
      <div>
        <FeedbackCarousel feedbacks={feedbacks} />
      </div>

      {/* Footer */}
      <Footer />

      {/* Footer Form */}
      <FooterForm />

    </Box>
  );
};

export default LandingPage;
