import React from 'react'

function Undercon() {
    const obj = {
        marginLeft: '25%',
        fontSize: '5rem',
        color: 'black',
        marginTop: '1%',
    };
    const small = {
        marginLeft: '38%',
        fontSize: '1rem',
        color: 'black',
        marginTop: '1%',
    };

  return (
    <div>
      <h1 style={obj}>
        Under Construction
      </h1>
      <h5 style={small}>will be completed before 20th of November</h5>
    </div>
  )
}

export default Undercon
