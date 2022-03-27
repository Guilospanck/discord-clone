import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Sidebar } from './components/sidebar'
import { GlobalStyle, Container } from './globals'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Container>
      <Sidebar />
      <App />
    </Container>
  </React.StrictMode>,
  document.getElementById('root')
)
