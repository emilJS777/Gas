import React from 'react'
import logo from '../../../img/logo.png'
import './Aside.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import NestedList from './AsideList'
export const Aside = () => {
  return (
    <div className='Aside'>
      <div className='aside-logo'>
        <div className='logo'>
          <h1>Gas</h1>
          <img src={logo} />
        </div>
        <div className='menu'>
          <GiHamburgerMenu />
        </div>
      </div>
      <NestedList />
    </div>
  )
}


