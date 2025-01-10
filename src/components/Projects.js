import React from 'react'
import './Projects.css'
const Projects = ({ data }) => {
    return (
        <>
            {data.proj.length !== 0 && (<>
                <div className='proj'>Projects</div>
                <div className='proj-list'>
                    <ul>
                        {data.proj.map((element, index) => (
                            index <= 3 && (
                                <li key={index}>{element}</li>
                            )

                        ))}
                    </ul>
                </div>
            </>
            )}
        </>
    )
}

export default Projects