import React from 'react'
import { IUseChannelsSidebarViewModel } from '~/pages/Home/viewModels/channelsSidebarViewModel'

import {
  Sidebar
} from './styles'

type ChannelsSidebarViewProps = {
  viewModel: IUseChannelsSidebarViewModel
}

export const ChannelsSidebarView = ({ viewModel }: ChannelsSidebarViewProps) => {
  return (
    <Sidebar />
  )
}
