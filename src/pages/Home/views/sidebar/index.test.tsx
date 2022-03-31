import React from 'react'
import { cleanup, render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SidebarView } from './index'

import { UseSidebarViewModelReturnType } from '../../viewModels/sidebar/sidebarViewModel'
import { serversMocked } from '../../../../../__mocks__/homeMocks'

function makeSut () {
  const servers = serversMocked

  const viewModel = (): UseSidebarViewModelReturnType => {
    const DISCORD_LOGO_COLOR = '#5865F2'
    const handleSidebarLinkClick = () => { }
    const serverSelected = servers[0]
    const handleOnMouseEnterPillAndImageContainer = () => { }
    const handleOnMouseLeavePillAndImageContainer = () => { }
    const serverHover = {}

    return {
      allServers: servers,
      DISCORD_LOGO_COLOR,
      handleSidebarLinkClick,
      serverSelected,
      handleOnMouseEnterPillAndImageContainer,
      handleOnMouseLeavePillAndImageContainer,
      serverHover
    }
  }

  const sut = render(
    <SidebarView viewModel={viewModel()} />
  )

  return {
    sut,
    servers
  }
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
    const containerOfServersAttributes = ['class']
    const pillContainerAttributes = ['class']
    const linkStyledAttributes = ['width', 'height', 'data-testid', 'class']
    const linkedStyledWidthAttribute = 48
    const linkedStyledHeightAttribute = 48

    // act
    const { sut, servers } = makeSut()

    // assert
    expect(sut.getByTestId(testId)).toBeTruthy()
    expect(sut.getByTestId(testId).nodeName).toEqual('NAV') // <nav /> tag
    expect(sut.getByTestId(testId).getAttributeNames()).toEqual(attributes)
    expect(sut.getByTestId(testId).children.length).toEqual(3)

    // Test only the servers
    const serversFromSidebar = sut.getByTestId(testId).children.item(2)
    for (let i = 0; i < servers.length; i++) {
      expect(serversFromSidebar.children.item(i).nodeName).toEqual('DIV') // <div /> tag
      expect(serversFromSidebar.children.item(i).getAttributeNames()).toEqual(containerOfServersAttributes)
      expect(serversFromSidebar.children.item(i).children.length).toEqual(2) // <PillContainer> and <LinkStyled>

      expect(serversFromSidebar.children.item(i).children.item(0).getAttributeNames()).toEqual(pillContainerAttributes)
      expect(serversFromSidebar.children.item(i).children.item(1).getAttributeNames()).toEqual(linkStyledAttributes)

      expect(serversFromSidebar.children.item(i).children.item(1).getAttribute('width')).toEqual(linkedStyledWidthAttribute.toString())
      expect(serversFromSidebar.children.item(i).children.item(1).getAttribute('height')).toEqual(linkedStyledHeightAttribute.toString())
    }
  })
})
