import { WorkPlayToggleContainer } from "./style"
import { useState } from "react"
import { motion } from "framer-motion"


export default function WorkPlayToggle() {
  const [isWork, setIsWork] = useState(true)
  const spring = {
    type: 'spring',
    stiffness: 700,
    damping: 30
  }

  return(
    <WorkPlayToggleContainer 
      onClick={() => setIsWork(!isWork)}
      toggle={isWork} 
    >
      <motion.div
        className='handle'
        layout
        transition={spring}
      />
    </WorkPlayToggleContainer>
  )
}