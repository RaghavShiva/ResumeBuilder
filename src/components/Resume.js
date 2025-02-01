import React from 'react'
import './Resume.css'
const Resume = ({ data }) => {
    return (
        <>
            <div className='name'>
                {data.name}
            </div>
            <hr></hr>

        </>
    )
}

export default Resume