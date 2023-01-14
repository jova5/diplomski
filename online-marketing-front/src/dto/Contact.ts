import {Phone} from "./Phone";
import {Email} from "./Email";

export interface Contact {
  storeId: number;
  type: string;
  address: string;
  latitude: number;
  longitude: number;
  emails: Email[];
  phones: Phone[];
}
