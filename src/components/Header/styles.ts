import styled from 'styled-components'

export const HeaderContainer = styled.div`
  width: 90rem;
  max-width: 100%;
  padding: 1rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const LogoBrand = styled.span`
  font-family: 'Ubuntu Mono', monospace;
  font-size: 2rem;
  font-weight: bold;
  color: black;
`
export const ShortcutBar = styled.div`
  & a {
    color: black;
    outline: none;
    text-decoration: none;
    align-items: center;
    gap: 5px;
    cursor: pointer;
    display: flex;
  }
`
export const ButtonBar = styled.div`
  display: flex;
  gap: 1.3rem;

  :hover {
    border-bottom: 1px solid black;
  }
`
