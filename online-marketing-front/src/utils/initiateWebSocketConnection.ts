import SockJS from 'sockjs-client';
import * as Stomp from "@stomp/stompjs";
import {WebSocketSubscription} from "./WebSocketSubscription";

let stompClient: any = null;
let arrayOfSubscriptions: WebSocketSubscription[] = [];

const initiateWebSocketConnection = (
  connectToUrl: string,
  setIsWebSocketConnected: (isConnected: boolean) => void,
  errorHandlingCallbackFunction: (messageToShow: any) => void
) => {
  stompClient = new Stomp.Client({
    brokerURL: 'ws://localhost:8080/webSocket',
    debug: (res) => {
      console.log(res)
    },
    reconnectDelay: 30000,
    heartbeatIncoming: 4000,
    heartbeatOutgoing: 4000,
  });

  stompClient.webSocketFactory = () => {
    return new SockJS(connectToUrl);
  };

  stompClient.onConnect = () => {
    setIsWebSocketConnected(true);

    arrayOfSubscriptions.forEach((webSocketSubscription) => {
      stompClient.subscribe(
        webSocketSubscription.subscribeToShortPath,
        (messageOutput: any) => webSocketSubscription.subscribeFunction(messageOutput.body)
      );
    })
  };

  stompClient.onStompError = () => {
    errorHandlingCallbackFunction("webSocketStompError");
  };

  stompClient.onWebSocketError = () => {
    errorHandlingCallbackFunction('webSocketError');
  }

  stompClient.onWebSocketClose = () => {
    errorHandlingCallbackFunction("webSocketClosed");
  }

  stompClient.activate();
}

const initiateWebSocketSubscription = (
  subscribeToShortPath: string,
  subscriptionFunction: (response: any) => void
) => {
  stompClient.subscribe(
    subscribeToShortPath,
    (messageOutput: any) => subscriptionFunction(messageOutput.body),
  );

  arrayOfSubscriptions.push({
    subscribeToShortPath: subscribeToShortPath,
    subscribeFunction: (responseArgument) => subscriptionFunction(responseArgument)
  })
}

export {initiateWebSocketConnection, initiateWebSocketSubscription};
