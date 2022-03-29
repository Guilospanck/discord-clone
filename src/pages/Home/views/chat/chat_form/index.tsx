import React from "react";
import { UseChatFormViewModelReturnType } from "~/pages/Home/viewModels/chat/useChatFormViewModel";
import {
  Form,
  ScrollableContainer,
  InnerContainerWithMessagesAndButtons,
  AddButtonContainer,
  AddButton,
  TextContainer,
  TextContentEditable
} from "./styles";

import './cssStyle.css'

import AddButtonSVG from '../../../../../assets/images/Add-button.svg'

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

  return (
    <Form>
      <ScrollableContainer>
        <InnerContainerWithMessagesAndButtons>
          <AddButtonFC />
          <MessageInputFC />
        </InnerContainerWithMessagesAndButtons>
      </ScrollableContainer>
    </Form>
  )
}