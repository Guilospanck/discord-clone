import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { GlobalStyle } from './globals'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
)
