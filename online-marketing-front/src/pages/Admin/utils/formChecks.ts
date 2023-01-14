import {UserRequest} from "../../../dto/UserRequest";
import {StoreRequest} from "../../../dto/StoreRequest";

export const checkNewSyntaxForm = (languageId: string, key: string, syntax: string): boolean => {
  return languageId !== "" && key !== "" && syntax !== "";
}

export const checkEditSyntaxForm = (key: string, syntax: string): boolean => {
  return key !== "" && syntax !== "";
}

export const checkUserReqForm = (user: UserRequest): boolean => {
  return user.name !== "" && user.password !== "" && user.email !== "" && user.type !== "";
}

export const checkStoreReqForm = (store: StoreRequest, address: string, email: string, phone: string): boolean => {
  return store.name !== "" && store.description !== "" && address !== "" && email !== "" && phone !== "";
}
