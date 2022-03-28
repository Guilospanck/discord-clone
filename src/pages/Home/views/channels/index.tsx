import React from 'react'
import { IUseChannelsViewModel } from '../../viewModels/channelsViewModel'
import MicrophoneSVG from '../../../../assets/images/Discord-microphone.svg'
import HeadphoneSVG from '../../../../assets/images/Discord-headphone.svg'
import ConfigGearSVG from '../../../../assets/images/Discord-config-gear.svg'

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
        <Avatar>
          <img src="https://cdn.discordapp.com/avatars/759237066999201852/e780bd32be2d3b5e78179ddc8da20e77.webp?size=32" alt=" " aria-hidden="true" />
        </Avatar>
        <UserNameAndTag>
          <UserName>guilospanck</UserName>
          <UserTag>#1042</UserTag>
        </UserNameAndTag>
        <UserOptions>
          <OptionsButton>
            <MicrophoneSVG />
          </OptionsButton>
          <OptionsButton>
            <HeadphoneSVG />
          </OptionsButton>
          <OptionsButton>
            <ConfigGearSVG />
          </OptionsButton>
        </UserOptions>
      </Section>
    </Container>
  )
}
