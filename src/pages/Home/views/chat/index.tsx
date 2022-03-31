import React from 'react'

import {
  Content
} from './styles'

type ChatViewProps = {
  ChatSectionComponent: React.FC
  ChatMainComponent: React.FC
  ChatFormComponent: React.FC
}

export const ChatView = ({ ChatSectionComponent, ChatMainComponent, ChatFormComponent }: ChatViewProps) => {
  return (
    <Content>
      <ChatSectionComponent />
      <ChatMainComponent />
      <ChatFormComponent />
    </Content>
  )
}
