package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.request.UserAuthRequest;
import com.example.crystaloptical.api.dto.request.UserRegisterRequest;
import com.example.crystaloptical.api.dto.response.UserLoginResponse;
import com.example.crystaloptical.model.Users;
import com.example.crystaloptical.model.repo.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.validation.Valid;

@Service
public class AuthService {

    private final UserService userService;
    private final UserRepository userRepository;

    public AuthService(UserService userService, UserRepository userRepository){
        this.userService = userService;
        this.userRepository = userRepository;
    }

    public ResponseEntity<UserLoginResponse> registerUser(@Valid UserRegisterRequest userRegisterRequest) throws Exception {
        Users users = new Users(userRegisterRequest.getEmail(), userRegisterRequest.getPassword());
        if (userService.userWithEmailExists(users.getEmail())) {
            throw new Exception("Email already taken");
        }
        users.setFirstName(userRegisterRequest.getFirstName());
        users.setLastName(userRegisterRequest.getLastName());
        userRepository.save(users);

        return ResponseEntity.ok().body(UserLoginResponse.builder().jwt(users.getFirstName()).jwtRefresh(users.getLastName()).build());
    }

    public UserLoginResponse loginUser(@Valid UserAuthRequest userAuthRequest) throws Exception {
        Users users = new Users(userAuthRequest.getEmail(), userAuthRequest.getPassword());
        if (!userService.userWithEmailExists(users.getEmail())) {
            throw new Exception("Email not registered");
        }
        Users c = userRepository.findByEmail(users.getEmail()).get();
        if(c.getPassword().equals(users.getPassword())) {
            return UserLoginResponse.builder().jwt(users.getFirstName()).jwtRefresh(users.getLastName()).build();
        }
        else{
            return UserLoginResponse.builder().jwt("wrong pass").jwtRefresh("wrong pass").build();
        }
    }
}
