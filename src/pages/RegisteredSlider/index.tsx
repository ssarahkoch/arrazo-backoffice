import axios from 'axios'
import { Header } from '../../components/Header'
import { useEffect, useState } from 'react'
import {
  SliderImage,
  RegisteredSliderContainer,
  SliderLink,
  ContainerSlider,
} from './styles'
import {
  Container,
  ProductsContainer,
  TitlePage,
  TrashButton,
} from '../RegisteredProducts/styles'
import { Trash } from '@phosphor-icons/react'
import { Footer } from '../../components/Footer/styles'

interface Slider {
  id: string
  image: string
  link?: string
  activeSlider: boolean
}
export function Slider() {
  const [sliderImage, setSliderImage] = useState<Slider[]>([])

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await axios.get('/slider')
      setSliderImage(response.data)
      console.log(response.data)
    } catch (error) {
      console.error('Erro ao selecionar imagem:', error)
    }
  }
  const deleteSlide = async (slideId: string) => {
    try {
      await axios.delete(`http://localhost:3333/slider/${slideId}`)
      fetchProducts()
    } catch (error) {
      console.error('Erro ao deletar imagem:', error)
    }
  }

  const patchProduct = async (id: string, activeSlider: boolean) => {
    try {
      await axios.patch(`http://localhost:3333/slider/activeSlider/${id}`, {
        activeSlider,
      })
      fetchProducts()
      console.log('Produto atualizado com sucesso')
    } catch (error) {
      console.error('Erro ao atualizar o produto:', error)
    }
  }

  return (
    <RegisteredSliderContainer>
      <Header />
      <Container>
        <TitlePage>Slider Cadastrados</TitlePage>
        {sliderImage.map((slider) => (
          <ContainerSlider key={slider.id}>
            <ProductsContainer>
              <SliderImage alt="" src={slider.image} />
              <SliderLink>{slider.link}</SliderLink>
              <input
                type="checkbox"
                onChange={(e) => patchProduct(slider.id, e.target.checked)}
                checked={slider.activeSlider}
              />
              <TrashButton onClick={() => deleteSlide(slider.id)}>
                <Trash size={23} weight="bold" />
              </TrashButton>
            </ProductsContainer>
          </ContainerSlider>
        ))}
      </Container>
      <Footer />
    </RegisteredSliderContainer>
  )
}
