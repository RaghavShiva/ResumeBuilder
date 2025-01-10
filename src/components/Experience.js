import React from 'react'
import './Experience.css'
const Experience = ({ data }) => {

  return (
    <>

      {data.exp.length !== 0 && (
        <><div className='exp'>Experience</div>
          <div className='exp-list'>
            <ul>
              {data.exp.map((element, index) => (
                index <= 1 && (
                  <li key={index}>{element}</li>
                )))}
            </ul>
          </div>
        </>
      )}
    </>
  )
}

export default Experience