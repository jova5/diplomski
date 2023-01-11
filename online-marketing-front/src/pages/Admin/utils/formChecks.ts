export const checkNewSyntaxForm = (languageId: string, key: string, syntax:string): boolean => {
  return languageId !== "" && key !== "" && syntax !== "";
}

export const checkEditSyntaxForm = (key: string, syntax:string): boolean => {
  return key !== "" && syntax !== "";
}
