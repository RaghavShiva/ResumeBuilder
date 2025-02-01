import React from 'react'
import './ResumeEditor.css'
import { FaEdit } from 'react-icons/fa';

const ResumeEditor = ({ data }) => {
  const handleEdit = () => {
    // console.log(data.name)
    
  };
  return (
    <>
      <div className='edit'>
        <button onClick={handleEdit}>
          <FaEdit />
        </button>
        <span className='tooltip-text'>Edit</span>
      </div>
    </>
  )
}

export default ResumeEditor