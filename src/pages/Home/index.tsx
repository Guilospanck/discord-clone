import React from 'react'

/** Views */
import { HomeView } from './views'
import { ChannelsView } from './views/channels'
import { ChannelsSectionView } from './views/channels/channels_section'

/** ViewModels */
import { useHomeViewModel } from './viewModels/homeViewModel'
import { useChannelsViewModel } from './viewModels/channelsViewModel'
import { useChannelsSectionViewModel } from './viewModels/channelsSectionViewModel'

/** Components */
const ChannelsSectionComponent = () => {
  const viewModel = useChannelsSectionViewModel()

  return <ChannelsSectionView viewModel={viewModel} />
}

const ChannelsComponent = () => {
  const viewModel = useChannelsViewModel()
  return <ChannelsView viewModel={viewModel} ChannelsSectionComponent={ChannelsSectionComponent} />
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
