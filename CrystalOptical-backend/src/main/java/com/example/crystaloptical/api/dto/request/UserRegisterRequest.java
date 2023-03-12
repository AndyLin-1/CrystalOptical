package com.example.crystaloptical.api.dto.request;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;

@Getter
@Setter
@Builder
public class UserRegisterRequest {
    @NotEmpty
    @Email(message = "Invalid email.")
    private String email;

    @Pattern(regexp = "^[a-zA-Z\\s]+$")
    @NotEmpty
    private String firstName;

    @Pattern(regexp = "^[a-zA-Z\\s]+$")
    @NotEmpty
    private String lastName;

    @NotEmpty(message = "Password should not be empty.")
    private String password;

}
