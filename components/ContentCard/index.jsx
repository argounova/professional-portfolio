import { GridStyles } from './style'
import { Button } from '@mui/material'


export default function ContentCardComponent(props) {
  
  let title = props.title
  let subtitle = props.subtitle
  let tech1 = props.tech1
  let tech2 = props.tech2
  let tech3 = props.tech3
  let image = props.image
  let description = props.description
  let siteLink = props.siteLink
  let codeLink = props.codeLink

  return (
    <GridStyles>
      <img 
        src={image} 
        alt='outta touch screenshot'
        id='grid__image'
      />
      <ul id='grid__description'>
        <li>
          <h2>{title}</h2>
          <h2>{subtitle}</h2>
        </li>
        <li><h1>{tech1}</h1></li>
        <li><h1>{tech2}</h1></li>
        <li><h1>{tech3}</h1></li>
        <li><p>{description}</p></li>
      </ul>
      <div id='grid__buttons'>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%', textAlign: 'center' }} href={siteLink}>
            Project
        </Button>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%', textAlign: 'center' }} href={codeLink}>
            Github
        </Button>
      </div>
    </GridStyles>
  )
}