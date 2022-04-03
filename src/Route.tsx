import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Home } from './pages/Home'

export const AppRoute = () => {

  const BASENAME = process.env.NODE_ENV === 'development' ? '/' : '/discord-clone'; // because of github pages

  return (
    <BrowserRouter basename={BASENAME}>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}
