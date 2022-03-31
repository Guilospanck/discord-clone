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

export type ChannelSpaces = {
  id: string,
  spaceTitle: string,
  icon: IconEnum
}

export type Channel = {
  id: string,
  channelTitle: string,
  spaces: ChannelSpaces[]
}

export type ServerInfo = {
  id: string,
  serverTitle: string,
  serverIcon: string,
  channels: Channel[]
}
