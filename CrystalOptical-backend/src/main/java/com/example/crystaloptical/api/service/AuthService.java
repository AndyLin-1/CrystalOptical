package com.example.crystaloptical.api.service;

import com.example.crystaloptical.api.dto.request.UserAuthRequest;
import com.example.crystaloptical.api.dto.request.UserRegisterRequest;
import com.example.crystaloptical.api.dto.response.MessageResponse;
import com.example.crystaloptical.api.dto.response.UserLoginResponse;
import com.example.crystaloptical.model.ConfirmationToken;
import com.example.crystaloptical.model.UserRole;
import com.example.crystaloptical.model.Users;
import com.example.crystaloptical.model.repo.UserRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.validation.Valid;
import java.security.SecureRandom;
import java.time.LocalDateTime;
import java.util.UUID;

@Service
public class AuthService {

    private final UserService userService;
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;
    private final JwtTokenService jwtTokenService;


    public AuthService(UserService userService, UserRepository userRepository, BCryptPasswordEncoder bCryptPasswordEncoder,
                       ConfirmationTokenService confirmationTokenService, JwtTokenService jwtTokenService){
        this.userService = userService;
        this.userRepository = userRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
        this.confirmationTokenService = confirmationTokenService;
        this.jwtTokenService = jwtTokenService;
    }

    public ResponseEntity<MessageResponse> registerUser(@Valid UserRegisterRequest userRegisterRequest) throws Exception {
        String email = userRegisterRequest.getEmail();
        String password = userRegisterRequest.getPassword();
        String firstName = userRegisterRequest.getFirstName();
        String lastName = userRegisterRequest.getLastName();

        if (userService.userWithEmailExists(email)) {
            throw new Exception("Email already taken");
        }

        Users user = new Users();
        user.setEmail(email);
        user.setFirstName(firstName);
        user.setLastName(lastName);
        user.setPassword(bCryptPasswordEncoder.encode(password)); // encrypt password using BCrypt
        user.setEnabled(true);
        user.setRole(UserRole.ADMIN);

        //Save User into Database
        userRepository.save(user);

        //Confirmation Token need to send Email

        //JWT

//        UserAuthRequest login = UserAuthRequest.builder().email(user.getEmail()).password(user.getPassword()).build();
        MessageResponse message = MessageResponse.builder().message("Success").build();
        return ResponseEntity.ok().body(message);
    }

    public ResponseEntity<UserLoginResponse> loginUser(@Valid UserAuthRequest userAuthRequest) throws Exception {
        if (!userService.userWithEmailExists(userAuthRequest.getEmail())) {
            throw new Exception("Email not registered");
        }
        return ResponseEntity.ok().body(jwtTokenService.createUserLoginResponse(userAuthRequest));
    }

    private void sendConfirmationEmail(Users user) {
        if (!user.isEnabled()) {
            final String code = generateCode(5);
            final String id = UUID.randomUUID().toString();

            ConfirmationToken confirmationToken = new ConfirmationToken();
            confirmationToken.setToken(code + id);
            confirmationToken.setConfirmationCode(code);
            confirmationToken.setCreatedAt(LocalDateTime.now());
            confirmationToken.setExpiredAt(LocalDateTime.now().plusMinutes(15));
            confirmationToken.setUser(user);
            confirmationTokenService.saveConfirmationToken(confirmationToken);

//            String apiUrl = "localhost:8383/api/v1";
            //TODO send Email and confirm token
        }
    }

    private static String generateCode(int length) {
        SecureRandom random = new SecureRandom();
        StringBuilder sb = new StringBuilder(length);
        for (int i = 0; i < length; i++) {
            sb.append(random.nextInt(10));
        }
        return sb.toString();
    }
}
