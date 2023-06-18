'use client'
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { useSpring, animated } from '@react-spring/web';
import { useTheme } from 'next-themes';

const SwitchModeButton = () => {
     const { systemTheme, theme, setTheme } = useTheme();
     const currentTheme = theme === 'system' ? systemTheme : theme;
     const spring = useSpring({
          loop: true,
          from: { rotateZ: 0 },
          to: { rotateZ: 360 },
          delay: 10,
          config: {
               mass: 1,
               tension: 10,
               friction: 10
          }
     });
     return (
          <div className='w-6 h-6' onClick={() => setTheme(currentTheme === 'light' ? 'dark' : 'light')}>
               {currentTheme === 'light' ? <animated.div style={spring}><Icon icon='line-md:sunny-filled' width='1.5rem' height='1.5rem' color={`${currentTheme === 'light' ? '#000' : '#B5B5B5'}`} /></animated.div> : <Icon icon='line-md:moon-loop' width='1.5rem' height='1.5rem' color={`${currentTheme === 'light' ? '#000' : '#B5B5B5'}`} />}
          </div >
     )
};


export default SwitchModeButton;