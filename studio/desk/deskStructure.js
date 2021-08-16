import S from '@sanity/desk-tool/structure-builder';
import { getPreview } from './utils/getPreview';
import { FiHome, FiInfo, FiGrid, FiArchive, FiBriefcase, FiBookOpen, FiBookmark, FiCompass } from 'react-icons/fi'

export const getDefaultDocumentNode = ({ schemaType }) => S.document().views(getPreview(schemaType))

export default () => {
  return S.list()
    .title('Website')
    .items([
      S.listItem().title('Home').child(S.editor().id('home').schemaType('home').documentId('home').views(getPreview('home'))).icon(FiHome),
      S.listItem().title('About').child(S.editor().id('about').schemaType('about').documentId('about').views(getPreview('about'))).icon(FiInfo),
      S.listItem().title('Investments Page').child(S.editor().id('investments').schemaType('investments').documentId('investments').views(getPreview('investments'))).icon(FiGrid),
      S.listItem().title('News Page').child(S.editor().id('news').schemaType('news').documentId('news').views(getPreview('news'))).icon(FiArchive),
      S.divider(),
      S.listItem().title('Investments').child(S.documentTypeList('investment').title('Investments')).icon(FiBriefcase),
      S.listItem().title('News').child(S.documentTypeList('newsArticle').title('News Articles')).icon(FiBookOpen),
      S.divider(),
      S.listItem().title('Categories').child(S.documentTypeList('investmentCategory').title('Categories')).icon(FiBookmark),
      S.listItem().title('Locations').child(S.documentTypeList('location').title('Locations')).icon(FiCompass),
    ])
  }
