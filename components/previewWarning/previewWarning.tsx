import { useRouter } from 'next/router'
import React from 'react'

const PreviewWarning: React.FC = () => {
  const router = useRouter()

  return <div className="bg-red-400 z-20 w-full text-center">
    Preview is enabled <span className="underline cursor-pointer" onClick={() => router.push('/api/exit-preview')}>Exit</span>
  </div>
}

export default PreviewWarning