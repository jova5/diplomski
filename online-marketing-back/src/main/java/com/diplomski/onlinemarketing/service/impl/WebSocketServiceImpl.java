package com.diplomski.onlinemarketing.service.impl;

import com.diplomski.onlinemarketing.service.WebSocketService;
import org.springframework.messaging.simp.SimpMessagingTemplate;
import org.springframework.stereotype.Service;

@Service
public class WebSocketServiceImpl implements WebSocketService {
    public static final String USER = "user";
    public static final String DELIMITER = "/";
    private final SimpMessagingTemplate simpMessagingTemplate;

    public WebSocketServiceImpl(SimpMessagingTemplate simpMessagingTemplate) {
        this.simpMessagingTemplate = simpMessagingTemplate;
    }

    private void sendMessageTo(Integer userIdReceiver, String messageDestination, Object systemMessage) {
        simpMessagingTemplate.convertAndSend(
                DELIMITER + USER + DELIMITER + userIdReceiver + DELIMITER + messageDestination,
                systemMessage);
    }

    @Override
    public void sendNewAddStatisticMessage(Integer userId, Object message) {
        sendMessageTo(userId, "addStatistics", message);
    }

    @Override
    public void sendNewStoreStatisticMessage(Integer userId, Object message) {
        sendMessageTo(userId, "storeStatistics", message);
    }
}
