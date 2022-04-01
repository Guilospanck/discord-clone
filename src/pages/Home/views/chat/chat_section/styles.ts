import styled from 'styled-components'

const SECTION_COLOR = '#dcddde'
const HEADER_PRIMARY = '#FFF'
const FONT_FAMILY = 'Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif;'
const TEXT_MUTED = '#72767d'
const INPUT_BG_COLOR = '#202225'

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: center;
  justify-content: space-between;    

  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  
  cursor: default;
  z-index: 2;
  color: ${SECTION_COLOR};

  box-shadow: 0 1px 0 rgb(4 4 5 / 20%), 0 1.5px 0 rgb(6 6 7 / 5%), 0 2px 0 rgb(4 4 5 / 5%);
`

export const SpaceNameAndIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
`

export const SpaceIcon = styled.div`
  display: flex;
  flex: 0 0 auto;
  height: 24px;
  width: auto;
  margin: 0 8px;
  color: ${TEXT_MUTED};
`

export const SpaceName = styled.h3`
  justify-content: flex-start;
  margin: 0 8px 0 0;
  flex: 0 0 auto;
  min-width: auto;
  overflow: hidden;
  white-space: nowrap;
  font-weight: 600;
  color: ${HEADER_PRIMARY};
  font-family: ${FONT_FAMILY};
  font-size: 16px;
  line-height: 20px;
`

export const ButtonIconsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;    
  align-items: center;
  font-family: ${FONT_FAMILY};

  & > button {
    color: ${TEXT_MUTED};
  }
`

export const ButtonIcon = styled.button`
  outline: none;
  border: none;
  background: none;
  cursor: pointer;

  &:hover {
    color: ${SECTION_COLOR};
  }
`

export const InputAndIconContainer = styled.div`
  display: flex;
  flex-direction: row; 
  justify-content: space-between;    
  align-items: center;

  padding: 0 2px;
  cursor: text;

  border-radius: 4px;
  height: 24px;
  background-color: ${INPUT_BG_COLOR};
`

export const InputStyled = styled.input`
  outline: none;
  border: none;
  transition: width .25s ease;

  width: 144px;
  background: transparent;
  
  color: ${SECTION_COLOR};

  &:focus {
    width: 240px;
  }

  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  overflow: hidden;
  font-family: inherit;
  padding: 2px 2px;  
`

export const MagnifyingGlassContainer = styled.div`
  color: ${TEXT_MUTED};
  display: flex;
  align-items: center;
`
