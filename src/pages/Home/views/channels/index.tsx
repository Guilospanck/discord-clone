import React from 'react'

import {
  Container
} from './styles'

type ChannelsViewProps = {
  ChannelsServerTitleComponent: React.FC,
  ChannelsSidebarComponent: React.FC,
  ChannelsSectionComponent: React.FC
}

export const ChannelsView = ({ ChannelsServerTitleComponent, ChannelsSectionComponent, ChannelsSidebarComponent }: ChannelsViewProps) => {
  return (
    <Container>
      <ChannelsServerTitleComponent />
      <ChannelsSidebarComponent />
      <ChannelsSectionComponent />
    </Container>
  )
}
