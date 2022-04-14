import React, { useState } from 'react'
import './Main.css'
import { Aside } from '../Aside/Aside'
import { NavLink, Route, Routes } from 'react-router-dom'
import admin from '../../../img/Round1.png'
import logout from '../../../img/logOut.png'
import { Devise } from '../Header/HeaderDevice/Devise'
import { HeaderAdd } from '../Header/HeaderDevice/HeaderAdd/HeaderAdd'
import { HeaderGas } from '../Header/HeaderGas/HeaderGas'
import { HeaderGasAdd } from '../Header/HeaderGas/HeaderGasAdd/HeaderGasAdd'
export const Main = () => {
  const [contact, setContact] = useState()
  return (
    <div className='Main'>
      <Aside />
      <div className='Header'>
        <div className='headers'>
          <div className='header-admin'>
            <div className='admin-img'>
              <img src={admin} />
              <h1>Adminidtrator</h1>
            </div>
            <div className='log-out'>
              <NavLink to='/'>Log out<img src={logout} /></NavLink>
            </div>
          </div>
        </div>
        <Routes>
          <Route path='/'>
            <Route path='devise/*' element={<Devise contact={contact} />}>
              <Route path='add' element={<HeaderAdd contact={contact} setContact={setContact} />} />
            </Route>
            <Route path='gas/*' element={<HeaderGas />}>
              <Route path='gasadd' element={<HeaderGasAdd />} />
            </Route>
          </Route>
        </Routes>


      </div>
    </div>
  )
}
