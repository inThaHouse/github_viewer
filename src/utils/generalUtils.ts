export const truncate = (sentence: string): string => {
  if (sentence && sentence.length > 50) {
    return sentence.substring(0, 50).trim() + '...'
  }

  return sentence
}
