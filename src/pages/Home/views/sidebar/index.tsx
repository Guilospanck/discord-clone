import React from 'react'
import { UseSidebarViewModelReturnType } from '../../viewModels/sidebar/sidebarViewModel'
import { LinkStyled } from '../../../../components/Link'
import DiscordSVG from '../../../../assets/images/Discord-Logo-Color.svg'

import {
  Sidebar,
  DividerContainer,
  ImageContainer
} from './styles'

type SideBarViewProps = {
  viewModel: UseSidebarViewModelReturnType
}

export const SidebarView = ({ viewModel }: SideBarViewProps) => {
  const DiscordLinkStyledRender = () => {
    return (
      <LinkStyled key="discord-link-styled-render" height={48} width={48} color={viewModel.DISCORD_LOGO_COLOR}>
        <DiscordSVG
          width={28}
          height={20}
          fill='#FFF'
        />
      </LinkStyled>
    )
  }

  return (
    <Sidebar data-testid="sidebar-component">
      <DiscordLinkStyledRender />
      <DividerContainer><div></div></DividerContainer>
      {
        viewModel.allServers.map((server, index) =>
          (
          <LinkStyled
            key={`${server.serverTitle}-${index}`}
            height={48}
            width={48}
            onClickFn={viewModel.handleSidebarLinkClick}
            serverIdx={index}
          >
            <ImageContainer
              src={server.serverIcon}
              alt={`Icon of server ${server}`}
            />
          </LinkStyled>
          )
        )
      }
    </Sidebar>
  )
}
