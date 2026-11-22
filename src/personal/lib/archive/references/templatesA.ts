import type { FormatId } from './formats'

// Field markup: {key|placeholder|example}, *italic*. See lib/archive/cite.ts.
export type TemplateSet = Record<FormatId, string>

export const JOURNAL: TemplateSet = {
  apa: `{au|Surname, A. A., & Surname, B. B.|Okafor, M. R., & Lindqvist, D. J.} ({yr|Year|2021}). {ti|Title of article in sentence case|Sleep and memory in university students}. *{ct|Journal Name|Journal of Learning and Cognition}, {vo|volume|14}*({is|issue|3}), {pg|first–last|201–218}. {id|https://doi.org/xxxxx|https://doi.org/10.1234/jlc.2021.014}`,
  mla: `{au|Surname, First Name, and First Name Surname|Okafor, Maya R., and Daniel J. Lindqvist}. "{ti|Title of Article in Title Case|Sleep and Memory in University Students}." *{ct|Journal Name|Journal of Learning and Cognition}*, vol. {vo|volume|14}, no. {is|issue|3}, {yr|Year|2021}, pp. {pg|first–last|201–18}. {id|DOI as a link|https://doi.org/10.1234/jlc.2021.014}.`,
  chicago: `{au|Surname, First Name, and First Name Surname|Okafor, Maya R., and Daniel J. Lindqvist}. "{ti|Title of Article in Title Case|Sleep and Memory in University Students}." *{ct|Journal Name|Journal of Learning and Cognition}* {vo|volume|14}, no. {is|issue|3} ({yr|Year|2021}): {pg|first–last|201–18}. {id|DOI as a link|https://doi.org/10.1234/jlc.2021.014}.`,
  harvard: `{au|Surname, A.B. and Surname, C.D.|Okafor, M.R. and Lindqvist, D.J.} ({yr|Year|2021}) '{ti|Title of article|Sleep and memory in university students}', *{ct|Journal Name|Journal of Learning and Cognition}*, {vo|volume|14}({is|issue|3}), pp. {pg|first-last|201-218}. {id|DOI as a link|https://doi.org/10.1234/jlc.2021.014}.`,
  ieee: `{au|A. B. Surname and C. D. Surname|M. R. Okafor and D. J. Lindqvist}, "{ti|Title of article|Sleep and memory in university students},"  *{ct|Abbreviated Journal Name|J. Learn. Cogn.}*, vol. {vo|volume|14}, no. {is|issue|3}, pp. {pg|first–last|201–218}, {yr|Year|2021}, doi: {id|DOI|10.1234/jlc.2021.014}.`,
  vancouver: `{au|Surname AB, Surname CD.|Okafor MR, Lindqvist DJ.} {ti|Title of article in sentence case|Sleep and memory in university students}. {ct|Abbreviated Journal Name|J Learn Cogn}. {yr|Year|2021};{vo|volume|14}({is|issue|3}):{pg|first-last|201-18}. doi:{id|DOI|10.1234/jlc.2021.014}`,
}

export const BOOK: TemplateSet = {
  apa: `{au|Surname, A. A.|Sharma, P. N.} ({yr|Year|2019}). *{ti|Title of book: Subtitle in sentence case|The study habit: How students build lasting routines}* ({ot|Edition|2nd ed.}). {pb|Publisher|Harbor Lane Press}.`,
  mla: `{au|Surname, First Name.|Sharma, Priya N.} *{ti|Title of Book: Subtitle in Title Case|The Study Habit: How Students Build Lasting Routines}*. {ot|Edition|2nd ed.}, {pb|Publisher|Harbor Lane Press}, {yr|Year|2019}.`,
  chicago: `{au|Surname, First Name.|Sharma, Priya N.} *{ti|Title of Book: Subtitle in Title Case|The Study Habit: How Students Build Lasting Routines}*. {ot|Edition|2nd ed.} {pb|Publisher|Harbor Lane Press}, {yr|Year|2019}.`,
  harvard: `{au|Surname, A.B.|Sharma, P.N.} ({yr|Year|2019}) *{ti|Title of book: subtitle|The study habit: how students build lasting routines}*. {ot|Edition, if not the first|2nd edn}. {pb|Publisher|Harbor Lane Press}.`,
  ieee: `{au|A. B. Surname|P. N. Sharma}, *{ti|Title of Book|The Study Habit: How Students Build Lasting Routines}*, {ot|Edition|2nd ed.} {pb|City, Country: Publisher|London, U.K.: Harbor Lane Press}, {yr|Year|2019}.`,
  vancouver: `{au|Surname AB.|Sharma PN.} {ti|Title of book|The study habit: how students build lasting routines}. {ot|Edition|2nd ed.} {pb|Place: Publisher|London: Harbor Lane Press}; {yr|Year|2019}.`,
}

