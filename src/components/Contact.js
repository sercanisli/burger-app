import React from 'react'
import BannerImage from '../assets/banner.png';
import '../styles/Contact.css';

export const Contact = () => {
  return (
    <div className='contact'>
      <div className='leftSide' style={{backgroundImage:`url(${BannerImage})`}}>

      </div>
      <div className='rightSide'>
        <h1>Bizimle İletişime Geçin</h1>
        <form>
          <label>Ad Soyad</label>
          <input type='text' name='name' placeholder='Lütfen adınızı ve soy adınızı giriniz...'/>
          <label>Email</label>
          <input type='email' name='email' placeholder='Lütfen geçerli bir mail giriniz...'/>
          <label>Mesajınız</label>
          <textarea rows="6" name='message' placeholder='Lütfen mesajınızı giriniz..'></textarea>
        </form>
      </div>
    </div>
  )
}
