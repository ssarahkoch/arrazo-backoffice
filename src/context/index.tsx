import React, { useState, useContext } from 'react'

export interface ProductData {
  id: string
  category: string
  title: string
  subtitle: string
  image: string
  description: string
  price: number
  quantity: number
}
interface MyObjectProviderProps {
  children: React.ReactNode
}

const primaryProductData: ProductData = {
  id: '',
  category: '',
  title: '',
  subtitle: '',
  image: '',
  description: '',
  price: 0,
  quantity: 0,
}

interface ProductContextType {
  defaultProductData: ProductData
  setDefaultProductData: React.Dispatch<React.SetStateAction<ProductData>>
  primaryProductData: ProductData
}

const ProductContext = React.createContext<ProductContextType | null>(null)

export const ProductProvider: React.FC<MyObjectProviderProps> = ({
  children,
}) => {
  const [defaultProductData, setDefaultProductData] =
    useState<ProductData>(primaryProductData)

  const value = {
    defaultProductData,
    setDefaultProductData,
    primaryProductData,
  }

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  )
}

export const useProduct = () => {
  const context = useContext(ProductContext)
  if (!context) {
    throw new Error('useProduct must be used within a ProductProvider')
  }
  return context
}

export default ProductContext
