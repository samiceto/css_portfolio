import React from 'react'
import { InfiniteMovingCards } from './ui/InfiniteMovingCards'
import { companies, testimonials } from '@/data'
import '../app/style.css'

export const Clients = () => {
    return (
      <div className='clients-section'>
        <h1 className="clients-heading">
          Words from some{' '}
          <span className='text-purple'> Satisfied Clients</span>
        </h1>
        <div className='clients-container'>
          <InfiniteMovingCards 
            items={testimonials}
            direction='right'
            speed='slow'
          />
          <div className='clients-carousel-wrapper'>
            {companies.map(({id, img, name, nameImg}) => (
              <div key={id} className='company-item'>
                <img
                  src={img}
                  alt={name}
                  className="company-logo"
                />
                <img
                  src={nameImg}
                  alt={name}
                  className="company-name"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  