import { HeaderContainer, LogoBrand, ShortcutBar, ButtonBar } from './styles'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <LogoBrand>AЯRAZO</LogoBrand>
      <ShortcutBar>
        <ButtonBar>
          <Link to="/Dashboard">Dashboard Admin </Link>
          <a style={{ cursor: 'default', border: 'none' }}>|</a>
          <Link to="/Cadastro/ListaDeProdutos">Produtos </Link>
          <a style={{ cursor: 'default', border: 'none' }}>|</a>
          <Link to="/ListaSlider">Slider </Link>
        </ButtonBar>
      </ShortcutBar>
    </HeaderContainer>
  )
}
