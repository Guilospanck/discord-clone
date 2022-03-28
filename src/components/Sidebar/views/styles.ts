import styled from 'styled-components'

const SIDEBAR_BG_COLOR = '#202225'

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${SIDEBAR_BG_COLOR};
  
  width: 72px;
  height: 100%;

  padding: 12px 0 0;
  align-items: center;
  gap: 1%;
`

export const DividerContainer = styled.div`
  margin: 8px 0;
  display: flex;
  justify-content: center;
  width: 72px;

  div {
    height: 2px;
    width: 32px;
    border-radius: 1px;
    background-color: hsla(0,0%,100%,0.06);
  }
`
