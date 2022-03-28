import React, { FunctionComponent } from 'react'

import {
  LinkContainer
} from './styles'

type ButtonProps = {
  width: number,
  height: number,
  backgroundColor?: string,
  borderRadius?: number,
  color?: string
}

export const LinkStyled: FunctionComponent<ButtonProps> = (props) => {
  return (
    <LinkContainer
      width={props.width}
      height={props.height}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius}
      color={props.color}
      data-testid="link-container"
    >
      {props.children}
    </LinkContainer>
  )
}
