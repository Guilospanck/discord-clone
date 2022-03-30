import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;

  padding: 16px;

  align-items: stretch;
  justify-content: stretch;
  overflow-x: none;
  overflow-y: auto;
  overflow-anchor: none; // when new data appears, it won't move the scrollbar
  
`