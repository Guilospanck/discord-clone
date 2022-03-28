import React from 'react'
import { IUseChannelsViewModel } from '../../viewModels/channelsViewModel'

import {
  Container,
  Sidebar
} from './styles'

type ChannelsViewProps = {
  viewModel: IUseChannelsViewModel,
  ChannelsSectionComponent: React.FC
}

export const ChannelsView = ({ viewModel, ChannelsSectionComponent }: ChannelsViewProps) => {
  return (
    <Container>
      <Sidebar />
      <ChannelsSectionComponent />
    </Container>
  )
}
