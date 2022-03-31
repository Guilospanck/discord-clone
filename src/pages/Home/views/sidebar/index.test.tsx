import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SidebarView } from './index'

import { UseSidebarViewModelReturnType } from '../../viewModels/sidebar/sidebarViewModel'
import { serversMocked } from '../../../../../__mocks__/homeMocks'

function makeSut () {
  const viewModel = (): UseSidebarViewModelReturnType => {
    const servers = serversMocked
    const DISCORD_LOGO_COLOR = '#5865F2'
    const handleSidebarLinkClick = () => {}

    return {
      allServers: servers,
      DISCORD_LOGO_COLOR,
      handleSidebarLinkClick
    }
  }

  const sut = render(
    <SidebarView viewModel={viewModel()} />
  )

  return sut
}

describe('Sidebar component tests', () => {
  afterEach(() => {
    cleanup()
    jest.clearAllMocks()
  })

  it('should render 3 <LinkStyled> components with an image inside', () => {
    // arrange
    const testId = 'sidebar-component'
    const attributes = ['data-testid', 'class']
    const linkStyledComponentsAttributesOtherServers = ['width', 'height', 'data-testid', 'class']
    const linkedStyledWidthAttribute = 48
    const linkedStyledHeightAttribute = 48

    // act
    const sut = makeSut()

    // assert
    expect(sut.getByTestId(testId)).toBeTruthy()
    expect(sut.getByTestId(testId).nodeName).toEqual('NAV') // <nav /> tag
    expect(sut.getByTestId(testId).getAttributeNames()).toEqual(attributes)
    expect(sut.getByTestId(testId).children.length).toEqual(6)

    // Test only the servers
    for (let i = 2; i < 6; i++) {
      expect(sut.getByTestId(testId).children.item(i).nodeName).toEqual('A') // <a /> tag
      expect(sut.getByTestId(testId).children.item(i).getAttributeNames()).toEqual(linkStyledComponentsAttributesOtherServers)
      expect(sut.getByTestId(testId).children.item(i).getAttribute('width')).toEqual(linkedStyledWidthAttribute.toString())
      expect(sut.getByTestId(testId).children.item(i).getAttribute('height')).toEqual(linkedStyledHeightAttribute.toString())
    }
  })
})
