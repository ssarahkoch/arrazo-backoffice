import styled from 'styled-components'

export const Container = styled.form<{ height: string }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
`
export const InputContainer = styled.div<{ $columns: string | number }>`
  display: grid;

  grid-template-columns: ${(props) => props.$columns};
  padding: 3rem 10rem;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;
  gap: 0.5rem;
  ::placeholder {
    color: black;
  }
`

export const Input = styled.input`
  width: 30rem;
  height: 3rem;
  padding: 0 8px;
  background: #fff;
  border-bottom: 1px solid;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  margin-bottom: 0.5rem;
`
export const SubmitButton = styled.button`
  width: 30rem;
  height: 3rem;
  background: black;
  color: #fff;
  border-radius: 8px;
  border: none;
  cursor: pointer;
  margin-bottom: 1rem;
  :hover {
  }
`
