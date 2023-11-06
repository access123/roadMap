import React from 'react'
import './styles/Section.css'
import { Link } from 'react-router-dom';
function Section(props) {
  const { title,titleLink, linkTo } = props;
  return (
    <>
      <div className="flex-box">
        <h1>{title}</h1>
        <Link to={linkTo}>{titleLink}</Link>
      </div>
    </>
  )
}

export default Section
