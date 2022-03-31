import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { Sidebar } from './components/Sidebar'
import { GlobalStyle, Container } from './globals'

const container = document.getElementById('root')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <App />
    </Container>
  </React.StrictMode>
)