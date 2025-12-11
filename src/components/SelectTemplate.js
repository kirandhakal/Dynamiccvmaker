import React from 'react'

export const SelectTemplate = () => {
  return (
    <>
    <div className='main'>
        <h3> select your template</h3>
        <div className='template-container'>
            <div className='template-card'>
                <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1696227803/cv-maker/template1_uxbqzq.png" alt="template1" />
            </div>
            <div className='template-card'>
                <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1696227803/cv-maker/template2_ozxqz1.png" alt="template2" />
            </div>
            <div className='template-card'>
                <img src="https://res.cloudinary.com/dzcmadjl1/image/upload/v1696227803/cv-maker/template3_jyqk9h.png" alt="template3" />
            </div>
        </div>

    </div>

    </>
  )
}
