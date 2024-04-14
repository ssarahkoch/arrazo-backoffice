import { Link } from 'react-router-dom'
import {
  ButtonToForm,
  DashboardTitle,
  AlignDashbord,
  Container,
  AdminDashboardContainer,
} from './styles'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer/styles'

export function Dashboard() {
  return (
    <AdminDashboardContainer>
      <AlignDashbord>
        <Header />
        <Container>
          <DashboardTitle>Admin Dashboard</DashboardTitle>
          <Link to="/cadastro" style={{ textDecoration: 'none' }}>
            <ButtonToForm>Cadastrar Novos Produtos</ButtonToForm>
          </Link>
          <Link to="/CadastroSlider" style={{ textDecoration: 'none' }}>
            <ButtonToForm>Cadastrar Imagens Card</ButtonToForm>
          </Link>
        </Container>
      </AlignDashbord>
      <Footer />
    </AdminDashboardContainer>
  )
}
