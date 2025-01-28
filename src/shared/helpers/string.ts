export const stringOrEmpty = (s: unknown): string => {
  if (typeof s === 'string') {
    return s;
  }
  if (typeof s === 'number') {
    return String(s);
  }
  return '';
};
