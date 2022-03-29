import React from 'react'
import { UseHomeViewModelReturnType } from '../viewModels/homeViewModel'

import {
  Container,
} from './styles'

type HomeViewProps = {
  viewModel: UseHomeViewModelReturnType,
  ChannelsComponent: React.FC,
  ChatComponent: React.FC
}

export const HomeView = ({ viewModel, ChannelsComponent, ChatComponent }: HomeViewProps) => {
  return (
    <Container>
      <ChannelsComponent></ChannelsComponent>
      <ChatComponent></ChatComponent>
    </Container>
  )
}
