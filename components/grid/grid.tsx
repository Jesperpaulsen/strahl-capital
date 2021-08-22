import React from 'react'
import DefaultImage from '../../types/DefaultImage'
import Card from '../card/card'

interface GridProps {
  slugPrefix?: string
  title?: string
  items: {
    title: string,
    subtitle: string,
    image: DefaultImage,
    href: string
  }[]
}

/*const mockData = []

for (let i = 0; i < 50; i++) {
  mockData.push({
    title: 'test',
    subTitle: 'Check it out now',
    image: {
      _type:'defaultImage',
      alt:'We support teams seeking to make a positive impact for the benefit of people and the planet.',
        asset:{
          _ref:'image-e12a3e35f94791c44e9ffad579b923517b932f49-5760x3840-jpg',
          _type:'reference'
        }
    },
    href: '/investments/test'
  })
}*/

const Grid: React.FC<GridProps> = ({ items, title, slugPrefix }) => {
  return <div className="w-full">
    {title && <div className="text-heading-xl pt-10">
      {title.toUpperCase()}
    </div>}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 pt-4">
        {items.map((item, i) => (
          <Card key={`card-${i}`} {...item} slugPrefix={slugPrefix} />
        ))}
      </div>
  </div> 
}

export default Grid