import styled from "styled-components";

const SCROLLABLE_BG_COLOR = "#40444b"
const FORM_COLOR = "#dcddde"

export const Form = styled.form`
  position: relative;
  flex-shrink: 0;
  padding-left: 16px;
  padding-right: 16px;
  margin-top: -8px;
  margin-bottom: 24px;

  border-radius: 8px;

  width: 100%;
  text-indent: 0;
`

export const ScrollableContainer = styled.div`
  background-color: ${SCROLLABLE_BG_COLOR};
  color: ${FORM_COLOR};

  overflow-x: hidden;
  overflow-y: hidden;
  border-radius: 8px;

`

export const InnerContainerWithMessagesAndButtons = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  padding-left: 16px; 
`

export const AddButtonContainer = styled.div`
  position: sticky;
  flex: 0 0 auto;
  align-self: stretch;
`

export const AddButton = styled.button`
  position: sticky;
  top: 0;

  cursor: pointer;

  margin: 0;
  border: 0;

  margin-left: -16px;
  padding: 10px 16px;  
  height: 44px;

  background: transparent;
  color: currentColor;
`

export const TextContainer = styled.div`
  display: flex;  
  width: 100%;

  background-color: transparent;
  resize: none;
  border: none;
  
  appearance: none;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.375rem;
  color: ${FORM_COLOR};

  padding-left: 0;
  padding-right: 10px;
`

export const TextContentEditable = styled.div`
  width: 100%;

  padding-bottom: 11px;
  padding-top: 11px;
  padding-right: 10px;

  background-color: transparent;
  resize: none;
  border: none;
  outline: none;

  /* Use contentEditable */
  min-height: 44px;
  max-height: 50vh;
  overflow-x: hidden;
  overflow-y: auto;

  text-align: left;
  word-break: break-word;
  white-space: break-spaces !important;
 
`