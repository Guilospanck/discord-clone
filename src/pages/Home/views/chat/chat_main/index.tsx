import React from 'react'
import { Message, User } from '~/pages/Home/types/homeTypes'
import { UseChatMainViewModelReturnType } from '~/pages/Home/viewModels/chat/useChatMainViewModel'

import {
  Article,
  Avatar,
  MessageContainer,
  UsernameAndTimestampContainer,
  Username,
  TimestampContainer,
  Timestamp,
  MessageContent,
  DayDivider,
  SpanDayDivider
} from './styles'

const RenderMessagesFromUser = ({ messages }: { messages: Message[] }) => {
  if (!messages.length) return <></>

  const elements = messages.map((message, messageIdx) => (
    <MessageContent key={`${message.id}-${messageIdx}`}>
      {message.message}
    </MessageContent>
  ))

  return <>{elements}</>
}

const RenderUserNameAvatarAndTimestamp = ({ avatarURL, name, date }: { avatarURL: string, name: string, date: string }) => (
  <>
    <Avatar
      src={avatarURL}
      aria-hidden="true"
      alt=" "
    />
    <UsernameAndTimestampContainer>
      <Username>{name}</Username>
      <TimestampContainer>
        <Timestamp>{date}</Timestamp>
      </TimestampContainer>
    </UsernameAndTimestampContainer>
  </>
)

const RenderMessagesAndUserInformation = ({ user, messages, index, nextDay }: { user: User, messages: Message[], index: number, nextDay: boolean }) => {
  if (!user || !messages.length) return <></>

  const date = messages[0]?.timestamp ? new Date(Number(messages[0].timestamp)).toLocaleDateString('pt-br') : ''

  return (
    <>
      {
        nextDay &&
        <DayDivider>
          <SpanDayDivider>{date}</SpanDayDivider>
        </DayDivider>
      }
      <MessageContainer key={`${user.id}-${index}-${messages[0].id}`}>
        <RenderUserNameAvatarAndTimestamp
          key={`${user.id}-${index}-${messages[0].id}-user_info`}
          avatarURL={user.avatarURL}
          name={user.name}
          date={date}
        />
        <RenderMessagesFromUser messages={messages} />
      </MessageContainer>
    </>
  )
}

type ChatMainViewProps = {
  viewModel: UseChatMainViewModelReturnType
}

export const ChatMainView = ({ viewModel }: ChatMainViewProps) => {
  return (
    <Article>
      {
        viewModel.messages.map((msg, idx) => (
          <RenderMessagesAndUserInformation
            key={`${msg.user.id}-${idx}-${msg.messages[0]?.timestamp ?? ''}`}
            user={msg.user}
            messages={msg.messages}
            nextDay={msg.nextDay}
            index={idx}
          />
        ))
      }
    </Article>
  )
}
