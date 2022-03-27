import styled from 'styled-components'

const SIDEBAR_BG_COLOR = '#2f3136'
const CONTENT_BG_COLOR = '#36393f'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const Sidebar = styled.nav`
  display: flex;
  flex: 0 0 auto; // {max} {min} {ideal size}. In other words: stay the same size
  flex-direction: column;
  width: 240px;
  background-color: ${SIDEBAR_BG_COLOR};
`

export const Content = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: ${CONTENT_BG_COLOR};
`

export const Section = styled.section`
  background-color: ${CONTENT_BG_COLOR};
`

export const Article = styled.article`
  
`
