export const truncate = (sentence: string, limit: number): string => {
  if (sentence && sentence.length > limit) {
    return sentence.substring(0, limit).trim() + '...'
  }

  return sentence
}
