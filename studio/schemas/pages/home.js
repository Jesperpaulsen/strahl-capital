export default {
  type: 'document',
  name: 'home',
  title: 'Home',
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
      name: 'subTitle',
      type: 'blockContent',
      title: 'Subtitle'
    },
    {
      name: 'body',
      type: 'blockContent',
      title: 'Body'
    }
  ]
}