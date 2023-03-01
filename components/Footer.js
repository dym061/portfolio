const today = new Date()
const year = today.getFullYear();

const Footer = () => (
  <footer className='footer txtfont2 txtsize3'>
	brewed in <span className='text--strong'> Next.js </span> . <span className='text--strong'> React </span> | <span> {year} </span>
  </footer>
)

export default Footer