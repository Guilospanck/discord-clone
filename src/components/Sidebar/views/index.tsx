import React from 'react'
import { IUseSidebarViewModel } from '../viewModels/sidebarViewModel'
import { LinkStyled } from '../../Link'
import DiscordSVG from '../../../assets/images/Discord-Logo-Color.svg'

import {
  Sidebar
} from './styles'

export interface SideBarViewProps {
  viewModel: IUseSidebarViewModel
}

export const SidebarView = ({ viewModel }: SideBarViewProps) => {
  const DiscordLinkStyledRender = (item: number, index: number) => {
    return (
      <LinkStyled key={`${item}-${index}`} height={48} width={48} color={viewModel.DISCORD_LOGO_COLOR}>
        <DiscordSVG
          width={42}
          height={42}
          fill={viewModel.DISCORD_LOGO_COLOR}
          onMouseOver={(e) => e.currentTarget.setAttribute('fill', '#FFF')}
          onMouseLeave={(e) => e.currentTarget.setAttribute('fill', viewModel.DISCORD_LOGO_COLOR)}
        />
      </LinkStyled>
    )
  }

  return (
    <Sidebar data-testid="sidebar-component">
      {
        viewModel.servers.map((item: number, index: number) =>
          (
            index === 0
              ? DiscordLinkStyledRender(item, index)
              : <LinkStyled key={`${item}-${index}`} height={48} width={48}>
              <DiscordSVG
                width={42}
                height={42}
              />
            </LinkStyled>
          )
        )
      }
    </Sidebar>
  )
}
