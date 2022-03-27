import React from 'react'

/** Views */
import { HomeView } from './views'
import { ChannelsView } from './views/channels'

/** ViewModels */
import { useHomeViewModel } from './viewModels/homeViewModel'
import { useChannelsViewModel } from './viewModels/channelsViewModel'

/** Components */
const ChannelsComponent = () => {
  const viewModel = useChannelsViewModel()
  return <ChannelsView viewModel={viewModel} />
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
