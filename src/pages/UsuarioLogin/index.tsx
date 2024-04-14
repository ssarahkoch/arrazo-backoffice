import { Link } from 'react-router-dom'
import {
  Input,
  SubmitButton,
  InputContainer,
} from '../../components/InputStyles/styles'
import { Container, BorderContainer, LoginTitle } from './styles'
import { Footer } from '../../components/Footer/styles'

export function Usuario() {
  return (
    <Container>
      <BorderContainer>
        <LoginTitle>Entrar</LoginTitle>
        <InputContainer $columns="string">
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Senha" />
          <Link to="/Dashboard">
            <SubmitButton>Entrar</SubmitButton>
          </Link>
        </InputContainer>
      </BorderContainer>
      <Footer />
    </Container>
  )
}
