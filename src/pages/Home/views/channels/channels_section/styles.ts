import styled from 'styled-components'

const SECTION_BG_COLOR = '#292b2f'
const NAME_COLOR = '#dcddde'
const TAG_COLOR = '#b9bbbe'

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;

  background-color: ${SECTION_BG_COLOR};
  z-index: 1;

  height: 52px;
  align-items: center;
  font-size: 14px;  
  font-weight: 500;

  padding: 0 8px;
  margin-bottom: 1px;
`
export const Avatar = styled.button`
  display: flex;

  cursor: pointer;

  border: none;
  background: none;
  outline: none;

  border-radius: 30px;

  width: 32px;
  height: 32px;

  margin-right: 8px;
  overflow: hidden;

  & > img {
    transform: translateX(-6px);
  }

`

export const UserNameAndTag = styled.div`
  display: flex;
  flex-direction: column;

  margin-right: 4px;  

  cursor: pointer;
`

export const UserName = styled.div`
  display: flex;

  color: ${NAME_COLOR};

  font-size: 14px;
  line-height: 18px;  

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const UserTag = styled.div`
  color: ${TAG_COLOR};

  font-size: 12px;
  line-height: 13px;

  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

export const UserOptions = styled.div`
  display: flex;
  flex: 0 1 auto;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  align-items: stretch;
`

export const OptionsButton = styled.button`
  display: flex;
  outline: none;
  border: none;
  background: none;

  line-height: 0;
  width: 32px;
  height: 32px; 
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  color: ${TAG_COLOR};

  cursor: pointer;

`
