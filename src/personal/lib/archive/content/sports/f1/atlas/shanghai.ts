import type { Guide } from '../../../../guide'
import { circuitGuide } from '../../../../../f1/guides'

// Built from the lap model in lib/f1, so the numbers always match the graphs.
const guide: Guide = circuitGuide('shanghai')

export default guide
