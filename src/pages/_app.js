import { ChakraProvider } from '@chakra-ui/react'
import('@/style/scss/reset.scss')
import('@/style/scss/style.scss')


function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp;