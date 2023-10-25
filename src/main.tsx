import ReactDOM from 'react-dom/client'
import { ChakraProvider } from "@chakra-ui/react";
import theme from './assets/themes/theme.ts'
import App from './App.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
      <ChakraProvider theme={theme}>
        <App />
      </ChakraProvider>
)
