import React from 'react'
import add from '../../../../../img/add.png'
import adds from '../../../../../img/+.png'
import del from '../../../../../img/del.png'
import { GiHamburgerMenu } from 'react-icons/gi';
import { Link } from 'react-router-dom';
export const HeaderGasAdd = () => {
  return (
    <div className='headerGasadd'>
      <div className='devise-icons-menu'>
        <GiHamburgerMenu />
        <h2>Add info</h2>
      </div>
      <div className='devise-icon'>
        <div className='devise-icon-add'>
          <img src={add} />
          <img src={adds} />
          <Link to='add'><h2>Add</h2></Link>
        </div>
        <div className='devise-icon-del'>
          <img src={del} />
          <h2>Delete</h2>
        </div>
      </div>

    </div>
  )
}
