import { motion } from 'framer-motion'
import arrowIcon from './arrow-right.svg'
import PropTypes from 'prop-types';

const defaultSize = 24

const sizesNames = {
  small: 14,
  middle: defaultSize,
  large: 34
}

const getFinalSize = size => {
  if(!isNaN(size)) return size
  return sizesNames[size] || defaultSize
}

const rotations = {
  up: -90,
  right: 0,
  down: 90,
  left: 180
}

export default function Arrow({size = 'middle', direction = 'right'}) {
  const finalSize = getFinalSize(size)
  const rotate = rotations[direction] || 0

  return (
    <motion.div
      animate={{rotate}}
      style={{height: finalSize, width: finalSize}}
    >
      <img
        className="h-full mx-auto"
        src={arrowIcon}
      />
    </motion.div>
  )
}

export const directions = ['right', 'down', 'left', 'up']
export const sizes = Object.keys(sizesNames)

Arrow.propTypes = {
  size: PropTypes.oneOf(sizes),
  direction: PropTypes.oneOf(directions)
}