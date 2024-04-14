import styled from 'styled-components'

export const AdminDashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`
export const Container = styled.div`
  display: flex;
  padding-top: 11rem;
  align-items: center;
  gap: 1rem;
  justify-content: space-between;
  flex-direction: column;
`
export const DashboardTitle = styled.a`
  font-size: 1.9rem;
  padding: 1rem;
`
export const AlignDashbord = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`

export const ButtonToForm = styled.button`
  width: 28rem;
  height: 3.3rem;
  color: white;
  border-radius: 8px;
  border: 2px solid black;
  background: black;
  display: flex;
  align-items: center;
  padding: 0 6.5rem;

  cursor: pointer;
  a {
    gap: 5px;
    border: none;
    text-decoration: none !important;
    outline: none;
  }
  &:hover {
    background: #2e3337;
  }
`
