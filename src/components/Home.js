import React from 'react';
import '../styles/Home.css';
import { Link } from 'react-router-dom';
import BannerImage from '../assets/banneryeni.jpg';

export const Home = () => {
  return (
    <div className='mainPage' style={{backgroundImage:`url(${BannerImage})`}}> 
      <div className='order'> 
        <Link to="/menu"/>
        <button>Sipariş ver</button>
      </div>
    </div>
  )
}
