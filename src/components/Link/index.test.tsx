import React, { ReactElement } from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { LinkStyled } from './index'

type SutOptions = {
  width: number,
  height: number,
  backgroundColor?: string,
  borderRadius?: number
  image?: ReactElement,
  onClickFn?: (elemKey: string) => void,
  elemKey?: string
}

function makeSut (props: SutOptions) {
  const sut = render(
    <LinkStyled
      width={props.width}
      height={props.height}
    >
      {props.image}
    </LinkStyled>
  )

  return sut
}

describe('Link Components tests', () => {
  afterEach(cleanup)

  it('Should render proper LinkContainer with <a> tag and no content', () => {
    // arrange
    const width = 30
    const height = 30
    const testId = 'link-container'
    const attributes = ['width', 'height', 'data-testid', 'class']

    // act
    const sut = makeSut({ width, height })

    // assert
    expect(sut.getByTestId(testId)).toBeTruthy()
    expect(sut.getByTestId(testId).getAttributeNames()).toEqual(attributes)
    expect(sut.getByTestId(testId).getAttribute('width')).toEqual(width.toString())
    expect(sut.getByTestId(testId).getAttribute('height')).toEqual(height.toString())
    expect(sut.getByTestId(testId).innerHTML).toEqual('')
    expect(sut.getByTestId(testId).nodeName).toEqual('A') // <a /> tag
  })

  it('Should render proper LinkContainer with <a> tag and img content', () => {
    // arrange
    const width = 30
    const height = 30
    const image = <img src="" alt="test image" />
    const imageStr = '<img src="" alt="test image">'
    const testId = 'link-container'
    const attributes = ['width', 'height', 'data-testid', 'class']

    // act
    const sut = makeSut({ width, height, image })
    const innerHtmlParsed = sut.getByTestId(testId).innerHTML.replace(/\\\//g, '')

    // assert
    expect(sut.getByTestId(testId)).toBeTruthy()
    expect(sut.getByTestId(testId).getAttributeNames()).toEqual(attributes)
    expect(sut.getByTestId(testId).getAttribute('width')).toEqual(width.toString())
    expect(sut.getByTestId(testId).getAttribute('height')).toEqual(height.toString())
    expect(innerHtmlParsed).toStrictEqual(imageStr)
    expect(sut.getByTestId(testId).nodeName).toEqual('A') // <a /> tag
  })
})
