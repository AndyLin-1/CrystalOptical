package com.example.crystaloptical.api.dto.response;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@Builder
public class UserLoginResponse {
    private String jwt;
    private String jwtRefresh;
}