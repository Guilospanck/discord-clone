import { ServerInfo, IconEnum, UserInfo, Messages } from '../src/pages/Home/types/homeTypes'

export const serversMocked: ServerInfo[] = [
  {
    id: '5a714803-cb77-4969-92fb-14cdc583d319',
    serverTitle: 'Server 1',
    serverIcon: 'https://images.unsplash.com/photo-1648686441339-bc5bf15ea77c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80',
    channels: [
      {
        id: '99bace5d-52ab-4797-820c-64585dbd735f',
        channelTitle: 'welcome!',
        spaces: [
          {
            id: '298ae379-7074-46d8-882c-d5d0ef29760e',
            spaceTitle: 'welcome',
            icon: IconEnum.HASHTAG
          },
          {
            id: '147b66b8-c822-4f92-82ed-cfc0a0db74a6',
            spaceTitle: 'code-of-conduct',
            icon: IconEnum.DONE_LIST
          },
          {
            id: 'd48ab753-72bb-40cb-ad12-8a91b79dd12b',
            spaceTitle: 'announcements',
            icon: IconEnum.HASHTAG
          }
        ]
      },
      {
        id: 'f183b545-8280-48b3-a16f-26af4252f52c',
        channelTitle: 'canais de voz!',
        spaces: [
          {
            id: '14931791-cb59-4429-b6a7-342cbb0b34b2',
            spaceTitle: 'Pair Working 01',
            icon: IconEnum.AUDIO
          },
          {
            id: 'c57af019-c5d3-4444-97d6-8ff4180201fc',
            spaceTitle: 'Pair Working 02',
            icon: IconEnum.AUDIO
          }
        ]
      }
    ]
  },
  {
    id: '4a0ac154-8cc6-4bb1-b53e-3d23997ccb49',
    serverTitle: 'Server 2',
    serverIcon: 'https://images.unsplash.com/photo-1648668953838-fc4ae3131420?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=765&q=80',
    channels: [
      {
        id: 'e64236e8-6348-4d12-a66f-749cc45f0011',
        channelTitle: 'events!',
        spaces: [
          {
            id: '6e965946-258d-4f8e-9429-27c86fe17745',
            spaceTitle: 'event-chat',
            icon: IconEnum.HASHTAG
          },
          {
            id: '0be8d5e1-e7f1-4666-b0b8-991b48b3e0c2',
            spaceTitle: 'Eventos_Channel',
            icon: IconEnum.AUDIO
          }
        ]
      },
      {
        id: 'b80e0463-5e9d-4277-9a82-3aa2622f29d9',
        channelTitle: 'off-topic',
        spaces: [
          {
            id: '1e77ef9b-9755-466d-987a-577e7e963fde',
            spaceTitle: 'general',
            icon: IconEnum.HASHTAG
          },
          {
            id: '72194b61-5366-4c4f-95d5-2da86b502eec',
            spaceTitle: 'introduction',
            icon: IconEnum.HASHTAG
          }
        ]
      }
    ]
  },
  {
    id: '7edee8b8-c97c-429c-8e2c-2c7799f64557',
    serverTitle: 'Server 3',
    serverIcon: 'https://images.unsplash.com/photo-1631514138684-4b4669af3e56?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    channels: [
      {
        id: 'b35bb8c2-3b25-41e6-b3c3-ad8a0ffa76b6',
        channelTitle: 'server',
        spaces: [
          {
            id: '24e6ea1d-59d1-42f4-991f-3311481315ba',
            spaceTitle: 'rules',
            icon: IconEnum.DONE_LIST
          },
          {
            id: '06196382-3da8-448b-ab86-99d9560ef7eb',
            spaceTitle: 'roles',
            icon: IconEnum.HASHTAG
          },
          {
            id: 'b65ed9e8-3296-47ad-91aa-4803dbbdf7b1',
            spaceTitle: 'suggestions',
            icon: IconEnum.HASHTAG
          }
        ]
      },
      {
        id: 'c3df4522-f111-4172-b6ea-9f7dced96a46',
        channelTitle: 'voice chat',
        spaces: [
          {
            id: 'a8de8e8f-e946-4f72-8a40-8dc084284979',
            spaceTitle: 'Général',
            icon: IconEnum.AUDIO
          },
          {
            id: '1e1a94f6-f014-4c19-b337-2a6f8d080892',
            spaceTitle: 'Play and Stream 🎮',
            icon: IconEnum.AUDIO
          }
        ]
      }
    ]
  },
  {
    id: '62a1da11-d39f-4ca1-9b85-5fc60e402a0d',
    serverTitle: 'Server 4',
    serverIcon: 'https://images.unsplash.com/photo-1630362731206-ac1ef24faf79?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=968&q=80',
    channels: [
      {
        id: '49d7e6a7-fc1e-4aa3-9b54-bd083f985064',
        channelTitle: 'jams',
        spaces: [
          {
            id: 'b03c4a1c-0955-4e36-a183-c5c07a30a580',
            spaceTitle: 'best-contributors',
            icon: IconEnum.HASHTAG
          },
          {
            id: '9c4974ad-5a2c-48ba-8b09-5929d79aea0f',
            spaceTitle: 'work-in-progress',
            icon: IconEnum.HASHTAG
          },
          {
            id: 'b749f2ea-0afd-4fcc-ba28-da30d50c8c6f',
            spaceTitle: 'published-games',
            icon: IconEnum.HASHTAG
          },
          {
            id: 'b03c4a1c-0955-4e36-a183-c5c07a30a581',
            spaceTitle: 'cs-config',
            icon: IconEnum.HASHTAG
          },
          {
            id: '9c4974ad-5a2c-48ba-8b09-5929d79aea10',
            spaceTitle: 'dota-config',
            icon: IconEnum.HASHTAG
          },
          {
            id: 'b749f2ea-0afd-4fcc-ba28-da30d50c8c70',
            spaceTitle: 'elden-config',
            icon: IconEnum.HASHTAG
          }
        ]
      },
      {
        id: 'e0017e5a-f2e6-4a38-b59d-685938dcbeb7',
        channelTitle: 'caves',
        spaces: [
          {
            id: 'df142f16-e1b4-4030-877f-481fba272f7a',
            spaceTitle: 'programmers-cave',
            icon: IconEnum.HASHTAG
          },
          {
            id: 'b8bc6e89-359d-4626-a0e9-3b5500d6625d',
            spaceTitle: 'artists-cave',
            icon: IconEnum.HASHTAG
          }
        ]
      },
      {
        id: 'c3df4522-f111-4172-b6ea-9f7dced96a47',
        channelTitle: 'voice chat',
        spaces: [
          {
            id: 'a8de8e8f-e946-4f72-8a40-8dc084284980',
            spaceTitle: 'Général',
            icon: IconEnum.AUDIO
          },
          {
            id: '1e1a94f6-f014-4c19-b337-2a6f8d080893',
            spaceTitle: 'Play and Stream 🎮',
            icon: IconEnum.AUDIO
          }
        ]
      }
    ]
  }, // no channels from here on
  {
    id: '5a714803-cb77-4969-92fb-14cdc583d320',
    serverTitle: 'Server 5',
    serverIcon: 'https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    channels: []
  },
  {
    id: '5a714803-cb77-4969-92fb-14cdc583d321',
    serverTitle: 'Server 6',
    serverIcon: 'https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    channels: []
  },
  {
    id: '5a714803-cb77-4969-92fb-14cdc583d322',
    serverTitle: 'Server 7',
    serverIcon: 'https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    channels: []
  },
  {
    id: '5a714803-cb77-4969-92fb-14cdc583d323',
    serverTitle: 'Server 8',
    serverIcon: 'https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    channels: []
  },
  {
    id: '5a714803-cb77-4969-92fb-14cdc583d324',
    serverTitle: 'Server 9',
    serverIcon: 'https://images.unsplash.com/photo-1582819585091-f807881345ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
    channels: []
  }
]

