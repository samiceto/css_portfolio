import { projects } from '@/data'
import React from 'react'
import { PinContainer } from './ui/3d-pin'
import { FaLocationArrow } from 'react-icons/fa6'
import '../app/style.css';

export const RecentProjects = () => {
  return (
    <div className='custom-padding'>
        <h1 className="heading">
            A small Collection of {' '}
            <span className='purple'>Recent Projects</span>
        </h1>
        <div className='custom-flex-container'>
       {projects.map(({id,title,des,img,iconLists,link})=>(
        <div key={id} className='custom-container'>
           <PinContainer title={link} href={link}>
           <div className='custom-container'>
           <div className='custom-container2'>

                <img src='/bg.png' alt='bg-img' />
            </div>
            <img
            src={img}
            alt={title}
            className='z-10 absolute bottom-0'
            />
           </div>
           <h1 className='custom-heading3'>
            {title}
           </h1>
           <p className='custom-paragraph4'>
            {des}
           </p>
           <div className='custom-container5'>
  <div className='custom-icons5'>
    {iconLists.map((icon, index) => (
      <div
        key={icon}
        className='custom-icon5'
        style={{ transform: `translateX(-${5 * index * 2}px)` }}
      >
        <img src={icon} alt={icon} />
      </div>
    ))}
  </div>

  <div className='custom-text-container5'>
    <p className='custom-text'>Check Live Site</p>
    <FaLocationArrow className='custom-location-icon5' color='#CBACF9' />
  </div>
</div>
           </PinContainer>
           
        </div>
       ))}
        </div>
    </div>
  )
}
