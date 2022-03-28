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
  const DISCORD_LOGO_COLOR = '#5865F2'

  return (
    <Sidebar data-testid="sidebar-component">
      {
        viewModel.servers.map((item: number, index: number) =>
          (
          <LinkStyled key={`${item}-${index}`} height={48} width={48} color={DISCORD_LOGO_COLOR}>
            <DiscordSVG
              width={42}
              height={42}
              fill={DISCORD_LOGO_COLOR}
              onMouseOver={(e) => e.currentTarget.setAttribute('fill', '#FFF')}
              onMouseLeave={(e) => e.currentTarget.setAttribute('fill', DISCORD_LOGO_COLOR)}
            />
          </LinkStyled>
          )
        )
      }
    </Sidebar>
  )
}
