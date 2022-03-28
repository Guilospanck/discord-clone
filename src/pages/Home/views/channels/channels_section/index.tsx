import React from 'react'
import { UseChannelsSectionViewModelReturnType } from '../../../viewModels/channelsSectionViewModel'

import MicrophoneSVG from '../../../../../assets/images/Discord-microphone.svg'
import HeadphoneSVG from '../../../../../assets/images/Discord-headphone.svg'
import ConfigGearSVG from '../../../../../assets/images/Discord-config-gear.svg'

import {
  Section,
  Avatar,
  UserNameAndTag,
  UserName,
  UserTag,
  UserOptions,
  OptionsButton
} from './styles'

type ChannelsSectionViewProps = {
  viewModel: UseChannelsSectionViewModelReturnType
}

export const ChannelsSectionView = ({ viewModel }: ChannelsSectionViewProps) => {
  return (
    <Section>
      <Avatar>
        <img src={viewModel.imageURL} alt=" " aria-hidden="true" />
      </Avatar>
      <UserNameAndTag>
        <UserName>{viewModel.name}</UserName>
        <UserTag>{viewModel.tag}</UserTag>
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
  )
}
