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
import ContactDialog from '../ContactDialog'
import { code_projects } from '../../constants/projects'


export default function CodeProjects() {

  return (
    <>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '200px',
      }}
    >
      {code_projects.map((project) => (
          <Link
            href={`/code/${project.id}`} 
          >
            <Card sx={{ 
              width: '390px', 
              height: '390px', 
              backgroundColor: `${project.color}`, 
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
                {project.title}
              </Typography>        
              <CardContent>
                {
                  project.technologies.map((technology) => ( 
                    <Typography
                      key={technology}
                      align='center'
                      sx={{
                        fontFamily: 'Montserrat Variable',
                        fontSize: '1.5rem',
                        letterSpacing: '10px',
                      }}
                    >
                      {technology}
                    </Typography>
                  ))
                }
              </CardContent>
            </Card>
          </Link>
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