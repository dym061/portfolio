import uniqid from 'uniqid'
import Hyphenated from 'react-hyphen'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import FacebookIcon from '@material-ui/icons/Facebook'
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { about } from '../data/portfolio'

const About = () => {
  const { name, description, social } =
    about
  const firstName = name ? name.split(' ')[0] : null

  return (
    <div className='about'>
      <div className='about__pseudo-padding about__pseudo-padding-top' />

      {firstName && (
		<div className='animate__animated animate__fadeIn animate__delay-2s'>
        <h1 className=''>
         <span className='txtfont1 txtsize5 txtupper txtbold0'>{name}</span>
          
        </h1>
		</div>
      )}

      { (
	    <div className='animate__animated animate__fadeIn animate__delay-3s'>
			<h1 className='txtfont1 txtupper h5 txtbold6'>
			  {(
				<span>
				  {' '}
				  Automation Developer
				</span>
			  )}
			  
			</h1>
		</div>
      )}

      <div className='animate__animated animate__fadeIn animate__delay-4s'>
        {description && (
          <div className='txtfont2 about__desc paragraph__list'>
            <span>Hello and welcome! My name is Dominik, and I am a freelance programmer and business software developer. With over 15 years of experience in technical support, web development, software development, and design, I am confident in my ability to bring innovative and effective solutions to any project.</span>
			<span>I specialize in automation and software development, and I have a particular passion for automation, which has fueled my interest in pursuing a career in machine learning and artificial intelligence. I believe that the future lies in these cutting-edge technologies, and I am eager to be a part of it.</span>
          </div>
        )}

        <div className='about__contact center'>
          
          {social && (
            <>
			  {social.linkedin && (
                <a
                  href={social.linkedin}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='linkedin'
                  className='link link--icon'
                >
                  <LinkedInIcon />
                </a>
              )}
			
              {social.facebook && (
                <a
                  href={social.facebook}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='facebook'
                  className='link link--icon'
                >
                  <FacebookIcon />
                </a>
              )}
			  
              {social.contra && (
                <a
                  href={social.contra}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='contra'
                  className='link link--icon'
                >
                  <OpenInNewIcon />
                </a>
              )}				  
			  
              {social.upwork && (
                <a
                  href={social.upwork}
                  target='_blank'
                  rel='noreferrer'
                  aria-label='upwork'
                  className='link link--icon'
                >
                  <OpenInNewIcon />
                </a>
              )}			  
            </>
          )}
        </div>
      </div>

      <div className='about__pseudo-padding' />
    </div>
  )
}

export default About
