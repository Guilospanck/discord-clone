import React from 'react'
import { UseChannelsSidebarViewModelReturnType } from '~/pages/Home/viewModels/channelsSidebarViewModel'

import {
  Sidebar
} from './styles'

type ChannelsSidebarViewProps = {
  viewModel: UseChannelsSidebarViewModelReturnType
}

export const ChannelsSidebarView = ({ viewModel }: ChannelsSidebarViewProps) => {
  return (
    <Sidebar />
  )
}
