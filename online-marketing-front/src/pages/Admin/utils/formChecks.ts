import {UserRequest} from "../../../dto/UserRequest";

export const checkNewSyntaxForm = (languageId: string, key: string, syntax:string): boolean => {
  return languageId !== "" && key !== "" && syntax !== "";
}

export const checkEditSyntaxForm = (key: string, syntax:string): boolean => {
  return key !== "" && syntax !== "";
}

export const checkNewUserForm = (user: UserRequest): boolean => {
  return user.name !== "" && user.password !== "" && user.email !== "" && user.type !== "";
}
