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
      name: 'body',
      type: 'blockContent',
      title: 'Body'
    }
  ]
}