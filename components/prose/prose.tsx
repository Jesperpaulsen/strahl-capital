import React from 'react'
import styles from './prose.module.css'
import cn from 'classnames'

interface ProseProps {
  white?: boolean
  large?: boolean
}

const Prose: React.FC<ProseProps> = ({ children, white=false, large=false }) => {
  return (
    <div className={cn(styles.prose, {
      [styles['prose--large']]: large,
      [styles['prose--white']]: white,
    })}>
      {children}
    </div>
  )
}

export default Prose