import { BackgroundWorkContainer } from './style'
import { motion } from 'framer-motion'


export default function Background_Work() {
  return (
    <BackgroundWorkContainer>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="radial_gradient"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <div className="horizon_gradient"></div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.2 }}
        transition={{ duration: 2 }}
      >
        <div className='horizon_grid_background'></div>
      </motion.div>
    </BackgroundWorkContainer>
  )
}