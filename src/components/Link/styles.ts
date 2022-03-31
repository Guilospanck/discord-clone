import styled from 'styled-components'

const BG_COLOR = '#36393f'

type LinkProps = {
  width: number,
  height: number,
  backgroundColor?: string
  borderRadius?: number
  color?: string
}

export const LinkContainer = styled.a<LinkProps>`
  display: flex;  
  flex: 0 0 auto;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor ?? BG_COLOR};
  
  outline: none;
  border: none;
  border-radius: ${props => props.borderRadius ?? 30}px;

  cursor: pointer;

  position: relative;

  align-items: center;
  justify-content: center;

  overflow: hidden;

  transition: border-radius .3s ease-out, background-color .3s ease-out;    
  
  &:hover {
    border-radius: 15px;
    background-color: ${props => props.color ?? BG_COLOR};
  }
`
