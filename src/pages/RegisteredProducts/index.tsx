import axios from 'axios'
import { useEffect, useState } from 'react'
import { Header } from '../../components/Header'
import { PencilSimpleLine, Trash } from '@phosphor-icons/react'
import {
  Container,
  ProductTitle,
  ProductSubtitle,
  ProductsContainer,
  ProductImg,
  ProductDescription,
  AlignItems,
  TrashButton,
  Numbers,
  FormatButton,
  ProductCategory,
  RegisteredProductsContainer,
  TitlePage,
} from './styles'
import { ProductData, useProduct } from '../../context'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer/styles'

export function Products() {
  const [dataProducts, setDataProducts] = useState<Array<ProductData>>([])
  const { setDefaultProductData } = useProduct()
  const navigate = useNavigate()

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/products')
      setDataProducts(response.data)
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }

  const deleteProduct = async (productId: string) => {
    try {
      await axios.delete(`http://localhost:3333/products/${productId}`)
      fetchProducts()
    } catch (error) {
      console.error('Erro ao deletar produto:', error)
    }
  }
  const getProductById = async (productId: string) => {
    try {
      const response = await axios.get(`/products/${productId}`)
      setDefaultProductData(response.data)
      navigate('/cadastro')
    } catch (error) {
      console.error('Erro ao selecionar produto:', error)
    }
  }
  function formatarPreco(preco: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(preco)
  }

  return (
    <RegisteredProductsContainer>
      <Header />
      <Container>
        <TitlePage>Produtos Cadastrados</TitlePage>

        {dataProducts.map((data) => (
          <ProductsContainer key={data.id}>
            <AlignItems>
              <ProductImg src={data.image} alt={data.title} />
              <ProductCategory>{data.category}</ProductCategory>
              <ProductTitle>{data.title}</ProductTitle>
              <ProductSubtitle>{data.subtitle}</ProductSubtitle>
              <ProductDescription>{data.description}</ProductDescription>

              <Numbers>{formatarPreco(data.price)}</Numbers>
              <Numbers>{data.quantity}</Numbers>
              <TrashButton onClick={() => deleteProduct(data.id)}>
                <Trash size={23} weight="bold" />
              </TrashButton>
              <FormatButton onClick={() => getProductById(data.id)}>
                <PencilSimpleLine size={18} weight="bold" />
              </FormatButton>
            </AlignItems>
          </ProductsContainer>
        ))}
      </Container>
      <Footer />
    </RegisteredProductsContainer>
  )
}
