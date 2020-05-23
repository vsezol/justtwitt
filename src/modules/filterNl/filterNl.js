export default text => {
  const textArr = text.split('\n')
  const fTextArr = []
  let isLastSymbolNl = false
  for (let i = 0; i <= textArr.length; i++) {
    const item = textArr[i]
    if (!isLastSymbolNl && item === '') {
      fTextArr.push(item)
      isLastSymbolNl = true
    } else if (!isLastSymbolNl && item !== '') {
      fTextArr.push(item)
    } else if (isLastSymbolNl && item !== '') {
      fTextArr.push(item)
      isLastSymbolNl = false
    }
  }
  return fTextArr.join('\n')
}
