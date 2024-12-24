import React from 'react'
import { Magicbutton } from './ui/Magicbutton'
import { FaLocationArrow } from 'react-icons/fa6'
import { socialMedia } from '@/data'
import Link from 'next/link'
import '../app/style.css';

export const Footer = () => {
    return (
      <footer className='footer' id='contact'>
        <div className='footer-text'>
          <h1 className='heading'>
            Ready to take <span className='text-purple'>your</span> digital presence to the next level?
          </h1>
          <p className='text-white-200'>
            Reach out to me today and let's discuss how I can help you achieve your goals.
          </p>
          <a href="mailto:samiullahmalik7474@gmail.com">
            <Magicbutton
              title="Let's get in touch"
              icon={<FaLocationArrow />}
              possition='right'
            />
          </a>
        </div>
        <div className='footer-button'>
          <div className='social-media'>
            <p className='text-sm md:text-base font-light md:font-normal'>
              Copyright © 2024 Samiullah
            </p>
            <div className='social-media-icons'>
              {socialMedia.map((profile) => (
                <div key={profile.id} className='social-item'>
                  <Link href={profile.link}>
                    <img src={profile.img} alt="icons" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </footer>
    );
  }
  