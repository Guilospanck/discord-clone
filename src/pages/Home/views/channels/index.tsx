import React from 'react'

import {
  Container
} from './styles'

type ChannelsViewProps = {
  ChannelsSidebarComponent: React.FC,
  ChannelsSectionComponent: React.FC
}

export const ChannelsView = ({ ChannelsSectionComponent, ChannelsSidebarComponent }: ChannelsViewProps) => {
  return (
    <Container>
      <ChannelsSidebarComponent />
      <ChannelsSectionComponent />
    </Container>
  )
}
