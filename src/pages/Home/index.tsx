import React from 'react'

/** Views */
import { HomeView } from './views'
import { ChannelsView } from './views/channels'
import { ChannelsServerTitleView } from './views/channels/channels_server_title'
import { ChannelsSectionView } from './views/channels/channels_section'
import { ChannelsSidebarView } from './views/channels/channels_sidebar'

/** ViewModels */
import { useHomeViewModel } from './viewModels/homeViewModel'
import { useChannelsServerTitleViewModel } from './viewModels/channelsServerTitleViewModel'
import { useChannelsSectionViewModel } from './viewModels/channelsSectionViewModel'
import { useChannelsSidebarViewModel } from './viewModels/channelsSidebarViewModel'

/** Components */
const ChannelsServerTitleComponent = () => {
  const viewModel = useChannelsServerTitleViewModel()
  return <ChannelsServerTitleView viewModel={viewModel} />
}

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
    ChannelsServerTitleComponent={ChannelsServerTitleComponent}
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
