import React from 'react'
import { Route, Router, Routes } from 'react-router-dom'
import { HeaderGas } from './Components/Header/HeaderGas/HeaderGas'
// import { Aside } from './Components/Aside/Aside'
// import { Header } from './Components/Header/Header'
import { LoginPage } from './Components/LoginPage/LoginPage'
import { Main } from './Components/Main/Main'
export const Admin = () => {
  return (
    <div className='Admin'>
      <Routes>
        <Route path='/' element={<LoginPage />} />
        <Route path='device/*' element={<Main />} />
      </Routes>
    </div>
  )
}
