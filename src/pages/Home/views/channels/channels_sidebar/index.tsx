import React from 'react'
import { UseChannelsSidebarViewModelReturnType } from '~/pages/Home/viewModels/channels/channelsSidebarViewModel'
import { Channel, ChannelSpace, IconEnum } from '../../../types/homeTypes'

import ChannelDropdownSVG from '../../../../../assets/images/Discord-channel-drop.svg'
import ChannelAudioSVG from '../../../../../assets/images/Discord-audio.svg'
import ChannelCodeOfConductSVG from '../../../../../assets/images/Discord-code-of-conduct.svg'
import SpaceHashtagSVG from '../../../../../assets/images/Discord-hashtag.svg'

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

  const ChannelSpaceListFC = ({ channelId, channelsList }: { channelId: string, channelsList: ChannelSpace[] }) => {
    const elements = channelsList.map((list) => (
      <ChannelList key={`${channelId}-${list.id}`} onClick={() => viewModel.onSpaceClick(channelId, list.id)}>
        <GetIconFromChannelList key={`${channelId}-${list.id}-spaceicon`} icon={list.icon} />
        <ChannelListH3 key={`${channelId}-${list.id}-spacetitle`}>{list.spaceTitle}</ChannelListH3>
      </ChannelList>
    ))

    return <>{elements}</>
  }

  const GetIconFromChannelList = ({ icon }: { icon: IconEnum }) => {
    switch (icon) {
      case IconEnum.AUDIO:
        return <ChannelAudioSVG width={20} height={20} style={{ marginRight: '6px' }} />
      case IconEnum.HASHTAG:
        return <SpaceHashtagSVG width={20} height={20} style={{ marginRight: '6px' }} />
      case IconEnum.DONE_LIST:
        return <ChannelCodeOfConductSVG width={20} height={20} style={{ marginRight: '6px' }} />
      default:
        return <SpaceHashtagSVG width={20} height={20} style={{ marginRight: '6px' }} />
    }
  }

  return (
    <Container>
      {
        viewModel.channels.map((channel: Channel) => (
          <React.Fragment key={`${channel.id}-fragment`}>
            <ChannelTitleFC key={`${channel.id}-title`} channelTitle={channel.channelTitle} />
            <ChannelUnorderedList key={`${channel.id}-spacesul`}>
              <ChannelSpaceListFC key={`${channel.id}-spaceslist`} channelId={channel.id} channelsList={channel.spaces} />
            </ChannelUnorderedList>
          </React.Fragment>
        ))
      }
    </Container>
  )
}
