import styled from 'styled-components'

const CONTENT_BG_COLOR = '#36393f'
const SECTION_COLOR = '#dcddde'

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const Content = styled.main`
  display: flex;
  flex: 1 1 auto;
  flex-direction: column;
  background-color: ${CONTENT_BG_COLOR};
`

export const Section = styled.section`
  display: flex;
  flex-direction: row;
  flex: 0 0 auto;
  align-items: center;

  width: 100%;
  height: 48px;
  padding: 0 8px;
  font-size: 16px;
  line-height: 20px;
  
  cursor: default;
  z-index: 2;
  color: ${SECTION_COLOR};
`

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  align-items: stretch;
  justify-content: stretch;
`
