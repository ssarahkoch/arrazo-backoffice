import styled from 'styled-components'
import { Input } from '../../components/InputStyles/styles'

export const FormTitle = styled.a`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  width: 100%;
`

export const NewSliderContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const ProductDescription = styled.textarea`
  width: 30rem;
  height: 7.5rem;
  padding: 8px;
  background: #fff;
  border-radius: 8px;
  border: 2px solid black;
  margin-bottom: 1rem;
`

export const ProductImage = styled(Input)``

export const NotificationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background: #fff;
  width: 14rem;
  height: 3rem;

  position: relative;
  left: 74.3rem;

  border-radius: 8px;
  margin-top: 5px;
  gap: 2px;

  font-weight: bold;
`
export const Padding = styled.div`
  padding-top: 3rem;
  margin-top: 5px;
`
// export const ButtonImageSearch = styled.button`
//   width: 30rem;
//   height: 2.5rem;
//   font-weight: bold;
//   border-radius: 8px;
//   border: 2px solid #382d2d;
//   background: #fffafa;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   & {
//     gap: 5px;
//   }
// `
