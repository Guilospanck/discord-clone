import React from 'react'
import { UseChannelsServerTitleViewModelReturnType } from '../../../viewModels/channels/channelsServerTitleViewModel'
import DiscordDropdownSVG from '../../../../../assets/images/Discord-dropdown.svg'

import {
  ServerTitleContainer,
  ServerTitleHeader,
  ServerTitleH1,
  ServerTitleDropdown
} from './styles'

type ServerTitleViewProps = {
  viewModel: UseChannelsServerTitleViewModelReturnType
}

export const ChannelsServerTitleView = ({ viewModel }: ServerTitleViewProps) => {
  return (
    <ServerTitleContainer>
      <ServerTitleHeader>
        <ServerTitleH1>{viewModel.serverTitleMock}</ServerTitleH1>
        <ServerTitleDropdown>
          <DiscordDropdownSVG />
        </ServerTitleDropdown>
      </ServerTitleHeader>
    </ServerTitleContainer>
  )
}
