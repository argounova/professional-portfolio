import { LandingCategoriesContainer } from './style'
import { 
  Box,
  Card,
  CardContent,
  Typography } from '@mui/material';
import Link from 'next/link';
import categories from './categories'
import ContactDialog from '../../components/ContactDialog'



export default function LandingCategories() {

  return (
    <LandingCategoriesContainer>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
          gap: '20px',
        }}
      >
        <Typography
          sx={{ fontFamily: 'Montserrat Variable', fontSize: '3rem', letterSpacing: '10px', color: 'var(--blue2)' }}
          textAlign={'center'}
        >CRAIG PUTZSTUCK</Typography>
        <Typography 
          sx={{ fontFamily: 'Montserrat Variable', fontSize: '3rem', letterSpacing: '10px', color: 'var(--neon_green)' }}
          textAlign={'center'}
        >|</Typography>
        <Typography
          sx={{ fontFamily: 'Montserrat Variable', fontSize: '3rem', letterSpacing: '10px', color: 'var(--blue1)' }}
          textAlign={'center'}
        >PORTFOLIO</Typography>
        <ContactDialog />
      </Box>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          width: '100vw',
        }}
      >
        {categories.map((category) => (
          <Link href={category.link}>
            <Card sx={{  
              backgroundColor: `${category.color}`, 
              borderRadius: '50px',
              width: '390px',
              height: '390px',
              margin: '20px', 
            }}
              className='hover-outline'
            >
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
        ))}
      </Box>
    </LandingCategoriesContainer>
  )
}