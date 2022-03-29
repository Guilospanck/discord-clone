import styled from "styled-components";

const SECTION_COLOR = '#dcddde'

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