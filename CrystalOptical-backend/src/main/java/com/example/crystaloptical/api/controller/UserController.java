package com.example.crystaloptical.api.controller;


import com.example.crystaloptical.api.dto.request.UserAuthRequest;
import com.example.crystaloptical.api.dto.request.UserRegisterRequest;
import com.example.crystaloptical.api.dto.response.UserLoginResponse;
import com.example.crystaloptical.api.service.AuthService;
import com.example.crystaloptical.api.service.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

import static org.springframework.http.HttpStatus.OK;

@CrossOrigin
@RestController
@RequestMapping("api/v1/user")
public class UserController {

    private final UserService userService;
    private final AuthService authService;


    public UserController(UserService userService, AuthService authService) {
        this.userService = userService;
        this.authService = authService;
    }

    /**
     * @param userRegisterRequest a {@link UserRegisterRequest} with user registration details
     * @return an anonymous {@link UserLoginResponse}
     */
    @ResponseStatus(OK)
    @PostMapping("/register")
    public String registerUser(
            @Valid @RequestBody UserRegisterRequest userRegisterRequest) throws Exception {
        return authService.registerUser(userRegisterRequest);
    }

    @ResponseStatus(OK)
    @PostMapping("/login")
    public ResponseEntity<UserLoginResponse> loginUser(
            @Valid @RequestBody UserAuthRequest userAuthRequest) throws Exception {
        return authService.loginUser(userAuthRequest);
    }

    @GetMapping("/forAdmin")
    @PreAuthorize("hasAuthority('ADMIN')")
    public String forAdmin(){
        return "YES";
    }

    @GetMapping("/forUser")
    @PreAuthorize("hasAnyAuthority('USER', 'ADMIN')")
    public String forUser(){
        return "YES";
    }



}
