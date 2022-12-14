import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'

function MyApp({ Component, pageProps }: AppProps) {
  const { value } = useDarkMode
  return <ThemeProvider theme={ }><Component {...pageProps} /></ThemeProvider>
}

export default MyApp
