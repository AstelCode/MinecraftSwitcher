export function isValidText(text?: string, empty: boolean = true) {
  if (empty) return text && text.length > 0;
  return text;
}
