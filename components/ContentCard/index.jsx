import { ContentCardStyles } from './style'
import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Box,
  Button,
  IconButton,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import Image from 'next/image';
import { code_projects } from '../../constants/projects';


export default function ContentCardComponent(props) {
  
  let title = props.title
  let subheader = props.subheader
  let tech1 = props.tech1
  let tech2 = props.tech2
  let tech3 = props.tech3
  let image = props.image
  let description = props.description
  let siteLink = props.siteLink
  let codeLink = props.codeLink
  let style = props.style
  

  const imageStyle = {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  }

  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }
  
  const [isVisible1, setIsVisible1] = useState(false)
  

  return (
    <>
      <motion.div
        initial="visible"
        animate={isVisible1 ? 'hidden' : 'visible'}
        variants={variants}
        transition={{ duration: 1 }}
        style={{
          width: '100vw',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          paddingTop: '20px',
        }}
      >
        {code_projects.map((project) => (
          <Button key={project.id} sx={{ marginLeft: '20px', paddingRight: '20px' }} variant='contained' color='secondary' size='large' onClick={() => setIsVisible1(!isVisible1)}>
            {project.buttonName}
          </Button>
        ))}
        
        </motion.div>
        <ContentCardStyles>
          <motion.div
            initial="hidden"
            animate={isVisible1 ? 'visible' : 'hidden'}
            variants={variants}
            transition={{ duration: 1 }}
            style={style}
          >
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
                  <IconButton onClick={() => setIsVisible1(!isVisible1)}>
                    <CloseIcon color='secondary' />
                  </IconButton>
                  <h1>{title}</h1>
                  <h2>{subheader}</h2>
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
          </motion.div>
        </ContentCardStyles>
    </>
  )
}