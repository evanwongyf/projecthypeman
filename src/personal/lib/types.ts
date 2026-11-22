export type StudySession = {
  id: string
  moduleId: string
  date: string
  minutes: number
  note?: string
  createdAt: string
}

export type Deck = {
  id: string
  name: string
  moduleId?: string
  createdAt: string
}

export type CardType = 'basic' | 'reversible' | 'definition' | 'blackout' | 'mcq' | 'truefalse' | 'typed' | 'image'

export type McqOption = { text: string; correct: boolean }

// One shape for every card type; which fields are used depends on `type`
// (legacy cards have no `type` and are plain front/back cards).
export type Flashcard = {
  id: string
  deckId: string
  createdAt: string
  type?: CardType
  // basic/reversible/typed: question + answer. definition: term + definition.
  // blackout: front is the text with {bo}hidden{/bo} markers, back is optional extra info.
  front: string
  back: string
  example?: string // definition
  options?: McqOption[] // mcq
  answer?: boolean // truefalse
  alternates?: string[] // typed: other accepted answers
  explanation?: string // mcq / truefalse: shown after answering
  frontImageKey?: string
  backImageKey?: string
  // Signed URLs for the keys above. Attached when cards are read, never stored.
  frontImageUrl?: string
  backImageUrl?: string
}

// What the editor produces: a card minus the server-assigned fields.
export type CardDraft = Omit<Flashcard, 'id' | 'deckId' | 'createdAt' | 'frontImageKey' | 'backImageKey'> & {
  // `null` explicitly clears an image when editing (undefined would keep the old one)
  frontImageKey?: string | null
  backImageKey?: string | null
}

export type DecksData = {
  decks: Deck[]
  cards: Flashcard[]
}

export type PathCategory = 'academic' | 'interest'

export type StudyPath = {
  id: string
  category: PathCategory
  createdAt: string
  // academic only
  level?: string
  courseName?: string
  school?: string
  startDate?: string
  endDate?: string
  // interest only
  interestName?: string
  interestCategory?: string
}

export type Module = {
  id: string
  pathId: string
  name: string
  code?: string
  credits: number
  semester: string
  description?: string
  createdAt: string
}

export type BannerSettings = {
  active: boolean
  text: string
  color: string
  gradientEnabled: boolean
  gradientColor: string
  textColor: 'black' | 'white'
}

export type UserSettings = {
  banner: BannerSettings
  themeId: string
  tubby: TubbySettings
}

export type Folder = {
  id: string
  moduleId: string
  parentId: string | null
  name: string
  createdAt: string
}

export type FileItem = {
  id: string
  moduleId: string
  folderId: string | null
  name: string
  mimeType: string
  size: number
  r2Key: string
  createdAt: string
  url: string
}

export type HighlightRect = { x: number; y: number; width: number; height: number }

export type Highlight = { kind: 'pdf'; page: number; rects: HighlightRect[] } | { kind: 'text'; start: number; end: number }

export type Artifact = {
  id: string
  fileId: string
  parentId: string | null
  name: string
  color: string
  quote?: string
  body?: string
  highlight?: Highlight
  createdAt: string
}

export type TubbyCharacter = 'human' | 'cat' | 'robot' | 'tubby'
export type TubbyHeadwear = 'none' | 'cap' | 'beanie' | 'crown' | 'headband' | 'party' | 'wizard'

// How the search assistant looks. `bodyColor` null means "this character's own colour".
export type TubbySettings = {
  character: TubbyCharacter
  headwear: TubbyHeadwear
  headwearColor: string
  bodyColor: string | null
  hairColor: string
  background: string
  blink: boolean
  corner: 'right' | 'left'
  size: 'small' | 'medium' | 'large'
}
