import React from 'react'
import { UseChatFormViewModelReturnType } from '~/pages/Home/viewModels/chat/useChatFormViewModel'
import {
  Form,
  ScrollableContainer,
  InnerContainerWithMessagesAndButtons,
  AddButtonContainer,
  AddButton,
  TextContainer,
  TextContentEditable,
  ButtonContainer,
  ButtonImage,
  ImgStyled
} from './styles'

import './cssStyle.css'

import AddButtonSVG from '../../../../../assets/images/Add-button.svg'
import GiftButtonSVG from '../../../../../assets/images/Discord-gift.svg'
import GifButtonSVG from '../../../../../assets/images/Discord-gif.svg'
import StickerButtonSVG from '../../../../../assets/images/Discord-sticker.svg'
import EmojiPNG from '../../../../../assets/images/Discord-emoji.png'

type ChatFormViewProps = {
  viewModel: UseChatFormViewModelReturnType
}

export const ChatFormView = ({ viewModel }: ChatFormViewProps) => {
  const AddButtonFC = () => (
    <AddButtonContainer>
      <AddButton>
        <AddButtonSVG />
      </AddButton>
    </AddButtonContainer>
  )

  const MessageInputFC = () => (
    <TextContainer>
      <TextContentEditable
        contentEditable
        ref={viewModel.messageRef}
        onKeyDown={(e) => viewModel.onKeyDown(e)}
        placeholder="Message #texto"
      />
    </TextContainer>
  )

  const EmojisButtonsFC = () => (
    <ButtonContainer>
      <ButtonImage><GiftButtonSVG /></ButtonImage>
      <ButtonImage><GifButtonSVG /></ButtonImage>
      <ButtonImage><StickerButtonSVG /></ButtonImage>
      <ButtonImage onMouseEnter={() => viewModel.onMouseEnterEmojiBtn()}>
        <ImgStyled
          urlImg={EmojiPNG}
          bgPositionX={viewModel.BACKGROUND_POSITIONS[viewModel.emojiRandomnessIndex].x}
          bgPositionY={viewModel.BACKGROUND_POSITIONS[viewModel.emojiRandomnessIndex].y}
        />
      </ButtonImage>
    </ButtonContainer>
  )

  return (
    <Form>
      <ScrollableContainer>
        <InnerContainerWithMessagesAndButtons>
          <AddButtonFC />
          <MessageInputFC />
          <EmojisButtonsFC />
        </InnerContainerWithMessagesAndButtons>
      </ScrollableContainer>
    </Form>
  )
}
