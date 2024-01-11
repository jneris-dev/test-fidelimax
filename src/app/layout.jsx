import { Poppins } from 'next/font/google'
import './globals.css'
import Script from 'next/script'

const poppins = Poppins({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['italic', 'normal'],
  subsets: ['latin-ext']
})

export const metadata = {
  title: 'Pesquisa de satisfação',
  description: 'Deixe sua avaliação aqui',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <Script src="https://third-party-script.js" async />
      <head>
        <script
          src="https://kit.fontawesome.com/51fa49c79f.js"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  )
}
