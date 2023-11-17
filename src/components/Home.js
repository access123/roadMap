import React from 'react'
import Nav from './Nav'
import Section from './Section'
import './styles/Home.css'
const Home = () => {
  
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
