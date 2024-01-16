import React from 'react'
import {Data} from '../helpers/Data.js';
import '../styles/Menu.css';
import MenuItem  from './MenuItem.js';

function Menu() {
  return (
    <div className='menu'>
      <h2 className='menuTitle'>Burgerlerimiz</h2>
      <div className='menuList'>
        {Data.map((menuItem, key)=>{
          return (
            <MenuItem
              key={key}
              image = {menuItem.image}
              name = {menuItem.name}
              content = {menuItem.content}
              price = {menuItem.price}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Menu