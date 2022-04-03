import React from 'react'
import { UseSidebarViewModelReturnType } from '../../viewModels/sidebar/sidebarViewModel'
import { LinkStyled } from '../../../../components/Link'
import DiscordSVG from '../../../../assets/images/Discord-Logo-Color.svg'

import {
  Sidebar,
  DividerContainer,
  ServersContainer,
  PillAndImageContainer,
  ImageContainer,
  PillContainer,
  Pill
} from './styles'
import { Server } from '../../types/homeTypes'

const DiscordLinkStyledRender = React.memo(({ discordLogoColor }: { discordLogoColor: string }) => {
  return (
    <LinkStyled key="discord-link-styled-render" height={48} width={48} color={discordLogoColor}>
      <DiscordSVG
        width={28}
        height={20}
        fill='#FFF'
      />
    </LinkStyled>
  )
})
DiscordLinkStyledRender.displayName = 'DiscordLinkStyledRender' // eslint

type RenderServersProps = {
  allServers: Server[],
  handleOnMouseEnterPillAndImageContainerFn: (serverId: string) => void,
  handleOnMouseLeavePillAndImageContainerFn: (serverId: string) => void,
  serverSelected: Server,
  serverHover: {},
  handleSidebarLinkClickFn: (serverIdx: number) => void,
}

const RenderServers = React.memo((
  {
    allServers,
    handleOnMouseEnterPillAndImageContainerFn,
    handleOnMouseLeavePillAndImageContainerFn,
    serverSelected,
    serverHover,
    handleSidebarLinkClickFn
  }: RenderServersProps
) => {
  const elements = allServers.map((server, index) =>
    (
    <PillAndImageContainer
      key={`pill-${index}`}
      onMouseEnter={() => handleOnMouseEnterPillAndImageContainerFn(server.id)}
      onMouseLeave={() => handleOnMouseLeavePillAndImageContainerFn(server.id)}
    >
      <PillContainer>
        <Pill
          show={serverSelected.id === server.id}
          hovering={serverHover[server.id] ?? false}
        />
      </PillContainer>
      <LinkStyled
        key={`${server.title}-${index}`}
        height={48}
        width={48}
        onClickFn={handleSidebarLinkClickFn}
        elementIndex={index}
      >

        <ImageContainer
          src={server.icon}
          alt={`Icon of server ${server}`}
        />
      </LinkStyled>
    </PillAndImageContainer>
    )
  )

  return <>{elements}</>
})
RenderServers.displayName = 'RenderServers' // eslint

type SideBarViewProps = {
  viewModel: UseSidebarViewModelReturnType
}

export const SidebarView = ({ viewModel }: SideBarViewProps) => {
  return (
    <Sidebar data-testid="sidebar-component">
      <DiscordLinkStyledRender discordLogoColor={viewModel.DISCORD_LOGO_COLOR} />
      <DividerContainer><div></div></DividerContainer>
      <ServersContainer>
        <RenderServers
          allServers={viewModel.allServers}
          handleOnMouseEnterPillAndImageContainerFn={viewModel.handleOnMouseEnterPillAndImageContainer}
          handleOnMouseLeavePillAndImageContainerFn={viewModel.handleOnMouseLeavePillAndImageContainer}
          serverSelected={viewModel.serverSelected}
          serverHover={viewModel.serverHover}
          handleSidebarLinkClickFn={viewModel.handleSidebarLinkClick}
        />
      </ServersContainer>
    </Sidebar>
  )
}
