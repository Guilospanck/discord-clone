import React from 'react'
import { UseChannelsSidebarViewModelReturnType } from '~/pages/Home/viewModels/channelsSidebarViewModel'

import {
  Container
} from './styles'

type ChannelsSidebarViewProps = {
  viewModel: UseChannelsSidebarViewModelReturnType,
}

export const ChannelsSidebarView = ({ viewModel }: ChannelsSidebarViewProps) => {
  return (
    <Container>

    </Container>
  )
}
