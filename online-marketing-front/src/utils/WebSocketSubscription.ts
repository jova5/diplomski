export interface WebSocketSubscription{
  subscribeToShortPath: string;
  subscribeFunction: (responseArgument: any) => void;
}
