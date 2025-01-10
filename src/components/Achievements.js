import React from 'react'
import './Achievements.css'
const Achievements = ({ data }) => {
    return (
        <>
            {data.achiev.length !== 0 && (<>
                <div className='achi'>Achievements</div>
                <div className='achiev-list'>
                    <ul>
                        {data.achiev.map((element, index) => (
                             index <= 3 && (
                            <li key = {index}>{element}</li>
                             )
                        ))}
                    </ul>
                </div>
            </>)}
        </>
    )
}

export default Achievements