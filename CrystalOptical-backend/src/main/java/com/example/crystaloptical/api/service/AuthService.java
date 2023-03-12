package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.request.UserAuthRequest;
import com.example.crystaloptical.api.dto.request.UserRegisterRequest;
import com.example.crystaloptical.api.dto.response.UserLoginResponse;
import com.example.crystaloptical.model.User;
import com.example.crystaloptical.model.repo.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import javax.validation.Valid;

import java.util.Optional;

import static org.springframework.http.HttpStatus.BAD_REQUEST;

@Service
public class AuthService {

    private final UserService userService;
    private final UserRepository userRepository;

    public AuthService(UserService userService, UserRepository userRepository){
        this.userService = userService;
        this.userRepository = userRepository;
    }

    public ResponseEntity<UserLoginResponse> registerUser(@Valid UserRegisterRequest userRegisterRequest) throws Exception {
        User user = new User(userRegisterRequest.getEmail(), userRegisterRequest.getPassword());
        if (userService.userWithEmailExists(user.getEmail())) {
            throw new Exception("Email already taken");
        }
        user.setFirstName(userRegisterRequest.getFirstName());
        user.setLastName(userRegisterRequest.getLastName());
        userRepository.save(user);

        return ResponseEntity.ok().body(UserLoginResponse.builder().jwt(user.getFirstName()).jwtRefresh(user.getLastName()).build());
    }

    public UserLoginResponse loginUser(@Valid UserAuthRequest userAuthRequest) throws Exception {
        User user = new User(userAuthRequest.getEmail(), userAuthRequest.getPassword());
        if (!userService.userWithEmailExists(user.getEmail())) {
            throw new Exception("Email not registered");
        }
        User c = userRepository.findByEmail(user.getEmail()).get();
        if(c.getPassword().equals(user.getPassword())) {
            return UserLoginResponse.builder().jwt(user.getFirstName()).jwtRefresh(user.getLastName()).build();
        }
        else{
            return UserLoginResponse.builder().jwt("wrong pass").jwtRefresh("wrong pass").build();
        }
    }
}
