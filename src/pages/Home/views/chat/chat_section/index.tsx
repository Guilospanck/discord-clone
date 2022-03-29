import React from "react";
import { UseChatSectionViewModelReturnType } from "~/pages/Home/viewModels/chat/useChatSectionViewModel";

import {
  Section
} from './styles'

type ChatSectionProps = {
  viewModel: UseChatSectionViewModelReturnType
}

export const ChatSectionView = ({ viewModel }: ChatSectionProps) => {

  return (
    <Section>
      Chat Section
    </Section>
  )
}