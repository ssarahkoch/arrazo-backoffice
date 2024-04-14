import { Routes, Route } from 'react-router-dom'
import { ProductsForm } from './pages/NewProductsForm'
import { Usuario } from './pages/UsuarioLogin'
import { Products } from './pages/RegisteredProducts'
import { Dashboard } from './pages/DashboardAdmin'
import { SliderForm } from './pages/NewSliderForm'
import { Slider } from './pages/RegisteredSlider'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Usuario />} />
      <Route path="/Dashboard" element={<Dashboard />} />
      <Route path="/Cadastro" element={<ProductsForm />} />
      <Route path="/Cadastro/ListaDeProdutos" element={<Products />} />
      <Route path="/CadastroSlider" element={<SliderForm />} />
      <Route path="/ListaSlider" element={<Slider />} />
    </Routes>
  )
}
