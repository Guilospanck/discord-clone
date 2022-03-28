import React from 'react'
import { Channels, ChannelsList, Icons, UseChannelsSidebarViewModelReturnType } from '~/pages/Home/viewModels/channelsSidebarViewModel'

import ChannelDropdownSVG from '../../../../../assets/images/Discord-channel-drop.svg'
import ChannelAudioSVG from '../../../../../assets/images/Discord-audio.svg'
import ChannelCodeOfConductSVG from '../../../../../assets/images/Discord-code-of-conduct.svg'
import ChannelHashtagSVG from '../../../../../assets/images/Discord-hashtag.svg'

import {
  Container,
  ChannelUnorderedList,
  ChannelDropdownAndH2,
  ChannelH2,
  ChannelList,
  ChannelListH3
} from './styles'

type ChannelsSidebarViewProps = {
  viewModel: UseChannelsSidebarViewModelReturnType,
}

export const ChannelsSidebarView = ({ viewModel }: ChannelsSidebarViewProps) => {

  const ChannelTitleFC = ({ channelTitle }: { channelTitle: string }) => (
    <ChannelDropdownAndH2>
      <ChannelDropdownSVG width={12} height={12} />
      <ChannelH2>{channelTitle}</ChannelH2>
    </ChannelDropdownAndH2>
  )

  const ChannelListFC = ({ channelsList }: { channelsList: ChannelsList[] }) => {
    const elements = channelsList.map((list) => (
      <ChannelList key={list.id}>
        <GetIconFromChannelList icon={list.icon} />
        <ChannelListH3>{list.title}</ChannelListH3>
      </ChannelList>
    ))

    return <>{elements}</>
  }

  const GetIconFromChannelList = ({ icon }: { icon: Icons }) => {
    switch (icon) {
      case Icons.AUDIO:
        return <ChannelAudioSVG width={20} height={20} style={{ marginRight: '6px' }} />
      case Icons.HASHTAG:
        return <ChannelHashtagSVG width={20} height={20} style={{ marginRight: '6px' }} />
      case Icons.DONE_LIST:
        return <ChannelCodeOfConductSVG width={20} height={20} style={{ marginRight: '6px' }} />
      default:
        return <ChannelHashtagSVG width={20} height={20} style={{ marginRight: '6px' }} />
    }
  }

  return (
    <Container>
      {
        viewModel.channels.map((channel: Channels) => (
          <>
            <ChannelTitleFC channelTitle={channel.title} />
            <ChannelUnorderedList key={channel.id}>
              <ChannelListFC channelsList={channel.list} />
            </ChannelUnorderedList>
          </>
        ))
      }
    </Container>
  )
}
