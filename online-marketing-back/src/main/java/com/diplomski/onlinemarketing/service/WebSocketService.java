package com.diplomski.onlinemarketing.service;

public interface WebSocketService {
    void sendNewAddStatisticMessage(Integer userId, Object message);

    void sendNewStoreStatisticMessage(Integer userId, Object message);
}
