const generateRandomString = () => {
  return Math.random().toString(36).substr(2, 5)
}

export const generateUniqueKey = (identifier) => {
  return `${identifier}-${generateRandomString()}`
}