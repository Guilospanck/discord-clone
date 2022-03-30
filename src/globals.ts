import styled, { createGlobalStyle } from 'styled-components'

const SCROLLBAR_TRACK_BG = "#2e3338"
const SCROLLBAR_THUMB_BG = "#202225"

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    width: 100%;
    height: 100%;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #36393f;
  }
  html {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    height: 100%;
  }
  *,
  *::before,
  *::after {
    -webkit-box-sizing: inherit;
    box-sizing: inherit;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  /* Changing scrollbar styles */
  *::-webkit-scrollbar {
    width: 16px;
    height: 16px;
  }

  *::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  *::-webkit-scrollbar-thumb {
    background-color: ${SCROLLBAR_THUMB_BG};
    min-height: 40px;
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
  }

  *::-webkit-scrollbar-track {
    border: 4px solid transparent;
    background-clip: padding-box;
    border-radius: 8px;
    margin-bottom: 8px;
    background-color: ${SCROLLBAR_TRACK_BG};
  }

`

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`
