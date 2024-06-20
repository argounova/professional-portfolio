import { ParallaxWrapper, ProgressWrapper } from "./style"
import { useRef } from "react"
import {
  motion,
  useScroll,
  useSpring,
  useTransform
} from "framer-motion"


const useParallax = (value, distance) => {
  return useTransform(
    value,
    [0, 1],
    [-distance, distance]
  )
}

const ParallaxElement = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref })
  const y = useParallax(scrollYProgress, 300)

  return (
    <ParallaxWrapper>
      <div ref={ref}>
        <img src="https://source.unsplash.com/random/300x400" alt="parallax" />
      </div>
      <motion.h2 style={{ y }}>Parallax</motion.h2>
    </ParallaxWrapper>
  )
}

export default function Parallax() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  return (
    <ProgressWrapper>
      <ParallaxElement />
      <ParallaxElement />
      <ParallaxElement />
      <ParallaxElement />
      <ParallaxElement />
      <motion.div
        className="progress"
        style={{ scaleX }}
      />
    </ProgressWrapper>
  )
}