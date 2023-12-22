import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

const theme = extendTheme(
  {
    fonts: {
      heading: `'DejaVu Mono'`,
      body: `'DejaVu Mono'`
    },
    colors: {
      dark: {
        100: "#040D12",
        900: "#040D12", // you need this
      }
    }
  }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
)
