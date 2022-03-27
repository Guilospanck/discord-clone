import styled from 'styled-components'

const SIDEBAR_BG_COLOR = '#2f3136'

export const Sidebar = styled.nav`
  display: flex;
  flex: 0 0 auto; // {max} {min} {ideal size}. In other words: stay the same size
  flex-direction: column;
  width: 240px;
  background-color: ${SIDEBAR_BG_COLOR};
`
