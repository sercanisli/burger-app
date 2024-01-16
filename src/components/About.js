import React from 'react';
import BannerImage from '../assets/banneryeni.jpg';
import '../styles/About.css';

export const About = () => {
  return (
    <div className='about' >
      <div className='aboutTop' style={{backgroundImage:`url(${BannerImage})`}}></div>
      <div className='aboutBottom'>
        <h1> Hakkımızda </h1>
        <p>
          Consectetur consectetur eiusmod culpa eu nostrud ea veniam in enim exercitation. Cillum ex eu ex enim adipisicing ea exercitation reprehenderit consectetur minim do duis. Et duis cupidatat id tempor do laborum Lorem sunt qui velit ut deserunt sit quis.
          Laborum adipisicing non incididunt eu do culpa reprehenderit non.Consectetur consectetur eiusmod culpa eu nostrud ea veniam in enim exercitation. Cillum ex eu ex enim adipisicing ea exercitation reprehenderit consectetur minim do duis. Et duis cupidatat id tempor do laborum Lorem sunt qui velit ut deserunt sit quis.
          Laborum adipisicing non incididunt eu do culpa reprehenderit non.Consectetur consectetur eiusmod culpa eu nostrud ea veniam in enim exercitation. Cillum ex eu ex enim adipisicing ea exercitation reprehenderit consectetur minim do duis. Et duis cupidatat id tempor do laborum Lorem sunt qui velit ut deserunt sit quis.
          Laborum adipisicing non incididunt eu do culpa reprehenderit non.Consectetur consectetur eiusmod culpa eu nostrud ea veniam in enim exercitation. Cillum ex eu ex enim adipisicing ea exercitation reprehenderit consectetur minim do duis. Et duis cupidatat id tempor do laborum Lorem sunt qui velit ut deserunt sit quis.
          Laborum adipisicing non incididunt eu do culpa reprehenderit non.
          </p>
      </div>
    </div>
  );
};
