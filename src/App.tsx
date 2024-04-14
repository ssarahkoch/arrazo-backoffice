import { BrowserRouter } from 'react-router-dom'
import { GlobalStyle } from './Theme/global'
import { Router } from './Router'
import { ProductProvider } from './context' // Importe ProductProvider
import { Toaster } from 'sonner'

export default function App() {
  return (
    <BrowserRouter>
      <ProductProvider>
        <Router />
        <Toaster richColors position="top-right" />
        <GlobalStyle />
      </ProductProvider>
    </BrowserRouter>
  )
}
