export type UserInfo = {
  id: string,
  name: string,
  tag: string,
  avatarURL: string
}

export enum IconEnum {
  HASHTAG,
  AUDIO,
  DONE_LIST
}

export type ChannelSpace = {
  id: string,
  spaceTitle: string,
  icon: IconEnum
}

export type Channel = {
  id: string,
  channelTitle: string,
  spaces: ChannelSpace[]
}

export type ServerInfo = {
  id: string,
  serverTitle: string,
  serverIcon: string,
  channels: Channel[]
}

export type BGSizeCoordinates = {
  x: number,
  y: number
}

export type BackgroundPositionsIteratorType = {
  next: () => BGSizeCoordinates
}

export type Message = {
  userId: string,
  timestamp: string,
  message: string
}

export type Messages = {
  serverId: string,
  channelId: string,
  spaceId: string,
  messages: Message[]
}

export type MessageWithUserInfo = Message & UserInfo
