import React from 'react'

/** Views */
import { HomeView } from './views'
import { ChannelsView } from './views/channels'
import { ChannelsSectionView } from './views/channels/channels_section'
import { ChannelsSidebarView } from './views/channels/channels_sidebar'

/** ViewModels */
import { useHomeViewModel } from './viewModels/homeViewModel'
import { useChannelsSectionViewModel } from './viewModels/channelsSectionViewModel'
import { useChannelsSidebarViewModel } from './viewModels/channelsSidebarViewModel'

/** Components */
const ChannelsSectionComponent = () => {
  const viewModel = useChannelsSectionViewModel()
  return <ChannelsSectionView viewModel={viewModel} />
}

const ChannelsSidebarComponent = () => {
  const viewModel = useChannelsSidebarViewModel()
  return <ChannelsSidebarView viewModel={viewModel} />
}

const ChannelsComponent = () => {
  return <ChannelsView
    ChannelsSectionComponent={ChannelsSectionComponent}
    ChannelsSidebarComponent={ChannelsSidebarComponent}
  />
}

export const Home = () => {
  const viewModel = useHomeViewModel()

  return (
    <HomeView
      viewModel={viewModel}
      ChannelsComponent={ChannelsComponent}
    />
  )
}
