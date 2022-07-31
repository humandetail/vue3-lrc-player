const regExp = {
  headReg: /\[(\d+),(\d+)\]/,
  paragraphReg: /\B(?=\<\d+,\d+,\d+\>.+?)/g,
  childReg: /\<(\d+),(\d+),\d+\>(.+)/
}

/**
 * 将歌词文本转成树开结构
 * @param  { string } text - 需要格式化的文本
 */
export function text2tree (text: string = '') {
  const data = text.split(';')
  if (!data.at(-1)) {
    data.pop()
  }
  // const total = data[0].replace('total:', '')
  const offset = +(data[1].replace('offset:', ''))

  return formatParagraph(data.slice(2), offset)
}

/**
 * @typedef ParagraphItem
 * @property { number } startTime - 开始时间
 * @property { number } duration - 本段持续时长
 * @property { string } [text] - 文本
 * @property { ParagraphItem[] } [children] - 子元素 
 */

/**
 * 格式化段落信息
 * @param { string[] } paragraphs - 段落文本
 * @param { number } offset - 偏移量
 * @returns { ParagraphItem[] }
 */
function formatParagraph (paragraphs: string[] = [], offset = 0): LrcItem[] {
  return paragraphs.map(paragraph => {
    const [, startTime, duration] = paragraph.match(regExp.headReg) || []
    const children = paragraph.replace(regExp.headReg, '').split(regExp.paragraphReg)
    return {
      startTime: Number(startTime) + offset,
      duration: +duration,
      children: children.map(child => {
        const [, s, d, t] = child.match(regExp.childReg) || []

        return {
          startTime: Number(s) + offset,
          duration: +d,
          text: t.replace(/\s/, '&emsp;')
        }
      })
    }
  })
}

