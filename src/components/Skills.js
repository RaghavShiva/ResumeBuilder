import React from 'react'
import './Skills.css'
const Skills = ({ data }) => {

  return (
    <>
      {data.skills.length !== 0 && (<>
        <div className='skill'>Skills</div>
        <div className='skill-list'>
          <ul>
            {data.skills.map((element, index) => (
              index <= 4 && (
                <li key={index}>{element}</li>
              )))}
          </ul>
        </div>
      </>
      )}
    </>
  )
}

export default Skills