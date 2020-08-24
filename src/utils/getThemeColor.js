const getThemeColor = () => {
  const theme = typeof window !== 'undefined' && window.__theme

  if (theme === 'light') return '#fff'
  if (theme === 'dark') return '#48575e'
}

export default getThemeColor
