import React from 'react'
import styles from './prose.module.css'

const Prose: React.FC = ({ children }) => {
  return (
    <div className={styles.prose}>
      {children}
    </div>
  )
}

export default Prose