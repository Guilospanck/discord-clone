import { useState } from 'react'

export type UseChannelsSectionViewModelReturnType = {
  name: string,
  tag: string,
  imageURL: string
}

export const useChannelsSectionViewModel = (): UseChannelsSectionViewModelReturnType => {
  const [name] = useState('guilospanck')
  const [tag] = useState('#1042')
  const [imageURL] = useState('https://cdn.discordapp.com/avatars/759237066999201852/e780bd32be2d3b5e78179ddc8da20e77.webp?size=32')

  return {
    name,
    tag,
    imageURL
  }
}
