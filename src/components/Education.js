import React from 'react'
import './Education.css'
const Education = ({ data }) => {
    return (
        <>
            <div className='edu'>Education</div>
            <div className='edu-list'>
                <ul>
                    {data.education.map((element) => (
                        <li>{element}</li>
                    ))}
                </ul>
            </div>

        </>
    )
}

export default Education