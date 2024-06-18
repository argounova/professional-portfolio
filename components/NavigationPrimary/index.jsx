import { NavigationPrimaryContainer } from "./style"
import { motion } from "framer-motion"
import SwitchAccessShortcutAddIcon from '@mui/icons-material/SwitchAccessShortcutAdd'
import {
  Box,
  Link
} from '@mui/material'


export default function NavigationPrimary({ linkTo }) {
  return (
    <NavigationPrimaryContainer>
      <Box className="nav-home">
        <motion.div
          animate={{
            opacity: [1, 0.1, 1, 0.1, 1],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        >
        <Link href="/">
          <SwitchAccessShortcutAddIcon className="icon-mod" sx={{ color: 'var(--blue1)' }}/>
        </Link>
        </motion.div>
      </Box>
      <Box className="nav-next">
        <motion.div
          animate={{
            opacity: [1, 0.1, 1, 0.1, 1],
          }}
          transition={{
            duration: 15,
            ease: "easeInOut",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: Infinity,
          }}
        >
        <Link href={linkTo}>
          <SwitchAccessShortcutAddIcon className="icon-mod" sx={{ color: 'var(--neon_green)' }}/>
        </Link>
        </motion.div>
      </Box>
    </NavigationPrimaryContainer>
  )
}