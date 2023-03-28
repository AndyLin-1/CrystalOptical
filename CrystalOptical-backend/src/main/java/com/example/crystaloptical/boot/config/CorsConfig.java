package com.example.crystaloptical.boot.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

import java.util.List;

@Configuration
public class CorsConfig {
    @Bean
    public CorsFilter corsFilter() {
        CorsConfiguration config = new CorsConfiguration() {
            {
                setAllowCredentials(true);
                setAllowedMethods(List.of("GET", "POST", "PUT", "DELETE", "OPTIONS"));
                setAllowedOriginPatterns(List.of("*"));
                setAllowedHeaders(List.of("Authorization", "Cache-Control", "Content-Type", "Location"));
                addExposedHeader("message");
            }
        };

        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }

}
