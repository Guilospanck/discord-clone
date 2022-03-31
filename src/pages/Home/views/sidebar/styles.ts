import styled from 'styled-components'

const SIDEBAR_BG_COLOR = '#202225'
const IMAGE_WIDTH = 60
const IMAGE_HEIGHT = 60

export const Sidebar = styled.nav`
  display: flex;
  flex-direction: column;
  background-color: ${SIDEBAR_BG_COLOR};
  
  min-width: 72px;
  height: 100vh;
  max-height: 100vh;

  overflow-y: auto;
  overflow-x: hidden;

  padding: 12px 0 0;
  align-items: center;
  gap: 1%;
  
  &::-webkit-scrollbar {
    width: 0 !important;
    background: transparent !important;
  }

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

export const ServersContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2%;
  width: 100%;
  height: 100%;
`

export const PillAndImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
`

export const PillContainer = styled.div`
  position: absolute;
  top: 20px;
  left: 0;
`

type PillProps = {
  show: boolean,
  hovering: boolean
}

export const Pill = styled.span<PillProps>`
  opacity: 1;
  
  position: absolute;
  width: 8px;
  border-radius: 0 4px 4px 0;
  margin-left: -4px;
  background-color: #FFF;
  
  transition: height .3s ease-out, visibility .3s ease-out, transform .3s ease-out;    
  
  height: ${props => (props.hovering && !props.show) ? '20' : (props.show ? '40' : '8')}px;    
  visibility: ${props => props.show || (props.hovering && !props.show) ? 'visible' : 'hidden'};
  transform: ${props => (props.show) ? 'translateY(-15px)' : 'translateY(-5px)'};
 
`

export const ImageContainer = styled.img`  
  width: ${IMAGE_WIDTH}px;
  height: ${IMAGE_HEIGHT}px;
  border-radius: 50%;
  transform: scale(1.5);
  
  &:before {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: #FFF;
  }
`
