import { ContentCardStyles } from './style';
import {
  createContext,
  useContext,
  useState
} from 'react';
import {
  Box,
  Button,
  Icon,
  IconButton,
} from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';
import portfolioProjects from '../../constants/projects';


const ContentCardContext = createContext();

export default function ContentCard(props) {
  const [ContentCardOpen, setContentCardOpen] = useState(false)

  return (
    <ContentCardContext.Provider value={{ ContentCardOpen, setContentCardOpen }}>
      <ContentCardSelector {...props} />
      <ContentCardComponent {...props} />
    </ContentCardContext.Provider>
  )
}

function ContentCardSelector(props) {
  let { ContentCardOpen, setContentCardOpen } = useContext(ContentCardContext)

  return (
    <ContentCardStyles>
      <Button onClick={() => setContentCardOpen(!ContentCardOpen)}>
        Open Content Card
      </Button>
    </ContentCardStyles>
  )

}

function ContentCardComponent(props) {
  let { ContentCardOpen, setContentCardOpen } = useContext(ContentCardContext)

  let title = props.title
  let subheader = props.subheader
  let image = props.image
  let description = props.description
  let siteLink = props.siteLink
  let codeLink = props.codeLink
  let tech1 = props.tech1
  let tech2 = props.tech2
  let tech3 = props.tech3

  const imageStyle = {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  }

  return (
    <ContentCardStyles>
    {ContentCardOpen ?
      (
        <ContentCardSelector />
      ) : ( 
        <>
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
          <IconButton>
            <CloseIcon onClick={() => setContentCardOpen(!ContentCardOpen)} />
          </IconButton>
          <div>
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
      <div className='view__buttons'>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%' }} href={siteLink}>
            View Live Project
        </Button>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%' }} href={codeLink}>
            View Code on Github
        </Button>
      </div>
      </>
  )
}
  </ContentCardStyles>
  )
}