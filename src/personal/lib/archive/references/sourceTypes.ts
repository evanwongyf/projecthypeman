export type SourceTypeId = 'journal' | 'book' | 'chapter' | 'webpage' | 'report' | 'thesis' | 'conference' | 'video'

export type SourceType = {
  id: SourceTypeId
  label: string
  blurb: string
  // Where on the source each piece of the reference is found.
  find: string[]
  mistakes: string[]
}

export const SOURCE_TYPES: SourceType[] = [
  {
    id: 'journal',
    label: 'Journal article',
    blurb: 'A paper published in a scholarly journal, often found through a library database.',
    find: [
      'Authors and title are at the top of the first page.',
      'Journal name, volume, issue and pages are in the header, footer, or the citation box on the database page.',
      'The DOI is on the first page or next to the article in the database.',
    ],
    mistakes: [
      'Citing the database (like Google Scholar) instead of the journal.',
      'Leaving out the issue number when the journal has one.',
      'Forgetting the DOI when there is one.',
    ],
  },
  {
    id: 'book',
    label: 'Book',
    blurb: 'A whole book, print or e-book, written by one or more authors.',
    find: [
      'Title, edition and publisher are on the title page and the page after it.',
      'The year is on the copyright page, marked with the copyright symbol.',
      'Only note the edition if it is not the first.',
    ],
    mistakes: [
      'Using the year of a reprint instead of the edition you actually read.',
      'Adding the city when your style no longer needs it.',
      'Forgetting the edition for a 2nd or later edition.',
    ],
  },
  {
    id: 'chapter',
    label: 'Chapter in an edited book',
    blurb: 'One chapter written by one person, inside a book collected by editors.',
    find: [
      'The chapter author and title are at the start of the chapter.',
      'The book title, editors and publisher are on the book title page.',
      'The chapter page range is in the table of contents.',
    ],
    mistakes: [
      'Naming the book editors as the authors of the chapter.',
      'Citing the whole book when you only used one chapter.',
      'Leaving out the chapter page range.',
    ],
  },
  {
    id: 'webpage',
    label: 'Webpage',
    blurb: 'A page on a website, such as an article, guide, or news story.',
    find: [
      'The author and date are usually under the headline or at the bottom of the page.',
      'The website name is in the header, footer, or browser tab.',
      'Copy the link from the address bar. If there is no date, use n.d. where your style asks for it.',
    ],
    mistakes: [
      'Citing only the home page instead of the exact page.',
      'Forgetting the access date in styles that ask for one.',
      'Using a shortened or tracking link.',
    ],
  },
  {
    id: 'report',
    label: 'Report',
    blurb: 'A report from a government, company, charity or research group.',
    find: [
      'The authors and title are on the cover page.',
      'The report number is on the cover or the inside title page.',
      'The organisation that published it is usually named at the bottom of the cover.',
    ],
    mistakes: [
      'Listing the organisation twice when it is both the author and the publisher.',
      'Leaving out the report number.',
      'Citing a news story about the report instead of the report.',
    ],
  },
  {
    id: 'thesis',
    label: 'Thesis or dissertation',
    blurb: 'A long piece of research written for a university degree.',
    find: [
      'The author, title, degree and university are on the title page.',
      'The year is the year the degree was awarded.',
      'The repository or database and its link are on the page where you downloaded it.',
    ],
    mistakes: [
      'Not saying whether it is a master or doctoral thesis.',
      'Leaving out the university.',
      'Forgetting the repository link for an online copy.',
    ],
  },
  {
    id: 'conference',
    label: 'Conference paper',
    blurb: 'A paper published in the proceedings of a conference.',
    find: [
      'The authors and title are at the top of the paper.',
      'The proceedings title, editors, publisher and page range are on the first page or the database page.',
      'Conference dates and place are on the cover of the proceedings.',
    ],
    mistakes: [
      'Citing the conference slides when you read the published paper.',
      'Leaving out the page range.',
      'Mixing up the conference name and the proceedings title.',
    ],
  },
  {
    id: 'video',
    label: 'Online video',
    blurb: 'A video on YouTube or a similar site, such as a lecture or talk.',
    find: [
      'The title and channel name are under the video.',
      'The upload date is under the title or in the description.',
      'Copy the link from the address bar or the Share button.',
    ],
    mistakes: [
      'Naming the speaker when the channel is the creator, or the other way round.',
      'Leaving out the upload date.',
      'Citing a re-upload instead of the original channel.',
    ],
  },
]

export function sourceTypeById(id: SourceTypeId): SourceType {
  return SOURCE_TYPES.find((t) => t.id === id) ?? SOURCE_TYPES[0]
}
