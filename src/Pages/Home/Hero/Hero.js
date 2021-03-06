import React from 'react';
import heroImg from '../../../assets/images/chair.png';
import PrimaryButton from '../../../Components/PrimaryButton/PrimaryButton';
import './Hero.css'

const Hero = () => {
  return (
    <section id='home' className='banner'>
      <div className="overlay p-2 sm:p-5 md:p-10 py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-center">
          <div className='order-2 lg:order-1'>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">Your New Smile Starts Here</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <PrimaryButton>Get Started</PrimaryButton>
          </div>
          <img src={heroImg} className="max-w-full rounded-lg shadow-2xl order-1 lg:order-2" alt='' />
        </div>
      </div>
    </section>
  );
};

export default Hero;