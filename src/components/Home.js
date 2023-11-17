import React, { useEffect, useState } from 'react'
import Nav from './Nav'
import { useLocation } from 'react-router-dom';
import Section from './Section'
import './styles/Home.css'
const Home = () => {
  const location = useLocation();
  const [dynamicProp, setDynamicProp] = useState('default');

  useEffect(() => {
    if (location.pathname === '/') {
      setDynamicProp('');
    }
  }, [location.pathname]);
  return (
    <>
      <Nav />
      <div className="container-flex">
        <Section title="Courses" titleLink='Go to Courses' linkTo='/courses' ></Section>
        <Section title="Quiz" titleLink='Take a Quiz' linkTo='/quiz' ></Section>
        <Section title="Guides" titleLink='Look at the Guides' linkTo='/guides' ></Section>
      </div>
    </>
  )
}
export default Home
