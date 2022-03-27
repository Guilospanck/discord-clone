import styled from 'styled-components'

type LinkProps = {
  width: number,
  height: number,
  backgroundColor?: string
  borderRadius?: number
}

export const LinkContainer = styled.a<LinkProps>`
  display: flex;
  width: ${props => props.width}px;
  height: ${props => props.height}px;
  background-color: ${props => props.backgroundColor ?? '#FFF'};
  
  outline: none;
  border: none;
  border-radius: ${props => props.borderRadius ?? 30}px;

  cursor: pointer;

  align-items: center;
  justify-content: center;
`