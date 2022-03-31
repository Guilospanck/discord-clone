import React, { FunctionComponent } from 'react'

import {
  LinkContainer
} from './styles'

type ButtonProps = {
  width: number,
  height: number,
  backgroundColor?: string,
  borderRadius?: number,
  color?: string,
  onClickFn?: (elementIndex: number) => void,
  elementIndex?: number
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
      onClick={() => { props.onClickFn && props.onClickFn(props.elementIndex) }}
    >
      {props.children}
    </LinkContainer>
  )
}
