import React from 'react'
import { IuseHomeViewModel } from '../viewModels/homeViewModel'

import {
  Container,
  Sidebar,
  Content,
  Section,
  Article
} from './styles'

export interface HomeViewInterface {
  viewModel: IuseHomeViewModel
}

export const HomeView = ({ viewModel: IuseHomeViewModel }: HomeViewInterface) => {
  return (
    <Container>
      <Sidebar></Sidebar>
      <Content>
        <Section></Section>
        <Article></Article>
      </Content>
    </Container>
  )
}
