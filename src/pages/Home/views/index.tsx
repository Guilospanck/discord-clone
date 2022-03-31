import React from 'react'

import {
  Container
} from './styles'

type HomeViewProps = {
  SidebarComponent: React.FC,
  ChannelsComponent: React.FC,
  ChatComponent: React.FC
}

export const HomeView = ({ SidebarComponent, ChannelsComponent, ChatComponent }: HomeViewProps) => {
  return (
    <Container>
      <SidebarComponent />
      <ChannelsComponent />
      <ChatComponent />
    </Container>
  )
}