export const CHAPTER: TemplateSet = {
  apa: `{au|Surname, A. A.|Ekwueme, T.} ({yr|Year|2020}). {ti|Title of chapter|Retrieval practice in the classroom}. In {ed|E. E. Editor & F. F. Editor|L. K. Fischer & O. Haddad} (Eds.), *{ct|Title of book|Handbook of effective study}* (pp. {pg|first–last|45–68}). {pb|Publisher|Meridian Academic Press}.`,
  mla: `{au|Surname, First Name.|Ekwueme, Tomas.} "{ti|Title of Chapter|Retrieval Practice in the Classroom}." *{ct|Title of Book|Handbook of Effective Study}*, edited by {ed|First Name Surname and First Name Surname|Lena K. Fischer and Omar Haddad}, {pb|Publisher|Meridian Academic Press}, {yr|Year|2020}, pp. {pg|first–last|45–68}.`,
  chicago: `{au|Surname, First Name.|Ekwueme, Tomas.} "{ti|Title of Chapter|Retrieval Practice in the Classroom}." In *{ct|Title of Book|Handbook of Effective Study}*, edited by {ed|First Name Surname and First Name Surname|Lena K. Fischer and Omar Haddad}. {pb|Publisher|Meridian Academic Press}, {yr|Year|2020}.`,
  harvard: `{au|Surname, A.B.|Ekwueme, T.} ({yr|Year|2020}) '{ti|Title of chapter|Retrieval practice in the classroom}', in {ed|A.B. Surname (ed.) or A.B. Surname and C.D. Surname (eds)|L.K. Fischer and O. Haddad (eds)} *{ct|Title of book|Handbook of effective study}*. {pb|Publisher|Meridian Academic Press}, pp. {pg|first-last|45-68}.`,
  ieee: `{au|A. B. Surname|T. Ekwueme}, "{ti|Title of chapter|Retrieval practice in the classroom},"  in *{ct|Title of Book|Handbook of Effective Study}*, {ed|A. B. Editor and C. D. Editor|L. K. Fischer and O. Haddad}, Eds. {pb|City, Country: Publisher|London, U.K.: Meridian Academic Press}, {yr|Year|2020}, pp. {pg|first–last|45–68}.`,
  vancouver: `{au|Surname AB.|Ekwueme T.} {ti|Title of chapter|Retrieval practice in the classroom}. In: {ed|Surname AB, Surname CD, editors.|Fischer LK, Haddad O, editors.} {ct|Title of book|Handbook of effective study}. {pb|Place: Publisher|London: Meridian Academic Press}; {yr|Year|2020}. p. {pg|first-last|45-68}.`,
}

// Chicago footnotes (first note for each source). Bibliography entries are in the sets above.
export const NOTE_JOURNAL = `{au|First Name Surname and First Name Surname|Maya R. Okafor and Daniel J. Lindqvist}, "{ti|Title of Article|Sleep and Memory in University Students}," *{ct|Journal Name|Journal of Learning and Cognition}* {vo|volume|14}, no. {is|issue|3} ({yr|Year|2021}): {pg|page cited|207}, {id|DOI as a link|https://doi.org/10.1234/jlc.2021.014}.`
export const NOTE_BOOK = `{au|First Name Surname|Priya N. Sharma}, *{ti|Title of Book|The Study Habit: How Students Build Lasting Routines}*, {ot|Edition|2nd ed.} ({pb|Publisher|Harbor Lane Press}, {yr|Year|2019}), {pg|page cited|84}.`
export const NOTE_CHAPTER = `{au|First Name Surname|Tomas Ekwueme}, "{ti|Title of Chapter|Retrieval Practice in the Classroom}," in *{ct|Title of Book|Handbook of Effective Study}*, ed. {ed|First Name Surname and First Name Surname|Lena K. Fischer and Omar Haddad} ({pb|Publisher|Meridian Academic Press}, {yr|Year|2020}), {pg|page cited|52}.`
