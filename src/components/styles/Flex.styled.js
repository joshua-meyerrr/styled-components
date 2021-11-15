import styled from "styled-components"

export const Flex = styled.div`
  display: flex;
  align-items: center;

  /* what happens without it? */
  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
  }
`
