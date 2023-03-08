export const loginCheck = (userName: string, password: string): boolean => {
  return userName !== "" && password !== "";
}

export const registerCheck = (userName: string, email: string, password: string, storeName: string): boolean => {
  return userName !== "" && password !== "" && email !== "" && storeName !== "";
}
