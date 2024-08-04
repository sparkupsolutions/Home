// Phases.js
import React from 'react';
import {Box, Container, Step, StepDescription, StepIndicator, StepSeparator, StepStatus, StepTitle, Stepper, useSteps } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckIcon } from '@chakra-ui/icons';

const phases = [
  { title: "Foundational Spark", description: "We ignite your passion with the core principles of programming, building a solid understanding that fuels future learning." },
  { title: "Logic Lab", description: "Master the art of problem-solving, crafting algorithms that dissect challenges and pave the way for elegant solutions." },
  { title: "Syntax Savvy", description: "Conquer the language of computers, learning the syntax that transforms ideas into powerful code." },
  { title: "Project Powerhouse", description: "Get hands-on with real-world projects, applying your newfound knowledge under the guidance of experienced developers." },
  { title: "Debugging Dojo", description: "Become a code detective! Learn to identify and conquer bugs, ensuring your programs run smoothly." },
  { title: "Design Dexterity", description: "Delve into the art of code design, creating maintainable, efficient, and beautiful solutions." },
  { title: "Testing Titans", description: "Master the art of software testing, ensuring your applications are robust and ready for the real world." },
  { title: "Industry Ignition", description: "Launch your career with confidence. We equip you with the skills and portfolio to impress potential employers and thrive in the tech industry." }
];

const Phases = () => {
  const { activeStep } = useSteps({ index: 0, count: phases.length });

  return (
    <Container maxW="container.md">
      <Stepper size="lg" index={activeStep} orientation="vertical">
        {phases.map((phase, index) => (
          <StepWithAnimation key={index} phase={phase} stepIndex={index} />
        ))}
      </Stepper>
    </Container>
  );
};

const StepWithAnimation = ({ phase, stepIndex }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  return (
    <Step>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: inView ? 1 : 0 }}
        transition={{ duration: 0.5, delay: stepIndex * 0.3 }}
      >
        <StepIndicator>
          <StepStatus
            complete={<CheckIcon color="green.500" />}
            incomplete={<CheckIcon color="green.500" />}
            active={<CheckIcon color="green.500" />}
          />
        </StepIndicator>
      </motion.div>

      <Box pl={4} ref={ref}>
          <StepTitle>{`Phase ${stepIndex + 1}`}</StepTitle>
          <StepTitle>{phase.title}</StepTitle>
          <StepDescription>{phase.description}</StepDescription>
      </Box>

      <StepSeparator />
    </Step>
  );
};

export default Phases;
