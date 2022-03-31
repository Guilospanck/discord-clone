import styled from 'styled-components'

const CHANNEL_UNORDERED_LIST_COLOR = '#8e9297'
const FONT_DISPLAY = 'Ginto,"Helvetica Neue",Helvetica,Arial,sans-serif'
const CHANNELS_DEFAULT_COLOR = '#8e9297'
const HOVER_COLOR = '#dcddde'
const HOVER_BG_COLOR = 'rgba(79,84,92,0.32)'

export const Container = styled.nav`
  display: flex;  
  flex: 1 1 auto;
  flex-direction: column;
  width: 100%;

  margin-top: 16px;  
  justify-content: flex-start;
`
export const ChannelDropdownAndH2 = styled.div`
  height: 24px;
  padding-right: 8px;
  padding-left: 0px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${CHANNELS_DEFAULT_COLOR};

  &:hover > * {
    color: ${HOVER_COLOR}
  }
`

export const ChannelH2 = styled.h2`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  text-transform: uppercase;

  font-size: 12px;
  line-height: 16px;
  letter-spacing: .25px;
  
  font-family: ${FONT_DISPLAY};
  font-weight: 700;
  color: ${CHANNELS_DEFAULT_COLOR};

  flex: 1 1 auto;
`

export const ChannelUnorderedList = styled.ul`
  margin-top: 0px;
  padding-right: 8px;
  padding-left: 16px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  cursor: pointer;
  
  color: ${CHANNEL_UNORDERED_LIST_COLOR};
`

export const ChannelList = styled.li`
  height: 34px;
  padding: 1px 8px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: ${CHANNELS_DEFAULT_COLOR};

  &:hover {
    background-color: ${HOVER_BG_COLOR};
  }

  &:hover > h3 {
    color: ${HOVER_COLOR}
  }
`

export const ChannelListH3 = styled.h3`
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;

  font-size: 16px;
  line-height: 16px;
  
  font-weight: 500;
  color: ${CHANNELS_DEFAULT_COLOR};

  flex: 1 1 auto;
`
