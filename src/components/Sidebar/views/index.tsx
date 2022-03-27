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
  return (
    <Sidebar data-testid="sidebar-component">
      {
        viewModel.servers.map((item: number, index: number) =>
          (
          <LinkStyled key={`${item}-${index}`} height={48} width={48}>
            <DiscordSVG width={42} height={42} />            
          </LinkStyled>
          )
        )
      }
    </Sidebar>
  )
}
