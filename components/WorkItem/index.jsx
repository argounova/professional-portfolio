import * as React from 'react';
import { WorkItemStyles } from './style';
import { Button, Icon } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Typography from '@mui/material/Typography';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import CloseIcon from '@mui/icons-material/Close';
import Link from 'next/link';
import Image from 'next/image';


export default function WorkItem(props) {

  let title = props.title
  let subheader = props.subheader
  let image = props.image
  let description = props.description
  let subDescription = props.subDescription
  let siteLink = props.siteLink
  let codeLink = props.codeLink
  let tech1 = props.tech1
  let tech2 = props.tech2
  let tech3 = props.tech3
  let onClick = props.onClick

  const imageStyle = {
    borderTopLeftRadius: '10px',
    borderBottomLeftRadius: '10px',
  }

  return (
    <WorkItemStyles>
      <div className='main__container'>
        <div className='card__image'>
          <Image 
            src={image} 
            alt='outta touch screenshot'
            width={960}
            height={440}
            style={imageStyle}
          />
        </div>
        <div className='content__container'>
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
      </div>
      <div className='view__buttons'>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%' }} href={siteLink}>
            View Live Project
        </Button>
        <Button variant='outlined' color='secondary' size='large' sx={{ width: '49%' }} href={codeLink}>
            View Code on Github
        </Button>
      </div>
    </WorkItemStyles>
  )
}