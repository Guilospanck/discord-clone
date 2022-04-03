import React from 'react'
import { UseChatSectionViewModelReturnType } from '~/pages/Home/viewModels/chat/useChatSectionViewModel'
import ChannelHashtagSVG from '../../../../../assets/images/Discord-hashtag.svg'

import ThreadsSVG from '../../../../../assets/images/Discord-threads.svg'
import AlarmsSVG from '../../../../../assets/images/Discord-alarms.svg'
import PinSVG from '../../../../../assets/images/Discord-pin.svg'
import MemberListSVG from '../../../../../assets/images/Discord-memberlist.svg'
import MagnifyingGlassSVG from '../../../../../assets/images/Discord-magnifyingglass.svg'
import InboxSVG from '../../../../../assets/images/Discord-inbox.svg'
import HelpSVG from '../../../../../assets/images/Discord-help.svg'

import {
  Section,
  ChannelNameAndIcon,
  ChannelIcon,
  ChannelName,
  ButtonIconsContainer,
  ButtonIcon,
  InputAndIconContainer,
  InputStyled,
  MagnifyingGlassContainer
} from './styles'

const ButtonIconsContainerFC = React.memo(() => (
  <ButtonIconsContainer>
    <ButtonIcon><ThreadsSVG /></ButtonIcon>
    <ButtonIcon><AlarmsSVG /></ButtonIcon>
    <ButtonIcon><PinSVG /></ButtonIcon>
    <ButtonIcon><MemberListSVG /></ButtonIcon>

    <InputAndIconContainer>
      <InputStyled placeholder="Search" />
      <MagnifyingGlassContainer>
        <MagnifyingGlassSVG />
      </MagnifyingGlassContainer>
    </InputAndIconContainer>

    <ButtonIcon><InboxSVG /></ButtonIcon>
    <ButtonIcon><HelpSVG /></ButtonIcon>
  </ButtonIconsContainer>
))
ButtonIconsContainerFC.displayName = 'ButtonIconsContainerFC' // eslint

type ChatSectionProps = {
  viewModel: UseChatSectionViewModelReturnType
}

export const ChatSectionView = ({ viewModel }: ChatSectionProps) => {
  const ChannelNameAndIconFC = () => (
    <ChannelNameAndIcon>
      <ChannelIcon>
        <ChannelHashtagSVG />
      </ChannelIcon>
      <ChannelName>
        {viewModel.channelTitle}
      </ChannelName>
    </ChannelNameAndIcon>
  )

  return (
    <Section>
      <ChannelNameAndIconFC />
      <ButtonIconsContainerFC />
    </Section>
  )
}
