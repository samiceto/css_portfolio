import React from 'react'
import { Spotlight } from './ui/Spotlight'
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import { Magicbutton } from './ui/Magicbutton';
import { FaLocationArrow } from 'react-icons/fa6';


const Hero = () => {
  return (
    <div className='h-padding'>
        <div>
        <Spotlight className='spotlight-1 ' fill='white' />
<Spotlight className='spotlight-2 ' fill='purple' />
<Spotlight className='spotlight-3 ' fill='blue' />
        </div>
        <div className="h-container">
  <div className="h-inner-container" />
</div>

<div className="h2-container">
  <div className="h2-inner-container">
    <h2 className="h2-heading">
      skill&apos;s Dynemic shop to choose the plan
    </h2>
    <TextGenerateEffect
      className="h2-text-effect"
      words="Transforming Concept into Seamless User Experiences"
    />
    <p className="h2-paragraph">
      Hi I&apos;m Samiullah, a Full Stack Developer based in Pakistan
    </p>
    <a href="/">
      <Magicbutton
        title="Show my work"
        icon={<FaLocationArrow />}
        possition="right"
      />
    </a>
  </div>
</div>

    </div>
  )
};

export default Hero