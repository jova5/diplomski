package com.diplomski.onlinemarketing.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.messaging.simp.config.MessageBrokerRegistry;
import org.springframework.web.socket.config.annotation.EnableWebSocketMessageBroker;
import org.springframework.web.socket.config.annotation.StompEndpointRegistry;
import org.springframework.web.socket.config.annotation.WebSocketMessageBrokerConfigurer;

@Configuration
@EnableWebSocketMessageBroker
public class WebSocketConfig implements WebSocketMessageBrokerConfigurer {

    public static final String DELIMITER = "/";
    public static final String USER = "user";
    public static final String WEBSOCKET = "webSocket";
    public static final String ALLOWED_ORIGINS = "*";

    @Override
    public void configureMessageBroker(MessageBrokerRegistry config) {
        // Set prefix for the endpoint that the client listens for our messages from
        config.enableSimpleBroker(DELIMITER + USER);
    }

    @Override
    public void registerStompEndpoints(StompEndpointRegistry registry) {
        // Registers the endpoint where the connection will take place
        registry.addEndpoint(DELIMITER + WEBSOCKET)
                // Allow the origin for everyone to send messages to us. (Base URL of the client)
                .setAllowedOriginPatterns(ALLOWED_ORIGINS)
                // Enable SockJS fallback options
                .withSockJS();
    }
}