export const usersMocked: UserInfo[] = [
  {
    id: '20e5201c-bf61-44ef-90b5-4610d78a034a',
    name: 'thiagort',
    tag: '#819',
    avatarURL: 'https://cdn.discordapp.com/avatars/891765898086580334/7e4995919829ea66117e85fa4574acc3.webp?size=128'
  },
  {
    id: '9d45b212-194f-4090-9ea3-3a62f39f04c3',
    name: 'Igor',
    tag: '#457',
    avatarURL: 'https://cdn.discordapp.com/avatars/211169928164671489/380376c68b8241de68985f56fc1d201c.webp?size=80'
  },
  {
    id: '45e48ab1-9d1f-4496-bd21-6aaeba2955ab',
    name: 'Hydra',
    tag: '#1214',
    avatarURL: 'https://cdn.discordapp.com/avatars/547905866255433758/2fcb77582acae7ecedd97db9c238c1f3.webp?size=80'
  }
]

export const messagesMocked: Messages[] = [
  {
    serverId: serversMocked[0].id,
    channelId: serversMocked[0].channels[0].id,
    spaceId: serversMocked[0].channels[0].spaces[0].id,
    messages: [
      {
        userId: usersMocked[0].id,
        timestamp: '1648822189389',
        message: 'Hi, this is a test!'
      },
      {
        userId: usersMocked[1].id,
        timestamp: '1648822230197',
        message: 'Hi! It looks nice!'
      },
      {
        userId: usersMocked[0].id,
        timestamp: '1648822267057',
        message: 'Yes! Even though it is a test!'
      },
      {
        userId: usersMocked[0].id,
        timestamp: '1648822267057',
        message: 'Let us see if this message comes without my avatar...'
      }
    ]
  }
]
