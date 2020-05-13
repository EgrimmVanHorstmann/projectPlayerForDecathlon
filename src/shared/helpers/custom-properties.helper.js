const styles = getComputedStyle(document.documentElement)

export default customPropertyName => {
  const value = styles.getPropertyValue(customPropertyName)
  if (value.endsWith('px') || value.endsWith('em')) return +value.slice(0, -2)
  if (value.endsWith('rem')) return +value.slice(0, -3)
  return value
}
