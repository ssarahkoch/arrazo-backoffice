import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 4rem;
`
export const RegisteredProductsContainer = styled.div`
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
`

export const TitlePage = styled.a`
  font-size: 1.5rem;
  padding: 2.5rem 0 0 0;
`

export const ProductsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #d3d3d3;
`
export const AlignItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  max-width: 100%;
`

export const ProductCategory = styled.a`
  width: 7rem;
  font-size: 0.9rem;
`
export const ProductTitle = styled.a`
  width: 5rem;
  font-size: 0.9rem;
`
export const ProductSubtitle = styled.span`
  width: 9rem;
  font-size: 0.9rem;
`
export const ProductDescription = styled.p`
  width: 26rem;
  font-size: 0.9rem;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
`
export const ProductImg = styled.img`
  width: 7rem;
`
export const TrashButton = styled.button`
  display: flex;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 3rem;
  color: #a34040;

  &:hover {
    color: #7a3131;
    transform: translateY(-1px);
  }

  *,
  svg {
    width: 100%;
    height: 100%;
  }
`

export const FormatButton = styled.button`
  border: 1px solid #4059a3;
  background: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  bottom: 1.6rem;
  padding: 0.2rem;
  border-radius: 4px;
  color: #4059a3;

  &:hover {
    color: #314b7a;
    background-color: #e0e0e0;
    transform: translateY(-1px);
    box-shadow: 0 1px 2px #314b7a;
  }

  *,
  svg {
    width: 100%;
    height: 100%;
  }
`
export const Numbers = styled.div`
  font-size: 0.9rem;
  width: 5rem;
  display: flex;
  margin: 0 3rem;
  align-items: center;
  justify-content: center;
`
