import { ContentCardStyles } from './style'
import { Box, Button } from '@mui/material'


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

  const imageStyle = {
    borderRadius: '10px',
    maxWidth: '100%',
    maxHeight: '100%',
    height: 'auto',
    width: 'auto'
  }

  return (
    <ContentCardStyles>
      <Box className='main__container'>
        <img 
          src={image} 
          alt='outta touch screenshot'
          style={imageStyle}
        />
        <Box className='content__container'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div>
              <h1>{tech1}</h1>
              <h1>{tech2}</h1>
              <h1>{tech3}</h1>
            </div>
            <p>{description}</p>
        </Box>
      </Box>
      <Box className='view__buttons'>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%' }} href={siteLink}>
            View Live Project
        </Button>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%' }} href={codeLink}>
            View Code on Github
        </Button>
      </Box>
    </ContentCardStyles>
  )
}