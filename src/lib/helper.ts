export const capitalizeFirstLetter = (string: string | undefined) => {
  if (!string) return '';
  return string.charAt(0).toUpperCase() + string.slice(1);
}

export const normalizeComponentName = (string: string | undefined) => {
  if (!string) return '';

  let name = string.split('/').pop()?.split('.')[0];
  if (!name) return string;

  return capitalizeFirstLetter(name);
}