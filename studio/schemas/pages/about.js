export default {
  type: 'document',
  name: 'about',
  title: 'About Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'heroImage',
      type: 'defaultImage',
      title: 'Hero Image'
    },
    {
      name: 'imageText',
      type: 'string',
      title: 'Image text'
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body'
    }
  ]
}