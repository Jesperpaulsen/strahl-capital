export default {
  type: 'document',
  name: 'news',
  title: 'News Page',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title'
    },
    {
      name: 'description',
      type: 'blockContent',
      title: 'Description'
    }
  ]
}