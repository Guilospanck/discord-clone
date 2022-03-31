import React from 'react'

/** Views */
import { HomeView } from './views'
import { ChannelsView } from './views/channels'
import { ChannelsServerTitleView } from './views/channels/channels_server_title'
import { ChannelsSectionView } from './views/channels/channels_section'
import { ChannelsSidebarView } from './views/channels/channels_sidebar'
import { ChatView } from './views/chat'
import { ChatSectionView } from './views/chat/chat_section'
import { ChatMainView } from './views/chat/chat_main'
import { ChatFormView } from './views/chat/chat_form'

/** ViewModels */
import { useHomeViewModel } from './viewModels/homeViewModel'
import { useChannelsServerTitleViewModel } from './viewModels/channels/channelsServerTitleViewModel'
import { useChannelsSectionViewModel } from './viewModels/channels/channelsSectionViewModel'
import { useChannelsSidebarViewModel } from './viewModels/channels/channelsSidebarViewModel'
import { useChatSectionViewModel } from './viewModels/chat/useChatSectionViewModel'
import { useChatMainViewModel } from './viewModels/chat/useChatMainViewModel'
import { useChatFormViewModel } from './viewModels/chat/useChatFormViewModel'

/** Context */
import { HomeContextProvider } from './context/homeContext'

/** Components */
const ChannelsServerTitleComponent = () => {
  const viewModel = useChannelsServerTitleViewModel()
  return <ChannelsServerTitleView viewModel={viewModel} />
}

const ChannelsSectionComponent = () => {
  const viewModel = useChannelsSectionViewModel()
  return <ChannelsSectionView viewModel={viewModel} />
}

const ChannelsSidebarComponent = () => {
  const viewModel = useChannelsSidebarViewModel()
  return <ChannelsSidebarView viewModel={viewModel} />
}

const ChannelsComponent = () => {
  return <ChannelsView
    ChannelsServerTitleComponent={ChannelsServerTitleComponent}
    ChannelsSectionComponent={ChannelsSectionComponent}
    ChannelsSidebarComponent={ChannelsSidebarComponent}
  />
}

const ChatSectionComponent = () => {
  const viewModel = useChatSectionViewModel()
  return <ChatSectionView viewModel={viewModel} />
}

const ChatMainComponent = () => {
  const viewModel = useChatMainViewModel()
  return <ChatMainView viewModel={viewModel} />
}

const ChatFormComponent = () => {
  const viewModel = useChatFormViewModel()
  return <ChatFormView viewModel={viewModel} />
}

const ChatComponent = () => {
  return <ChatView
    ChatSectionComponent={ChatSectionComponent}
    ChatMainComponent={ChatMainComponent}
    ChatFormComponent={ChatFormComponent}
  />
}


export const Home = () => {
  const viewModel = useHomeViewModel()

  return (
    <HomeContextProvider>
      <HomeView
        viewModel={viewModel}
        ChannelsComponent={ChannelsComponent}
        ChatComponent={ChatComponent}
      />
    </HomeContextProvider>
  )
}
