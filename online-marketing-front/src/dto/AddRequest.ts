export interface AddRequest {
  storeId?: number;
  image: string | unknown;
  header: string;
  description: string;
  premium: boolean;
}
