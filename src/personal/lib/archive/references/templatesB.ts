import type { TemplateSet } from './templatesA'

export const WEBPAGE: TemplateSet = {
  apa: `{au|Surname, A. A.|Marin, S.} ({yr|Year, Month Day|2023, March 12}). *{ti|Title of page in sentence case|How to plan a revision timetable}*. {ct|Site name|Northbridge Student Hub}. {id|URL|https://studenthub.example.edu/revision-timetable}`,
  mla: `{au|Surname, First Name.|Marin, Sofia.} "{ti|Title of Page in Title Case|How to Plan a Revision Timetable}." *{ct|Website Name|Northbridge Student Hub}*, {yr|Day Month Year|12 Mar. 2023}, {id|URL without https://|studenthub.example.edu/revision-timetable}.`,
  chicago: `{au|Surname, First Name.|Marin, Sofia.} "{ti|Title of Page|How to Plan a Revision Timetable}." {ct|Website Name|Northbridge Student Hub}. {yr|Month Day, Year|March 12, 2023}. {id|URL|https://studenthub.example.edu/revision-timetable}.`,
  harvard: `{au|Surname, A.B.|Marin, S.} ({yr|Year|2023}) *{ti|Title of page|How to plan a revision timetable}*. Available at: {id|URL|https://studenthub.example.edu/revision-timetable} (Accessed: {ot|Day Month Year|4 May 2026}).`,
  ieee: `{au|A. B. Surname|S. Marin}, "{ti|Title of page|How to plan a revision timetable}," {ct|Website Name|Northbridge Student Hub}. {id|URL|https://studenthub.example.edu/revision-timetable} (accessed {ot|Mon. Day, Year|May 4, 2026}).`,
  vancouver: `{au|Surname AB.|Marin S.} {ti|Title of page|How to plan a revision timetable} [Internet]. {pb|Place: Publisher|Singapore: Northbridge Student Hub}; {yr|Year|2023} [cited {ot|Year Mon Day|2026 May 4}]. Available from: {id|URL|https://studenthub.example.edu/revision-timetable}`,
}

export const REPORT: TemplateSet = {
  apa: `{au|Surname, A. A., & Surname, B. B.|Lim, G. T., & Patel, A.} ({yr|Year|2022}). *{ti|Title of report|Student wellbeing and study habits: A national survey}* ({ot|Report number|Report No. 24}). {pb|Publisher|Centre for Learning Research}. {id|URL|https://clr.example.org/reports/wellbeing-2022.pdf}`,
  mla: `{au|Surname, First Name, and First Name Surname|Lim, Grace T., and Arjun Patel}. *{ti|Title of Report|Student Wellbeing and Study Habits: A National Survey}*. {ot|Report number|Report no. 24}, {pb|Publisher|Centre for Learning Research}, {yr|Year|2022}, {id|URL without https://|clr.example.org/reports/wellbeing-2022.pdf}.`,
  chicago: `{au|Surname, First Name, and First Name Surname|Lim, Grace T., and Arjun Patel}. *{ti|Title of Report|Student Wellbeing and Study Habits: A National Survey}*. {ot|Report number|Report no. 24}. {pb|Publisher|Centre for Learning Research}, {yr|Year|2022}. {id|URL|https://clr.example.org/reports/wellbeing-2022.pdf}.`,
  harvard: `{au|Surname, A.B. and Surname, C.D.|Lim, G.T. and Patel, A.} ({yr|Year|2022}) *{ti|Title of report|Student wellbeing and study habits: a national survey}*. {pb|Place: Publisher|Singapore: Centre for Learning Research} ({ot|Report number|Report No. 24}). Available at: {id|URL|https://clr.example.org/reports/wellbeing-2022.pdf} (Accessed: 4 May 2026).`,
  ieee: `{au|A. B. Surname and C. D. Surname|G. T. Lim and A. Patel}, "{ti|Title of report|Student wellbeing and study habits: A national survey}," {pb|Publisher|Centre for Learning Research}, {ot|City, Country|Singapore}, {ot|Rep. number|Rep. 24}, {yr|Month Year|Mar. 2022}. [Online]. Available: {id|URL|https://clr.example.org/reports/wellbeing-2022.pdf}`,
  vancouver: `{au|Surname AB, Surname CD.|Lim GT, Patel A.} {ti|Title of report|Student wellbeing and study habits: a national survey}. {pb|Place: Publisher|Singapore: Centre for Learning Research}; {yr|Year|2022}. {ot|Report No.: number|Report No.: CLR-24}.`,
}

