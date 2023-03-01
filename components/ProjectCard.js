import uniqid from 'uniqid'
import GitHubIcon from '@material-ui/icons/GitHub'
import LaunchIcon from '@material-ui/icons/Launch'

const ProjectCard = ({ project }) => (
  <div className='project'>
    <div>
      {project.thumbnail && (
        <img
          className='project__thumbnail'
          src={project.thumbnail}
          alt='thumbnail'
        />
      )}

      {project.name && <h3 className='txtfont3'>{project.name}</h3>}

      {project.description && (
        <div className='txtfont2 txtsize3 project__description paragraph__list'>
          {project.description.map((item) => (
            <p key={uniqid()}>{item}</p>
          ))}
        </div>
      )}
    </div>

    <div>
      {project.stack && (
        <ul className='txtfont1 project__stack'>
          {project.stack.map((item) => (
            <li key={uniqid()} className='project__stack-item'>
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
	
  </div>
)

export default ProjectCard
