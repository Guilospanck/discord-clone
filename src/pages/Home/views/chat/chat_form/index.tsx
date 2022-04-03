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

type GetEmojiProps = {
  x: number, y: number,
  onMouseEnterFn: () => void
}

/** This function is outside the main one to prevent re-rendering
 *  when hovering over the emoji button
 */
const EmojisButtonsFC = React.memo(({ x, y, onMouseEnterFn }: GetEmojiProps) => (
  <ButtonContainer>
    <ButtonImage><GiftButtonSVG /></ButtonImage>
    <ButtonImage><GifButtonSVG /></ButtonImage>
    <ButtonImage><StickerButtonSVG /></ButtonImage>
    <ButtonImage onMouseEnter={() => onMouseEnterFn()}>
      <ImgStyled
        urlImg={EmojiPNG}
        bgPositionX={x}
        bgPositionY={y}
      />
    </ButtonImage>
  </ButtonContainer>
))
EmojisButtonsFC.displayName = 'EmojisButtonsFC' // eslint

type MessageInputFCProps = {
  messageRef: React.MutableRefObject<HTMLDivElement>,
  onKeyDownFn: (e: React.KeyboardEvent<HTMLDivElement>) => void,
  channelTitle: string
}

const MessageInputFC = React.memo(({ messageRef, onKeyDownFn, channelTitle }: MessageInputFCProps) => (
  <TextContainer>
    <TextContentEditable
      contentEditable
      ref={messageRef}
      onKeyDown={(e) => onKeyDownFn(e)}
      placeholder={`Message #${channelTitle}`}
    />
  </TextContainer>
))
MessageInputFC.displayName = 'MessageInputFC' // eslint

const AddButtonFC = () => (
  <AddButtonContainer>
    <AddButton>
      <AddButtonSVG />
    </AddButton>
  </AddButtonContainer>
)
AddButtonFC.displayName = 'AddButtonFC' // eslint

export const ChatFormView = ({ viewModel }: ChatFormViewProps) => {
  return (
    <Form>
      <ScrollableContainer>
        <InnerContainerWithMessagesAndButtons>
          <AddButtonFC />
          <MessageInputFC
            messageRef={viewModel.messageRef}
            onKeyDownFn={viewModel.onKeyDown}
            channelTitle={viewModel.channelTitle}
          />
          <EmojisButtonsFC
            x={viewModel.emojiCoordinates.x}
            y={viewModel.emojiCoordinates.y}
            onMouseEnterFn={viewModel.onMouseEnterEmojiBtn}
          />
        </InnerContainerWithMessagesAndButtons>
      </ScrollableContainer>
    </Form>
  )
}
