import {UserRequest} from "../../../dto/UserRequest";
import {StoreRequest} from "../../../dto/StoreRequest";
import {AddRequest} from "../../../dto/AddRequest";

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

export const checkAddReqForm = (add: AddRequest): boolean => {
  return add.header !== "" && add.description !== "" && add.image !== "" && add.storeId !== -1 && add.premium !== null;
}

export const checkEditReqForm = (add: AddRequest): boolean => {
  return add.header !== "" && add.description !== "" && add.image !== "" && add.premium !== null;
}
