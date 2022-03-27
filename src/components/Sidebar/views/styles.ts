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
