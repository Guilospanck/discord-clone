import styled from 'styled-components'

const HEADER_PRIMARY_COLOR = '#FFF'

export const ServerTitleContainer = styled.div`
  cursor: pointer;
`

export const ServerTitleHeader = styled.header`
  position: relative;
  font-family: Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif;
  font-weight: 500;
  padding: 0 16px;
  height: 48px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  z-index: 3;
  
  transition: background-color .1s linear;
  color: ${HEADER_PRIMARY_COLOR};
  
  box-shadow: 0 1px 0 rgba(4,4,5,0.2),0 1.5px 0 rgba(6,6,7,0.05),0 2px 0 rgba(4,4,5,0.05);
`

export const ServerTitleH1 = styled.h1`
  font-size: 15px;
  line-height: 20px;
  font-weight: 600;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  flex: 1;
  z-index: 1;
`

export const ServerTitleDropdown = styled.div`
  z-index: 4;
  height: 100%;
  display: flex;
  align-items: center;
`
