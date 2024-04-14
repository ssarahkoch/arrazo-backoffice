import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { Header } from '../../components/Header'
import {
  Container,
  InputContainer,
  SubmitButton,
} from '../../components/InputStyles/styles'
import { FormTitle, ProductImage, NewSliderContainer } from './styles'
import { Footer } from '../../components/Footer/styles'

export function SliderForm() {
  interface SliderData {
    id: string
    image: string
    link: string
  }

  const [sliderData, setSliderData] = useState<SliderData>({
    image: '',
    link: '',
    id: '',
  })
  const navigate = useNavigate()

  const createSlide = async () => {
    try {
      const postResponse = await axios.post('/slider', sliderData)
      console.log(postResponse.data, 'imagem subiu')
      navigate('/ListaSlider')
    } catch (error) {
      console.error('Erro ao criar slider:', error)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    createSlide()
  }

  return (
    <NewSliderContainer>
      <Header />
      <Container color="#fff" height="100%" onSubmit={handleSubmit}>
        <FormTitle>Cadastro Slider </FormTitle>
        <InputContainer $columns="string">
          <ProductImage
            type="text"
            placeholder="Faça o upload da imagem"
            value={sliderData.image}
            onChange={(e) =>
              setSliderData({ ...sliderData, image: e.target.value })
            }
          />

          <ProductImage
            type="text"
            placeholder="Adicione o link dos produtos"
            value={sliderData.link}
            onChange={(e) =>
              setSliderData({ ...sliderData, link: e.target.value })
            }
          />

          <SubmitButton type="submit">Adicionar Slider</SubmitButton>
        </InputContainer>
      </Container>
      <Footer />
    </NewSliderContainer>
  )
}
