import { ContentCardStyles } from './style'
import { Box, Button } from '@mui/material'
import Image from 'next/image'


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
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  }

  return (
    <ContentCardStyles>
      <Box className='main__container'>
        <Box className='card__image'>
          <Image 
            src={image} 
            alt='outta touch screenshot'
            width={960}
            height={440}
            style={imageStyle}
          />
        </Box>
        <div className='content__container'>
          <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
          </div>
          <div className='tech__stack'>
            <h1>{tech1}</h1>
            <h1>{tech2}</h1>
            <h1>{tech3}</h1>
          </div>
          <div>
            <p>{description}</p>
          </div>
        </div>
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