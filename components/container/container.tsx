import React from 'react'

interface ContainerProps {
  bleedMobile?: boolean
}

const Container: React.FC<ContainerProps> = ({ children, bleedMobile=false }) => {
  return <div className={`container w-full ${bleedMobile ? 'md:mx-auto md:px-5 lg:px-12' : 'mx-auto px-5 lg:px-12'}`}>{children}</div>
}

export default Container
