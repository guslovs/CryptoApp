import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import RootLayout from './components/RootLayout'
import LevelUpPage from './pages/LevelUpPage'
import BenefitsPage from './pages/BenefitsPage'
import CryptoBasketPage from './pages/CryptoBasketPage'
import PayPage from './pages/PayPage'
import PrimePage from './pages/PrimePage'
import BitcoinPage from './pages/BitcoinPage'
import EthereumPage from './pages/EthereumPage'
import CryptoPage from './pages/CryptoPage'
import CryptoPricesPage from './pages/CryptoPricesPage'
import AboutUsPage from './pages/AboutUsPage'
import RoadmapPage from './pages/RoadmapPage'
import PartnersPage from './pages/PartnersPage'
import SecurityPage from './pages/SecurityPage'
import CareersPage from './pages/CareersPage'
import CryptoPriceDetailsPage from './pages/CryptoPriceDetailsPage'
import ConverterPage from './pages/ConverterPage'
import SignUpPage from './pages/SignUpPage'
import Login from './components/Login/Login'

function App() {
  const router = createBrowserRouter([
    {
      path: '/', 
      element: <RootLayout />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/signup', element: <SignUpPage /> },
        { path: '/login', element: <Login /> },
        { path: '/levelup', element: <LevelUpPage /> },
        { path: '/compare-benefits', element: <BenefitsPage /> },
        { path: '/crypto-basket', element: <CryptoBasketPage /> },
        { path: '/pay', element: <PayPage /> },
        { path: '/prime', element: <PrimePage /> },
        { path: '/bitcoin', element: <BitcoinPage /> },
        { path: '/what-is-ethereum', element: <EthereumPage /> },
        { path: '/what-is-crypto', element: <CryptoPage /> },
        { path: '/crypto-prices', element: <CryptoPricesPage /> },
        { path: '/crypto-prices/:id', element: <CryptoPriceDetailsPage /> },
        { path: '/converter', element: <ConverterPage /> },
        { path: '/about-us', element: <AboutUsPage /> },
        { path: '/roadmap', element: <RoadmapPage /> },
        { path: '/partners', element: <PartnersPage /> },
        { path: '/security', element: <SecurityPage /> },
        { path: '/careers', element: <CareersPage /> },
      ] 
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
