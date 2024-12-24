import { workExperience } from '@/data'
import React from 'react'
import { Button } from './ui/MovingBorder'
import '../app/style.css'

export const Experience = () => {
    return (
      <div className='experience-section'>
        <h1 className="experience-heading">
          My {' '}
          <span className='text-purple'> Work Experience</span>
        </h1>
        <div className='experience-grid'>
          {workExperience.map((card) => (
            <Button
              key={card.id}
              duration={Math.floor(Math.random() * 10000) + 10000}
              borderRadius='1.75rem'
              className='experience-button'
            >
              <div className='button-content'>
                <img src={card.thumbnail} alt={card.thumbnail} />
                <div className='ms-5'>
                  <h1>{card.title}</h1>
                  <p>{card.desc}</p>
                </div>
              </div>
            </Button>
          ))}
        </div>
      </div>
    );
  }
  