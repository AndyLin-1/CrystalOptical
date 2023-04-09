package com.example.crystaloptical.api.service;


import com.example.crystaloptical.api.dto.request.UserAuthRequest;
import com.example.crystaloptical.api.dto.response.UserLoginResponse;
import com.example.crystaloptical.api.util.JwtUtil;
import com.example.crystaloptical.model.Users;
import com.example.crystaloptical.model.repo.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class JwtTokenService implements UserDetailsService {

    private final UserRepository userRepository;
    private final JwtUtil jwtUtil;
    private final AuthenticationManager authenticationManager;

    //Autowiring
    public JwtTokenService(UserRepository userRepository, JwtUtil jwtUtil, AuthenticationManager authenticationManager){
        this.userRepository = userRepository;
        this.jwtUtil = jwtUtil;
        this.authenticationManager = authenticationManager;
    }

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        Users user = userRepository.findByEmail(email).get();
        if(userRepository.findByEmail(email).isPresent()) {
            return new User(user.getUsername(),
                    user.getPassword(),
                    user.getAuthorities());
        }else {
            throw new UsernameNotFoundException("Username is not valid");
        }
    }

    public UserLoginResponse createUserLoginResponse(UserAuthRequest userAuthRequest) throws Exception {
        String email =  userAuthRequest.getEmail();
        authenticateUser(userAuthRequest);
        final UserDetails userDetails = loadUserByUsername(email);

        String newToken = jwtUtil.generateToken(userDetails);
        Users user = userRepository.findByEmail(email).get();

        return UserLoginResponse.builder().jwtToken(newToken).build();
    }

    public Optional<Authentication> authenticateUser(UserAuthRequest userAuthRequest) throws Exception {
        try {
            return Optional.ofNullable(
                    authenticationManager.authenticate(
                            new UsernamePasswordAuthenticationToken(
                                    userAuthRequest.getEmail(), userAuthRequest.getPassword())));
        } catch (Exception e) {
            throw new Exception(e.getMessage());
        }
    }


}
