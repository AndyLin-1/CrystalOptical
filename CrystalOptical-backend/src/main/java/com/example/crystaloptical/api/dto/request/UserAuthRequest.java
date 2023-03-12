package com.example.crystaloptical.api.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.List;

@Getter
@Setter
@Builder
public class UserAuthRequest {

    @NotEmpty
    @Email(message = "Invalid email.")
    private String email;

    @NotEmpty(message = "Password should not be empty.")
    private String password;
    
}
