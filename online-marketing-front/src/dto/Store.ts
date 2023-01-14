import {Contact} from "./Contact";
import {Adds} from "./Adds";

export interface Store {
  id: number;
  name: string;
  description: string;
  numOfRating: number;
  sumOfRating: number;
  bannerImage: string | undefined;
  storeImage: string | undefined;
  adds?: Adds[] | undefined;
  contactId?: number;
  address?: string;
  email?: string;
  phone?: string;
}
