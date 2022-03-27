import React from 'react'
import { IUseChannelsViewModel } from '../../viewModels/channelsViewModel'

import {
  Sidebar
} from './styles'

type ChannelsViewProps = {
  viewModel: IUseChannelsViewModel
}

export const ChannelsView = ({ viewModel }: ChannelsViewProps) => {
  return (
    <Sidebar />
  )
}
