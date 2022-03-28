import React from 'react'
import { UseHomeViewModelReturnType } from '../viewModels/homeViewModel'

import {
  Container,
  Content,
  Section,
  Article
} from './styles'

type HomeViewProps = {
  viewModel: UseHomeViewModelReturnType,
  ChannelsComponent: React.FC
}

export const HomeView = ({ viewModel, ChannelsComponent }: HomeViewProps) => {
  return (
    <Container>
      <ChannelsComponent></ChannelsComponent>
      <Content>
        <Section></Section>
        <Article></Article>
      </Content>
    </Container>
  )
}
