import React from 'react'
import { IUseChannelsViewModel } from '../../viewModels/channelsViewModel'

import {
  Container,
  Sidebar,
  Section,
  Avatar,
  UserNameAndTag,
  UserName,
  UserTag,
  UserOptions,
  OptionsButton
} from './styles'

type ChannelsViewProps = {
  viewModel: IUseChannelsViewModel
}

export const ChannelsView = ({ viewModel }: ChannelsViewProps) => {
  return (
    <Container>
      <Sidebar />
      <Section>
        <Avatar></Avatar>
        <UserNameAndTag>
          <UserName>guilospanck</UserName>
          <UserTag>#1042</UserTag>
        </UserNameAndTag>
        <UserOptions>
          <OptionsButton></OptionsButton>
          <OptionsButton></OptionsButton>
          <OptionsButton></OptionsButton>
        </UserOptions>
      </Section>
    </Container>
  )
}
