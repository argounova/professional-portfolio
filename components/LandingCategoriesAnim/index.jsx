import * as React from 'react';
import { LandingCategoriesContainer } from './style';
import styles from '@/styles/Home.module.css'
import { motion } from 'framer-motion';
import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import categories from './categories'
import ContactDialog from '../../components/ContactDialog'


export default function LandingCategoriesAnim() {

  return (
    <>
    <motion.div
      initial={{ opacity: 1}}
      animate={{ opacity: 0, transition: { duration: 1 } }}
    >
      <div className={styles.landingPage__heading}>
        <h1>CRAIG K&Ouml;NIGWINTER</h1>
        <h1 style={{ color: 'var(--neon_green)' }}>|</h1>
        <h1 style={{ color: 'var(--blue1)' }}>PORTFOLIO</h1>
        <ContactDialog />
      </div>
    </motion.div>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '200px',
        marginTop: '20px',
        marginBottom: '200px',
      }}
    >
      {categories.map((category) => (
        <motion.div
          key={category.id}
          initial={{ scale: 1 }}
          animate={{ scale: 0.25, y: "-100%", transition: { duration: 0.8 }  }}
          whileHover={{ scale: 0.27 }}
        >
          <Link
            href={category.link} 
            // target='_blank' 
            // rel='noreferrer'
          >
            <Card sx={{ 
              width: '390px', 
              height: '390px', 
              backgroundColor: `${category.color}`, 
              borderRadius: '50px', 
              boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.2)',
            }}>
              <Typography
                sx={{
                  fontSize: '8rem',
                  fontFamily: 'Montserrat Variable',
                  textTransform: 'uppercase'
                }}
                align='center'
              >
                {category.title}
              </Typography>        
              <CardContent>
                {
                  category.subtitles.map((subtitle) => ( 
                    <Typography
                      key={subtitle}
                      align='center'
                      sx={{
                        fontFamily: 'Montserrat Variable',
                        fontSize: '2rem',
                        letterSpacing: '10px',
                      }}
                    >
                      {subtitle}
                    </Typography>
                  ))
                }
              </CardContent>
            </Card>
          </Link>
        </motion.div>
      ))}
    </Box>
    <motion.div
      animate={{ opacity: 0, transition: { duration: 1 }}}
    >
      <LandingCategoriesContainer>
        <div className='ellipse'></div>
        <div className='ellipse'></div>
        <div className='ellipse'></div>
      </LandingCategoriesContainer>
    </motion.div>
    </>
  )
}