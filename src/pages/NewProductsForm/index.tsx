import { FormEvent, useEffect, useState } from 'react'
import axios from 'axios'
import { Header } from '../../components/Header'
import { ProductData, useProduct } from '../../context'
import { toast } from 'sonner'
import {
  Container,
  InputContainer,
  SubmitButton,
} from '../../components/InputStyles/styles'
import {
  FormTitle,
  ProductDescription,
  ProductImage,
  ProductQuantity,
  ProductTitle,
  ProductPrice,
  ProductSubtitle,
  ProductCategory,
  NewProductsContainer,
} from './styles'
import { useNavigate } from 'react-router-dom'
import { Footer } from '../../components/Footer/styles'

export function ProductsForm() {
  // const [productForm, setProductForm] = useState({
  //   productCategory: '',
  //   productCategory: '',
  //   productCategory: '',
  //   productCategory: '',
  // })
  const [productCategory, setProductCategory] = useState('')
  const [productTitle, setProductTitle] = useState('')
  const [productSubtitle, setProductSubtitle] = useState('')
  const [productDescription, setProductDescription] = useState('')
  const [productQuantity, setProductQuantity] = useState(0)
  const [productPrice, setProductPrice] = useState(0)
  const [productImage, setProductImage] = useState('')

  const { defaultProductData, setDefaultProductData, primaryProductData } =
    useProduct()
  const navigate = useNavigate()

  const createProduct = async (productData: Omit<ProductData, 'id'>) => {
    try {
      const postResponse = await axios.post('/products', productData)
      console.log(postResponse.data)
    } catch (error) {
      console.error('Erro ao criar produto:', error)
    }
  }

  const patchProduct = async (productData: Omit<ProductData, 'id'>) => {
    try {
      await axios.patch(
        `http://localhost:3333/products/${defaultProductData.id}`,
        productData,
      )
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error)
    }
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const productData: Omit<ProductData, 'id'> = {
      category: productCategory,
      title: productTitle,
      subtitle: productSubtitle,
      image: productImage,
      description: productDescription,
      quantity: productQuantity,
      price: productPrice,
    }
    if (defaultProductData !== primaryProductData) {
      patchProduct(productData)
      setDefaultProductData(primaryProductData)
      navigate('/Cadastro/ListaDeProdutos')
    } else {
      createProduct(productData)
      setProductCategory('')
      setProductTitle('')
      setProductSubtitle('')
      setProductDescription('')
      setProductQuantity(0)
      setProductImage('')
      setProductPrice(0)

      toast.success('Produto cadastrado com sucesso!')
    }
  }
  useEffect(() => {
    setProductCategory(defaultProductData.category)
    setProductTitle(defaultProductData.title)
    setProductSubtitle(defaultProductData.subtitle)
    setProductDescription(defaultProductData.description)
    setProductQuantity(defaultProductData.quantity)
    setProductPrice(defaultProductData.price)
    setProductImage(defaultProductData.image)
  }, [defaultProductData])

  return (
    <NewProductsContainer>
      <Header />

      <Container color="#fff" height="100%" onSubmit={handleSubmit}>
        <FormTitle>Cadastro de Produtos</FormTitle>
        <InputContainer $columns="1fr 1fr">
          <div>
            <ProductCategory
              placeholder="Escreva a categoria do produto"
              value={productCategory}
              onChange={(e) => setProductCategory(e.target.value)}
            />
            <div>
              <ProductTitle
                placeholder="Escreva a marca do produto"
                value={productTitle}
                onChange={(e) => setProductTitle(e.target.value)}
              />
            </div>

            <ProductSubtitle
              placeholder="Escreva o subtítulo do produto"
              value={productSubtitle}
              onChange={(e) => setProductSubtitle(e.target.value)}
            />

            <ProductDescription
              placeholder="Descreva seu produto"
              value={productDescription}
              onChange={(e) => setProductDescription(e.target.value)}
            />
          </div>
          <div>
            <ProductImage
              placeholder="Faça o upload da imagem"
              value={productImage}
              onChange={(e) => setProductImage(e.target.value)}
            />

            <ProductPrice
              type="number"
              placeholder="Valor do produto"
              value={productPrice}
              onChange={(e) => setProductPrice(Number(e.target.value))}
            />

            <ProductQuantity
              type="number"
              placeholder="Número de produtos em estoque"
              value={productQuantity}
              onChange={(e) => setProductQuantity(Number(e.target.value))}
            />
            <SubmitButton type="submit">Cadastrar Produto</SubmitButton>
          </div>
        </InputContainer>
      </Container>
      <Footer />
    </NewProductsContainer>
  )
}
