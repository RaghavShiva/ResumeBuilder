import React from 'react'
import './Extracur.css'
const Extracur = ({ data }) => {
    return (
        <>
            {data.extc.length !== 0 && (<>
                <div className='extc'>Extra-Curricular Activities</div>
                <div className='extc-list'>
                    <ul>
                        {data.extc.map((element, index) => (
                            index <= 2 && (
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

export default Extracur