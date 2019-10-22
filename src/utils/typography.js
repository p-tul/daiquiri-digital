import Typography from 'typography'
import Theme from 'typography-theme-grand-view'
const typography = new Typography(Theme)

Theme.baseFontSize = "24px";
Theme.baseLineHeight = "1.6";

export const { scale, rhythm, options } = typography
export default typography