import React from 'react'
import { IUseHomeViewModel } from '../viewModels/homeViewModel'

import {
  Container,
  Content,
  Section,
  Article
} from './styles'

export type HomeViewProps = {
  viewModel: IUseHomeViewModel,
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
