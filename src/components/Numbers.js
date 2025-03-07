import React, { useState, useEffect } from 'react';
import { AiFillCalendar } from 'react-icons/ai';
import { FaRunning } from 'react-icons/fa'
import { FaPeopleGroup } from 'react-icons/fa6';
import { IoCheckmarkDoneCircle } from 'react-icons/io5';



function Numbers() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const [count4, setCount4] = useState(0);
  const limit1 = 2023;
  const limit2 = 30;
  const limit3 = 4000;
  const limit4 = 200;
  const [animationTriggered, setAnimationTriggered] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight;
      const elementPosition = document.getElementById('numbers').offsetTop;

      if (scrollPosition > elementPosition && !animationTriggered) {
        animateCounts(true);
        setAnimationTriggered(true);
      }
    };

    const animateCounts = (isIncrement) => {
      let startTimestamp = null;
      const duration = 2000;

      const step = (timestamp) => {
        if (!startTimestamp) {
          startTimestamp = timestamp;
        }

        const progress = timestamp - startTimestamp;
        const increment = Math.floor((progress / duration) * limit1);

        if (isIncrement && increment <= limit1) {
          setCount1(increment);
          setCount2(increment);
          setCount3(increment);
          setCount4(increment);
          requestAnimationFrame(step);
        } else if (!isIncrement && increment <= limit1) {
          setCount1(limit1 - increment);
          setCount2(limit2 - increment);
          setCount3(limit3 - increment);
          setCount4(limit4 - increment);
          requestAnimationFrame(step);
        } else if (!isIncrement) {
          setCount1(0);
          setCount2(0);
          setCount3(0);
          setCount4(0);
        } else {
          setCount1(limit1);
          setCount2(limit2);
          setCount3(limit3);
          setCount4(limit4);
        }
      };

      requestAnimationFrame(step);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll, { passive: true });
    };
  }, [animationTriggered]);


  return (
    <div id="numbers" className="lg:p-10 px-2 py-1 min-h-screen lg:min-h-0  md:min-h-0 lg:h-auto flex flex-col md:flex-row md:h-auto md:p-6 lg:flex-row justify-center 2xl:gap-48 gap-12 md:gap-32 sm:flex-col sm:items-center">

      <div className='flex flex-col lg:flex-row gap-12 md:gap-32 2xl:gap-48'>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center gap-1'>
          <AiFillCalendar className='text-6xl text-pink-700' />
          <h1 className='text-3xl font-bold'>{count1}</h1>
          <div className='h-[3px] bg-black w-16'></div>
          <h1 className='text-xl md:text-center'>Festival Year</h1>
        </div>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center gap-1'>
          <FaRunning className='text-6xl text-pink-700' />
          <h1 className='text-3xl font-bold'>{count2}+</h1>
          <div className='h-[3px] bg-black w-16'></div>
          <h1 className='text-xl md:text-center'>Events Planned</h1>
        </div>
      </div>
      <div className='flex flex-col lg:flex-row gap-12 md:gap-32 2xl:gap-48'>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center gap-1'>
          <FaPeopleGroup className='text-6xl text-pink-700' />
          <h1 className='text-3xl font-bold'>{count3}+</h1>
          <div className='h-[3px] bg-black w-16'></div>
          <h1 className='text-xl md:text-center'>Expected Participants</h1>
        </div>
        <div data-aos="fade-right" data-aos-offset="200" data-aos-duration="1300" className='flex flex-col items-center gap-1'>
          <IoCheckmarkDoneCircle className='text-6xl text-pink-700' />
          <h1 className='text-3xl font-bold'>{count4}+</h1>
          <div className='h-[3px] bg-black w-16'></div>
          <h1 className='text-xl md:text-center'>Already Participated</h1>
        </div>
      </div>

    </div>

  );
}

export default Numbers;
