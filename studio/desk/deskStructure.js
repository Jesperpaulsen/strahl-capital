import S from '@sanity/desk-tool/structure-builder';
import { getPreview } from './utils/getPreview';

export default () => {
  return S.list()
    .title('Website')
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('home').views(getPreview('home'))),
      S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('about').views(getPreview('about'))),
      S.listItem().title('Investments Page').child(S.editor().id('investments').schemaType('investments').documentId('investments').views(getPreview('investments'))),
      S.listItem().title('News Page').child(S.editor().id('news').schemaType('news').documentId('news').views(getPreview('news'))),
      S.divider(),
      S.listItem().title('Investments').child(S.documentTypeList('investment').title('Investments')),
      S.listItem().title('News').child(S.documentTypeList('newsArticle').title('News Articles')),
    ])
  }
