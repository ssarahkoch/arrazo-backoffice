import styled from 'styled-components'
import { Input } from '../../components/InputStyles/styles'

export const FormTitle = styled.a`
  display: flex;
  justify-content: center;
  font-size: 2rem;
  padding: 1.5rem 0 0.5rem 0;
  width: 100%;
`

export const ProductDescription = styled.textarea`
  width: 30rem;
  height: 7.5rem;
  padding: 8px;
  background: #fff;
  border-radius: 8px;
  border: 1px solid #d3d3d3;
  margin-bottom: 1rem;
`
export const NewProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const ProductQuantity = styled(Input)``
export const ProductCategory = styled(Input)``
export const ProductTitle = styled(Input)``
export const ProductSubtitle = styled(Input)``
export const ProductImage = styled(Input)``
export const ProductPrice = styled(Input)``