export const THESIS: TemplateSet = {
  apa: `{au|Surname, A. A.|Tan, J. W.} ({yr|Year|2020}). *{ti|Title of thesis|Sleep, stress and exam performance in polytechnic students}* [{ot|Doctoral dissertation, University Name|Doctoral dissertation, University of Northbridge}]. {ct|Repository or database|Northbridge Research Repository}. {id|URL|https://repository.example.edu/handle/12345}`,
  mla: `{au|Surname, First Name.|Tan, Jun W.} *{ti|Title of Thesis|Sleep, Stress and Exam Performance in Polytechnic Students}*. {yr|Year|2020}. {pb|University|University of Northbridge}, {ot|PhD dissertation|PhD dissertation}. {ct|Repository|Northbridge Research Repository}, {id|URL without https://|repository.example.edu/handle/12345}.`,
  chicago: `{au|Surname, First Name.|Tan, Jun W.} "{ti|Title of Thesis|Sleep, Stress and Exam Performance in Polytechnic Students}." {ot|PhD diss.|PhD diss.}, {pb|University|University of Northbridge}, {yr|Year|2020}. {id|URL|https://repository.example.edu/handle/12345}.`,
  harvard: `{au|Surname, A.B.|Tan, J.W.} ({yr|Year|2020}) *{ti|Thesis title|Sleep, stress and exam performance in polytechnic students}*. {ot|Qualification|PhD thesis}. {pb|University|University of Northbridge}. Available at: {id|URL|https://repository.example.edu/handle/12345} (Accessed: 4 May 2026).`,
  ieee: `{au|A. B. Surname|J. W. Tan}, "{ti|Title of thesis|Sleep, stress and exam performance in polytechnic students}," {ot|Ph.D. dissertation|Ph.D. dissertation}, {pb|Dept., University|Dept. Psychol., Univ. Northbridge}, {ot|City, Country|Singapore}, {yr|Year|2020}.`,
  vancouver: `{au|Surname AB.|Tan JW.} {ti|Title of thesis|Sleep, stress and exam performance in polytechnic students} [{ot|Degree|PhD thesis}]. {pb|Place: University|Singapore: University of Northbridge}; {yr|Year|2020}.`,
}

export const NOTE_WEBPAGE = `{au|First Name Surname|Sofia Marin}, "{ti|Title of Page|How to Plan a Revision Timetable}," {ct|Website Name|Northbridge Student Hub}, {yr|Month Day, Year|March 12, 2023}, {id|URL|https://studenthub.example.edu/revision-timetable}.`
export const NOTE_REPORT = `{au|First Name Surname and First Name Surname|Grace T. Lim and Arjun Patel}, *{ti|Title of Report|Student Wellbeing and Study Habits: A National Survey}*, {ot|Report number|Report no. 24} ({pb|Publisher|Centre for Learning Research}, {yr|Year|2022}), {pg|page cited|18}, {id|URL|https://clr.example.org/reports/wellbeing-2022.pdf}.`
export const NOTE_THESIS = `{au|First Name Surname|Jun W. Tan}, "{ti|Title of Thesis|Sleep, Stress and Exam Performance in Polytechnic Students}" ({ot|PhD diss.|PhD diss.}, {pb|University|University of Northbridge}, {yr|Year|2020}), {pg|page cited|66}.`
