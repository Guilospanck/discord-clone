import React from 'react'
import { UseChannelsSidebarViewModelReturnType } from '~/pages/Home/viewModels/channels/channelsSidebarViewModel'
import { Category, Channel, IconEnum } from '../../../types/homeTypes'

import CategoryDropdownSVG from '../../../../../assets/images/Discord-channel-drop.svg'
import ChannelAudioSVG from '../../../../../assets/images/Discord-audio.svg'
import ChannelCodeOfConductSVG from '../../../../../assets/images/Discord-code-of-conduct.svg'
import ChannelHashtagSVG from '../../../../../assets/images/Discord-hashtag.svg'

import {
  Container,
  ChannelUnorderedList,
  CategoryDropdownAndH2,
  CategoryH2,
  ChannelList,
  ChannelListH3
} from './styles'

type ChannelsSidebarViewProps = {
  viewModel: UseChannelsSidebarViewModelReturnType,
}

export const ChannelsSidebarView = ({ viewModel }: ChannelsSidebarViewProps) => {
  const CategoryTitleFC = ({ title }: { title: string }) => (
    <CategoryDropdownAndH2>
      <CategoryDropdownSVG width={12} height={12} />
      <CategoryH2>{title}</CategoryH2>
    </CategoryDropdownAndH2>
  )

  const ChannelListFC = ({ categoryId, channelsList }: { categoryId: string, channelsList: Channel[] }) => {
    const elements = channelsList.map((list) => (
      <ChannelList key={`${categoryId}-${list.id}`} onClick={() => viewModel.onChannelClick(categoryId, list.id)}>
        <GetIconFromChannelList key={`${categoryId}-${list.id}-icon`} icon={list.icon} />
        <ChannelListH3 key={`${categoryId}-${list.id}-title`}>{list.title}</ChannelListH3>
      </ChannelList>
    ))

    return <>{elements}</>
  }

  const GetIconFromChannelList = ({ icon }: { icon: IconEnum }) => {
    switch (icon) {
      case IconEnum.AUDIO:
        return <ChannelAudioSVG width={20} height={20} style={{ marginRight: '6px' }} />
      case IconEnum.HASHTAG:
        return <ChannelHashtagSVG width={20} height={20} style={{ marginRight: '6px' }} />
      case IconEnum.DONE_LIST:
        return <ChannelCodeOfConductSVG width={20} height={20} style={{ marginRight: '6px' }} />
      default:
        return <ChannelHashtagSVG width={20} height={20} style={{ marginRight: '6px' }} />
    }
  }

  return (
    <Container>
      {
        viewModel.categories.map((category: Category) => (
          <React.Fragment key={`${category.id}-fragment`}>
            <CategoryTitleFC key={`${category.id}-title`} title={category.title} />
            <ChannelUnorderedList key={`${category.id}-channelsul`}>
              <ChannelListFC key={`${category.id}-channelslist`} categoryId={category.id} channelsList={category.channels} />
            </ChannelUnorderedList>
          </React.Fragment>
        ))
      }
    </Container>
  )
}
