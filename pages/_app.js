import Head from 'next/head'
import Script from 'next/script';
import { about } from '../data/portfolio'
import { ThemeProvider } from '../contexts/theme'
import '../styles/index.css'
import '../styles/App.css'
import '../styles/About.css'
import '../styles/Contact.css'
import '../styles/Footer.css'
import '../styles/Navbar.css'
import '../styles/ProjectCard.css'
import '../styles/Projects.css'
import '../styles/ScrollToTop.css'
import '../styles/Skills.css'
import 'animate.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
	
      <Script 
	    id="GA43829101" 
		src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script id="GA23598237">
		{`
			window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
			gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
			page_path: window.location.pathname,
			});
		`}
      </Script>
	
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <title>{about.name || 'Portfolio'}</title>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default MyApp
