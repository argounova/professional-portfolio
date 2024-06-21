import Head from 'next/head'
import Background_Work from '../../components/Background_Work'
import NavigationPrimary from '../../components/NavigationPrimary'
import { motion } from 'framer-motion'
import { Button } from '@mui/material'
import { useState } from 'react'

export default function Code_Home() {
  const variants = {
    hidden: { opacity: 0, scale: 0 },
    visible: { opacity: 1, scale: 1 },
  }

  const [isVisible1, setIsVisible1] = useState(false)
  const [isVisible2, setIsVisible2] = useState(false)
  const [isVisible3, setIsVisible3] = useState(false)

  return (
    <>
      <Head>
        <title>Craig K&ouml;nigwinter | Code Projects</title>
        <meta name="description" content="craig k&ouml;nigwinter 2024 professional portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/portfolio-icon.png" />
      </Head>
      <Background_Work />
      <NavigationPrimary linkTo="/design"/>
      <Button onClick={() => setIsVisible1(true)}>Open Project 1</Button>
      <Button style={{ marginRight: '100px' }} onClick={() => setIsVisible1(false)}>Close Project 1</Button>
      <Button onClick={() => setIsVisible2(true)}>Open Project 2</Button>
      <Button style={{ marginRight: '100px' }} onClick={() => setIsVisible2(false)}>Close Project 2</Button>
      <Button onClick={() => setIsVisible3(true)}>Open Project 3</Button>
      <Button onClick={() => setIsVisible3(false)}>Close Project 3</Button>
      <motion.div
        initial="hidden"
        animate={isVisible1 ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
        style={{
          width: '1000px',
          height: '500px',
          backgroundColor: 'white',
          position: 'absolute',
          top: '225px',
          left: '800px'
        }}
      />
      <motion.div
        initial="hidden"
        animate={isVisible2 ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
        style={{
          width: '1000px',
          height: '500px',
          backgroundColor: 'red',
          position: 'absolute',
          top: '225px',
          left: '800px'
        }}
      />
      <motion.div
        initial="hidden"
        animate={isVisible3 ? 'visible' : 'hidden'}
        variants={variants}
        transition={{ duration: 1 }}
        style={{
          width: '1000px',
          height: '500px',
          backgroundColor: 'yellow',
          position: 'absolute',
          top: '225px',
          left: '800px'
        }}
      />
    </>
  )
}