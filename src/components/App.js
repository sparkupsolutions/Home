import React from 'react';
import { Routes, Route, Navigate} from 'react-router-dom';

// import logo from '../logo.svg';
import '../App.css';

import LandingPage from './LandingPage';
import Home from './Home';
import Sidebar from './SideBar';
import About from './About';
import Courses from './Courses';
import CourseOverview from './CourseOverview';
import CourseForm from './CourseForm';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route index element={<LandingPage />} />
        <Route path="sidebar" element={<Sidebar />} />
        <Route path="insights" element={<Courses />} />
        <Route path="about" element={<About />} />
        <Route path="courses" element={<Courses />} />
        <Route path="courseOverview" element={<CourseOverview />} />
        <Route path="courseForm" element={<CourseForm />} />
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
  );
}

export default App;
