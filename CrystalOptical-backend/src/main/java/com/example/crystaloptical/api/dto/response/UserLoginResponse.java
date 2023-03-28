package com.example.crystaloptical.api.dto.response;

import com.example.crystaloptical.model.Users;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class UserLoginResponse {
    private Users user;
    private String jwtToken;
}