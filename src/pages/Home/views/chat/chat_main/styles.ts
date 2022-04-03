import styled from 'styled-components'

const NORMAL_TEXT_COLOR = '#dcddde'
const NORMAL_TEXT_MUTED = '#72767d'
const HEADER_PRIMARY_COLOR = '#fff'

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  padding: 16px 0;
  margin-bottom: 6px;

  align-items: stretch;
  justify-content: stretch;
  overflow-x: none;
  overflow-y: auto;
  overflow-anchor: none; // when new data appears, it won't move the scrollbar    
`

export const Avatar = styled.img`
  position: absolute;
  left: 16px;
  margin-top: calc(10px - .125rem);
  z-index: 1;

  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;

  user-select: none;
  flex: 0 0 auto;
  pointer-events: none;
`

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;

  min-height: 2.75rem;
  padding-left: 72px;
  padding-top: .125rem;
  padding-bottom: .125rem;
  padding-right: 48px !important;

  position: relative;
`

export const UsernameAndTimestampContainer = styled.h2`
  display: block;
  flex-direction: row;

  margin: 0;

  overflow: hidden;
  line-height: 1.375rem;
  min-height: 1.375rem;
  white-space: break-spaces;
`

export const Username = styled.span`
  margin-right: .25rem;
  
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: ${HEADER_PRIMARY_COLOR};
  display: inline;
  vertical-align: baseline;
  overflow: hidden;
  flex-shrink: 0;
`

export const TimestampContainer = styled.span`
  font-size: 0.75rem;
  line-height: 1.375rem;
  color: ${NORMAL_TEXT_MUTED};
  vertical-align: baseline;

  margin-left: .25rem;

  display: inline-block;
  height: 1.25rem;
  cursor: default;
  pointer-events: none;
  font-weight: 500;
`

export const Timestamp = styled.time`

`

export const MessageContent = styled.div`
  user-select: text; 
  color: ${NORMAL_TEXT_COLOR};
  font-size: 1rem;
  line-height: 1.375rem;
  white-space: pre-wrap;
  white-space: break-spaces;
  word-wrap: break-word;
  user-select: text;
  font-weight: 400;
`

export const DayDivider = styled.div`
  height: 0;
  border-top: thin solid rgba(79,84,92,0.48);
  display: flex;
  align-items: center;
  justify-content: center;

  flex: 0 0 auto;
  pointer-events: none;
  box-sizing: border-box;

  margin-top: 1.5rem;
  margin-bottom: .5rem;
  margin-left: 1rem;
  margin-right: .875rem;
`

export const SpanDayDivider = styled.span`
  display: block;
  flex: 0 0 auto;
  padding: 2px 4px;
  color: #a3a6aa;
  background: #36393f;
  line-height: 13px;
  font-size: 12px;
  margin-top: -1px;
  font-weight: 600;
  border-radius: 8px;
`
