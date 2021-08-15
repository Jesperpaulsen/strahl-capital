import { Block } from '@sanity/types'
import BlockContent from '@sanity/block-content-to-react'
import React from 'react'
import markdownStyles from './markdown-styles.module.css'
import ImageWrapper from '../imageWrapper/imageWrapper'

interface BlockContentWrapperProps {
  text: Block[]
}

const imageSerializer: React.FC<any> = (props) => <ImageWrapper image={props.node.asset} />

const BlockContentWrapper: React.FC<BlockContentWrapperProps> = ({ text }) => {
  return <BlockContent
    blocks={text}
    projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
    dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
    className={markdownStyles.markdown}
    serializers={{
      types: {
        defaultImage: imageSerializer
      }
    }}
  />
}

export default BlockContentWrapper