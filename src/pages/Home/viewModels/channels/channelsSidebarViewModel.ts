import { useState } from "react"

export type UseChannelsSidebarViewModelReturnType = {
  channels: Channels[]
}

export enum Icons {
  HASHTAG,
  AUDIO,
  DONE_LIST
}

export type ChannelsList = {
  id: string,
  title: string,
  icon: Icons
}

export type Channels = {
  id: string,
  title: string,
  list: ChannelsList[]
}

export const useChannelsSidebarViewModel = (): UseChannelsSidebarViewModelReturnType => {

  const initialChannels: Channels[] = [
    {
      id: '0',
      title: 'WELCOME!',
      list: [
        {
          id: 'list-0-0',
          title: 'welcome',
          icon: Icons.HASHTAG
        },
        {
          id: 'list-0-1',
          title: 'code-of-conduct',
          icon: Icons.DONE_LIST
        },
        {
          id: 'list-0-2',
          title: 'announcements',
          icon: Icons.HASHTAG
        },
      ]
    },
    {
      id: '1',
      title: 'CANAIS DE VOZ',
      list: [
        {
          id: 'list-1-0',
          title: 'Pair Working 01',
          icon: Icons.AUDIO
        },
        {
          id: 'list-1-1',
          title: 'Pair Working 02',
          icon: Icons.AUDIO
        }
      ]
    }
  ]

  const [channels,] = useState<Channels[]>(initialChannels)

  return {
    channels
  }


}
