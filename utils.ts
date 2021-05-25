export function hasFileExtension(filename: string, extension: string): boolean {
  return new RegExp(`^[_A-Za-z-]+\.${extension}$`).test(filename);
}
